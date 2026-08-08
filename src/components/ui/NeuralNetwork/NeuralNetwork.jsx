import './NeuralNetwork.css';
import React, { useEffect, useRef } from 'react';

export default function NeuralNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const particles = [];
    // Adjust density based on screen width
    const numParticles = width < 768 ? 40 : 80;
    const connectionDistance = 150;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Slow drifting movement
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 1.5 + 1;
        this.baseColor = Math.random() > 0.5 ? '#d946ef' : '#9333ea'; // fuchsia-500 or purple-600
        this.pulse = 0;
        this.isPulsing = false;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges smoothly
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Random chance to pulse (representing "decision happening")
        if (!this.isPulsing && Math.random() < 0.005) {
          this.isPulsing = true;
          this.pulse = 1;
        }

        if (this.isPulsing) {
          this.pulse -= 0.015; // Fade out speed
          if (this.pulse <= 0) {
            this.pulse = 0;
            this.isPulsing = false;
          }
        }
      }
      
      draw() {
        ctx.beginPath();
        const currentRadius = this.radius + (this.pulse * 2);
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
        
        ctx.fillStyle = this.baseColor;
        ctx.fill();
        
        // Draw the pulse aura
        if (this.pulse > 0) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, currentRadius * 2.5, 0, Math.PI * 2);
          const alpha = Math.max(0, this.pulse * 0.5).toFixed(2);
          ctx.fillStyle = `rgba(${this.baseColor === '#d946ef' ? '217, 70, 239' : '147, 51, 234'}, ${alpha})`;
          ctx.fill();
        }
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Calculate opacity based on distance (closer = more opaque)
            // If either node is pulsing, the line gets a bit brighter
            const baseOpacity = 1 - (distance / connectionDistance);
            const pulseBoost = (particles[i].pulse + particles[j].pulse) * 0.2;
            const opacity = Math.min(1, baseOpacity * 0.4 + pulseBoost);
            
            // Draw gradient line between nodes based on their colors
            const grad = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            grad.addColorStop(0, `rgba(${particles[i].baseColor === '#d946ef' ? '217, 70, 239' : '147, 51, 234'}, ${opacity})`);
            grad.addColorStop(1, `rgba(${particles[j].baseColor === '#d946ef' ? '217, 70, 239' : '147, 51, 234'}, ${opacity})`);
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = baseOpacity * 1.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="neuralnetwork-cls-1" 
      style={{ 
        maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', 
        WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' 
      }} 
    />
  );
}
