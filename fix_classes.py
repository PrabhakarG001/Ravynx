import codecs
with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'r', 'utf-8') as f:
    c = f.read()

c = c.replace('className=\"landing-cls-48 features-grid\"', 'className=\"landing-cls-48\"')
c = c.replace('className=\"landing-cls-64 trust-metrics\"', 'className=\"landing-cls-64\"')
c = c.replace('className=\"landing-cls-31\"', 'className=\"landing-cls-31 features-grid\"')
c = c.replace('className=\"landing-cls-162\"', 'className=\"landing-cls-162 trust-metrics\"')

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'w', 'utf-8') as f:
    f.write(c)
