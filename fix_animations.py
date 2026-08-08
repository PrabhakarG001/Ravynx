import codecs

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'r', 'utf-8') as f:
    content = f.read()

# Line 280
content = content.replace(
    '        {features.map(({ icon: Icon, title, desc }) => (<div key={title} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">',
    '        {features.map(({ icon: Icon, title, desc }, idx) => (<motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.1 }} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm transition-shadow">'
)
content = content.replace(
    '                  </div>))}',
    '                  </motion.div>))}'
)

# Line 386
content = content.replace(
    '                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.2 }} className="relative z-10 flex flex-col items-center text-center w-full md:w-48 group">',
    '                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, delay: i * 0.2 }} className="relative z-10 flex flex-col items-center text-center w-full md:w-48 group">'
)

# Line 503
content = content.replace(
    '        ].map((node, i) => (<motion.div key={node.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.15 }} className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-8 text-center shadow-lg hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] hover:-translate-y-2 transition-all duration-300 relative group">',
    '        ].map((node, i) => (<motion.div key={node.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} whileHover={{ scale: 1.04, y: -10 }} transition={{ type: "spring", stiffness: 200, delay: i * 0.1 }} className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-8 text-center shadow-lg hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] transition-all duration-300 relative group">'
)

with codecs.open(r'C:\Users\Prabh\Downloads\Ravynx\src\pages\Landing\Landing.jsx', 'w', 'utf-8') as f:
    f.write(content)
