import codecs
with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'r', 'utf-8') as f:
    c = f.read()

# The hero section ends with:
hero_end = "</motion.div>\n\n</div>\n</div>"

# Wait, in the previous script, I replaced:
# c = c.replace('</motion.div>\n\n</div>\n</div>\n\n{/* Problem vs Solution', '</div>\n\n</div>\n</div>\n\n{/* Problem vs Solution')
# But I did it wrong, and had to do a fallback which left the closing divs in place.

# Let's cleanly extract the Core Capabilities block and put it after the hero section.
import re

cc_pattern = r'(?s)(/\* Core Capabilities Revealed \*/\s*<div className="landing-cls-27">.*?</div>\s*</div>\s*</div>)'

# Let's find it
match = re.search(cc_pattern, c)
if match:
    cc_block = match.group(1)
    # Remove it from current location
    c = c.replace(cc_block, '')
    
    # We want to change the pointer-events-none logic.
    # The inner div is: className={w-full max-w-6xl mx-auto px-6 md:px-12 \}
    # Since it's a normal section now, we don't need this pointer-events hack.
    cc_block = re.sub(r'className=\{w-full[^]+\}', 'className="w-full max-w-6xl mx-auto px-6 md:px-12"', cc_block)
    
    # We also change landing-cls-27 to landing-cls-cc-new in jsx
    cc_block = cc_block.replace('className="landing-cls-27"', 'className="landing-cls-cc-new"')
    
    # Find where to insert it: right before "Problem vs Solution"
    insert_point = r'{/\* Problem vs Solution'
    
    c = c.replace('{/* Problem vs Solution', cc_block + '\n\n{/* Problem vs Solution')
    
    with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'w', 'utf-8') as f:
        f.write(c)
    print("JSX updated successfully.")
else:
    print("Could not find Core Capabilities block.")
