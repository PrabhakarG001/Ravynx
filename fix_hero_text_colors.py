import codecs
import re

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.css', 'r', 'utf-8') as f:
    content = f.read()

# .landing-cls-14 (Main Title 2nd part)
content = re.sub(
    r'\.landing-cls-14\s*\{\s*@apply\s+text-white;\s*\}',
    '.landing-cls-14 {\n  @apply text-foreground;\n}',
    content
)

# .landing-cls-15 (Subtitle)
content = re.sub(
    r'\.landing-cls-15\s*\{\s*@apply\s+text-white/90',
    '.landing-cls-15 {\n  @apply text-gray-700',
    content
)

# .landing-cls-16 (Small description)
content = re.sub(
    r'\.landing-cls-16\s*\{\s*@apply\s+text-white/60',
    '.landing-cls-16 {\n  @apply text-gray-500',
    content
)

# .landing-cls-18 (Launch Dashboard btn)
content = re.sub(
    r'\.landing-cls-18\s*\{\s*@apply.*?\}',
    '.landing-cls-18 {\n  @apply px-8 py-2.5 rounded-full bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors shadow-[0_4px_14px_0_rgba(168,85,247,0.39)] inline-flex items-center justify-center gap-2 cursor-pointer;\n}',
    content,
    flags=re.DOTALL
)

# .landing-cls-20 (Try Demo btn)
content = re.sub(
    r'\.landing-cls-20\s*\{\s*@apply.*?\}',
    '.landing-cls-20 {\n  @apply px-8 py-2.5 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer;\n}',
    content,
    flags=re.DOTALL
)

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.css', 'w', 'utf-8') as f:
    f.write(content)
