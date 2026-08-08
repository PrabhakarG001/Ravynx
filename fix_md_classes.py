import re

with open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.css', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to find all classes that contain md:, lg:, sm: inside @apply
# A class block looks like:
# .landing-cls-X {
# @apply class1 md:class2 class3 lg:class4;
# }

new_content = []
lines = content.split('\n')
i = 0
while i < len(lines):
    line = lines[i]
    match = re.match(r'^(\.landing-cls-\d+)\s*\{', line)
    if match:
        cls_name = match.group(1)
        block = [line]
        i += 1
        while i < len(lines) and not lines[i].strip().startswith('}'):
            block.append(lines[i])
            i += 1
        if i < len(lines):
            block.append(lines[i]) # the closing brace
        
        block_text = '\n'.join(block)
        apply_match = re.search(r'@apply\s+([^;]+);', block_text)
        if apply_match:
            classes = apply_match.group(1).split()
            base_classes = []
            sm_classes = []
            md_classes = []
            lg_classes = []
            
            for c in classes:
                if c.startswith('sm:'):
                    sm_classes.append(c[3:])
                elif c.startswith('md:'):
                    md_classes.append(c[3:])
                elif c.startswith('lg:'):
                    lg_classes.append(c[3:])
                else:
                    base_classes.append(c)
            
            if sm_classes or md_classes or lg_classes:
                # Rewrite the base block
                new_block = f"{cls_name} {{\n"
                if base_classes:
                    new_block += f"  @apply {' '.join(base_classes)};\n"
                new_block += "}\n"
                
                if sm_classes:
                    new_block += f"@media (min-width: 640px) {{\n  {cls_name} {{\n    @apply {' '.join(sm_classes)};\n  }}\n}}\n"
                if md_classes:
                    new_block += f"@media (min-width: 768px) {{\n  {cls_name} {{\n    @apply {' '.join(md_classes)};\n  }}\n}}\n"
                if lg_classes:
                    new_block += f"@media (min-width: 1024px) {{\n  {cls_name} {{\n    @apply {' '.join(lg_classes)};\n  }}\n}}\n"
                
                new_content.append(new_block)
            else:
                new_content.append(block_text + '\n')
        else:
            new_content.append(block_text + '\n')
    else:
        new_content.append(line + '\n')
    i += 1

with open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.css', 'w', encoding='utf-8') as f:
    f.write(''.join(new_content))

