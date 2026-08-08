import codecs
with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'r', 'utf-8') as f:
    c = f.read()

c = c.replace('<motion.div className="landing-cls-27" style={{ opacity: pageOpacity }}>', '<div className="landing-cls-27">')
c = c.replace('</motion.div>\n\n</div>\n</div>\n\n{/* Problem vs Solution', '</div>\n\n</div>\n</div>\n\n{/* Problem vs Solution')

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'w', 'utf-8') as f:
    f.write(c)
