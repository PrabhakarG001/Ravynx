import codecs
import re

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'r', 'utf-8') as f:
    content = f.read()

# Add the ref and hooks right after containerRef
hooks_injection = '''    const containerRef = useRef(null);
    const coreCapabilitiesRef = useRef(null);
    const { scrollYProgress: coreScroll } = useScroll({
        target: coreCapabilitiesRef,
        offset: ["start 95%", "start 10%"]
    });
    const coreScale = useTransform(coreScroll, [0, 1], [0.6, 1]);
    const coreX = useTransform(coreScroll, [0, 1], ["40vw", "0vw"]);
    const coreY = useTransform(coreScroll, [0, 1], ["40vh", "0vh"]);
    const coreBorderRadius = useTransform(coreScroll, [0, 1], ["40px", "0px"]);'''

content = content.replace('const containerRef = useRef(null);', hooks_injection)

# Replace the section with the new animated wrapper
old_section = r'<section className="py-24 relative z-10 overflow-hidden">.*?</section>'

new_section = '''{/* Core Capabilities Background Expansion Wrapper */}
<motion.section 
  ref={coreCapabilitiesRef}
  style={{ 
    scale: coreScale, 
    x: coreX, 
    y: coreY, 
    borderRadius: coreBorderRadius,
    backgroundColor: '#ffffff'
  }}
  className="py-24 relative z-20 overflow-hidden"
>
  <motion.div 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
    viewport={{ once: false, margin: "-50px" }} 
    className="w-full max-w-6xl mx-auto px-6 md:px-12"
  >
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} 
      viewport={{ once: false, margin: "-50px" }} 
      className="landing-cls-28"
    >
      <h2 className="landing-cls-29 text-black">Core Capabilities</h2>
      <p className="landing-cls-30 text-gray-700">An advanced suite of AI tools designed to automate your underwriting process and eliminate document fraud at the source.</p>
    </motion.div>
    
    <div className="landing-cls-31 features-grid">
      {features.map(({ icon: Icon, title, desc }, index) => (
        <motion.div 
          key={title} 
          initial={{ opacity: 0, y: 25, scale: 0.98 }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }} 
          whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.08)" }}
          transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: [0.22, 1, 0.36, 1] }} 
          viewport={{ once: false, margin: "-50px" }} 
          className="landing-cls-32 cursor-pointer bg-white"
        >
          <div className="landing-cls-33">
            <Icon size={18} className="landing-cls-34 transition-all duration-300 opacity-90 scale-95 group-hover:scale-100 group-hover:opacity-100" />
          </div>
          <h3 className="landing-cls-35">{title}</h3>
          <p className="landing-cls-36 text-gray-600">{desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</motion.section>'''

content = re.sub(old_section, new_section, content, flags=re.DOTALL)

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'w', 'utf-8') as f:
    f.write(content)
