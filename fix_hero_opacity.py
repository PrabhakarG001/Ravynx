import codecs

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'r', 'utf-8') as f:
    content = f.read()

# Add heroOpacity
content = content.replace(
    'const coreBorderRadius = useTransform(coreScroll, [0, 1], ["40px", "0px"]);',
    'const coreBorderRadius = useTransform(coreScroll, [0, 1], ["40px", "0px"]);\n    const heroOpacity = useTransform(coreScroll, [0, 0.4], [1, 0]);'
)

# Apply heroOpacity to the Hero div
content = content.replace(
    '<motion.div className="landing-cls-9">',
    '<motion.div className="landing-cls-9" style={{ opacity: heroOpacity }}>'
)

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'w', 'utf-8') as f:
    f.write(content)
