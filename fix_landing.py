import codecs
with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'r', 'utf-8') as f:
    c = f.read()

c = c.replace('className=\"landing-cls-22\"', 'className=\"landing-cls-22 hero-glow-container\"')
c = c.replace('className=\"landing-cls-24\"', 'className=\"landing-cls-24 hero-glow\"')
c = c.replace('className=\"landing-cls-48\"', 'className=\"landing-cls-48 features-grid\"')
c = c.replace('className=\"landing-cls-64\"', 'className=\"landing-cls-64 trust-metrics\"')

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'w', 'utf-8') as f:
    f.write(c)
