import codecs
import re

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'r', 'utf-8') as f:
    content = f.read()

# Replace the Core Capabilities section
old_section_pattern = r'<section className="py-24 relative z-10">.*?</section>'
new_section = '''{/* Expanding Card */}
<motion.div className="landing-cls-26" initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} style={{
left: cardLeft,
width: cardWidth,
height: cardHeight,
borderTopLeftRadius: cardBorderRadius,
borderTopRightRadius: cardBorderRadius,
borderTopWidth: cardBorderWidth,
borderLeftWidth: cardBorderWidth,
borderRightWidth: cardBorderWidth,
borderColor: cardBorderColor,
backgroundColor: cardBgColor,
borderStyle: "solid",
zIndex: 30
}}>
{/* Card Content Removed as per user request */}
</motion.div>

{/* Core Capabilities Revealed */}
<motion.div className="landing-cls-27" style={{ opacity: pageOpacity }}>
<div className={w-full max-w-6xl mx-auto px-6 md:px-12 }>
<div className="landing-cls-28">
<h2 className="landing-cls-29">Core Capabilities</h2>
<p className="landing-cls-30">An advanced suite of AI tools designed to automate your underwriting process and eliminate document fraud at the source.</p>
</div>
<div className="landing-cls-31 features-grid">
{features.map(({ icon: Icon, title, desc }) => (<div key={title} className="landing-cls-32">
<div className="landing-cls-33">
<Icon size={18} className="landing-cls-34"/>
</div>
<h3 className="landing-cls-35">{title}</h3>
<p className="landing-cls-36">{desc}</p>
</div>))}
</div>
</div>
</motion.div>
'''

content = re.sub(old_section_pattern, new_section, content, flags=re.DOTALL)

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'w', 'utf-8') as f:
    f.write(content)

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.css', 'r', 'utf-8') as f:
    css = f.read()

css = re.sub(r'(\.landing-cls-7\s*\{[^}]*)h-\[150vh\]', r'\1h-[200vh]', css)

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.css', 'w', 'utf-8') as f:
    f.write(css)
