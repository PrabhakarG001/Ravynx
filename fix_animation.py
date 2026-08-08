import codecs
import re

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'r', 'utf-8') as f:
    content = f.read()

old_section = r'<section className="py-24 relative z-10 overflow-hidden">.*?</section>'

new_section = '''<section className="py-24 relative z-10 overflow-hidden">
<motion.div 
  initial={{ opacity: 0, x: 120, y: 120, scale: 0.97 }} 
  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} 
  exit={{ opacity: 0, x: -80, y: -80, scale: 0.98, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }} 
  viewport={{ once: false, margin: "-50px" }} 
  className="w-full max-w-6xl mx-auto px-6 md:px-12"
>
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} 
    viewport={{ once: false, margin: "-50px" }} 
    className="landing-cls-28"
  >
    <h2 className="landing-cls-29">Core Capabilities</h2>
    <p className="landing-cls-30">An advanced suite of AI tools designed to automate your underwriting process and eliminate document fraud at the source.</p>
  </motion.div>
  
  <div className="landing-cls-31 features-grid">
    {features.map(({ icon: Icon, title, desc }, index) => (
      <motion.div 
        key={title} 
        initial={{ opacity: 0, y: 25, scale: 0.98 }} 
        whileInView={{ opacity: 1, y: 0, scale: 1 }} 
        whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)" }}
        transition={{ duration: 0.6, delay: 0.3 + (index * 0.12), ease: [0.22, 1, 0.36, 1] }} 
        viewport={{ once: false, margin: "-50px" }} 
        className="landing-cls-32 cursor-pointer"
      >
        <div className="landing-cls-33">
          <Icon size={18} className="landing-cls-34 transition-all duration-300 opacity-90 scale-95 group-hover:scale-100 group-hover:opacity-100" />
        </div>
        <h3 className="landing-cls-35">{title}</h3>
        <p className="landing-cls-36">{desc}</p>
      </motion.div>
    ))}
  </div>
</motion.div>
</section>'''

content = re.sub(old_section, new_section, content, flags=re.DOTALL)

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'w', 'utf-8') as f:
    f.write(content)
