import codecs
import re

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.css', 'r', 'utf-8') as f:
    css_content = f.read()

css_content = re.sub(
    r'\.landing-cls-7\s*\{\s*@apply\s+sticky\s+top-0\s+h-screen\s+bg-black\s+overflow-hidden\s+z-0;\s*\}',
    '.landing-cls-7 {\n  @apply sticky top-0 h-screen bg-background overflow-hidden z-0;\n}',
    css_content
)

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.css', 'w', 'utf-8') as f:
    f.write(css_content)

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'r', 'utf-8') as f:
    jsx_content = f.read()

jsx_content = jsx_content.replace("backgroundColor: '#000000'", "backgroundColor: '#ffffff'")
jsx_content = jsx_content.replace('className="landing-cls-29"', 'className="landing-cls-29 text-black"')
jsx_content = jsx_content.replace('className="landing-cls-30"', 'className="landing-cls-30 text-gray-700"')
jsx_content = jsx_content.replace('className="landing-cls-36"', 'className="landing-cls-36 text-gray-600"')
jsx_content = jsx_content.replace('className="landing-cls-32 cursor-pointer"', 'className="landing-cls-32 cursor-pointer bg-white"')

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'w', 'utf-8') as f:
    f.write(jsx_content)
