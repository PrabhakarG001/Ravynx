import codecs

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'r', 'utf-8') as f:
    lines = f.readlines()

cc_block = []
new_lines = []
in_cc = False

for i, line in enumerate(lines):
    if i >= 271 and i <= 288:
        cc_block.append(line)
        continue
    
    new_lines.append(line)

# Now we need to find where line 291 went in new_lines
# Original lines 290 and 291 are closing divs.
# In new_lines, they will be around index 272 (since we removed 18 lines).
# Let's just look for the 'Problem vs Solution' comment and insert right before it.

final_lines = []
for line in new_lines:
    if '{/* Problem vs Solution (Revolut Style Image Cards) */}' in line:
        # Insert the cc_block here
        
        # Modify cc_block first
        # Replace landing-cls-27 with py-24 relative z-10
        cc_block[1] = '<section className="py-24 relative z-10 bg-[#0a0c10]">\n'
        cc_block[2] = '<div className="w-full max-w-6xl mx-auto px-6 md:px-12">\n'
        cc_block[-1] = '</section>\n'
        
        final_lines.extend(cc_block)
        final_lines.append('\n')
    final_lines.append(line)

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'w', 'utf-8') as f:
    f.writelines(final_lines)

print('Done')
