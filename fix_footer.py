import codecs
with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'r', 'utf-8') as f:
    c = f.read()

c = c.replace('className="landing-cls-199"', 'className="landing-cls-199 footer-brand"')
c = c.replace('className="landing-cls-202"', 'className="landing-cls-202 footer-socials"')

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'w', 'utf-8') as f:
    f.write(c)
