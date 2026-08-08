import codecs
with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'r', 'utf-8') as f:
    c = f.read()
c = c.replace('<section className="py-24 relative z-10 bg-[#0a0c10]">', '<section className="py-24 relative z-10">')
with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'w', 'utf-8') as f:
    f.write(c)

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.css', 'r', 'utf-8') as f:
    css = f.read()

import re
css = re.sub(r'(\.landing-cls-29\s*\{[^}]*)text-white', r'\1text-slate-900', css)
css = re.sub(r'(\.landing-cls-30\s*\{[^}]*)text-slate-300', r'\1text-slate-500', css)

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.css', 'w', 'utf-8') as f:
    f.write(css)
