import codecs

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'r', 'utf-8') as f:
    content = f.read()

# Fix the styling
content = content.replace("backgroundColor: '#ffffff'", "backgroundColor: '#000000'")
content = content.replace('text-black', '')
content = content.replace('text-gray-700', '')
content = content.replace('text-gray-600', '')
content = content.replace('className="landing-cls-32 cursor-pointer bg-white"', 'className="landing-cls-32 cursor-pointer"')

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'w', 'utf-8') as f:
    f.write(content)
