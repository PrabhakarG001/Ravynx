import re

with open("src/pages/Landing.jsx", "r", encoding="utf-8") as f:
    content = f.read()

old_navbar = """      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 pt-4 pb-4 transition-all duration-300 ${scrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'}`}>
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between"
        >
          
          <div className="flex items-center lg:gap-14 gap-8">
            <div className="cursor-pointer" onClick={() => navigate("/")}>
              <span className="text-white text-[28px] font-['Inter',sans-serif] font-semibold tracking-[-0.5px]">Ravynx</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 -mt-2.5">
              {["Product", "Features", "Docs", "Team"].map(link => (
                <a key={link} href="#" className="text-white font-semibold text-[15px] hover:text-white/80 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 lg:mr-24 md:mr-16 mr-8">
            <button
              onClick={() => navigate("/login")}
              className="text-white font-semibold text-[14px] hover:text-white/80 transition-colors hidden sm:block"
            >
              Log in
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-black text-[14px] font-bold px-5 py-2 rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:scale-105"
            >
              Sign up
            </button>
          </div>

        </motion.div>
      </nav>"""

content = re.sub(r'\{/\* Desktop Navbar \*/\}.*?</nav>', old_navbar, content, flags=re.DOTALL)

content = content.replace('className="min-h-screen bg-black font-[\'Plus_Jakarta_Sans\',sans-serif]"', 'className="min-h-screen bg-background font-[\'Plus_Jakarta_Sans\',sans-serif]"')

hero_end = content.find('{/* Core Capabilities')
if hero_end != -1:
    before_hero = content[:hero_end]
    after_hero = content[hero_end:]
    
    after_hero = after_hero.replace('bg-white', 'bg-card')
    after_hero = after_hero.replace('text-slate-900', 'text-foreground')
    after_hero = after_hero.replace('text-gray-900', 'text-foreground')
    after_hero = after_hero.replace('text-slate-500', 'text-muted-foreground')
    after_hero = after_hero.replace('text-gray-500', 'text-muted-foreground')
    after_hero = after_hero.replace('text-gray-400', 'text-muted-foreground')
    after_hero = after_hero.replace('text-white', 'text-foreground')
    after_hero = after_hero.replace('bg-[#0A0A0F]', 'bg-background')
    after_hero = after_hero.replace('bg-[#0D0D12]', 'bg-card')
    after_hero = after_hero.replace('bg-[#1F1F2E]', 'bg-secondary')
    after_hero = after_hero.replace('bg-[#111118]', 'bg-secondary')
    after_hero = after_hero.replace('bg-[#1A1A24]', 'bg-secondary')
    after_hero = after_hero.replace('border-slate-200', 'border-border')
    after_hero = after_hero.replace('border-gray-200', 'border-border')
    after_hero = after_hero.replace('border-[#1F1F2E]', 'border-border')
    after_hero = after_hero.replace('border-[#2A2A35]', 'border-border')
    after_hero = after_hero.replace('viewport={{ once: false, amount: 0.1 }}', 'viewport={{ once: true, margin: "-50px" }}')
    
    content = before_hero + after_hero

with open("src/pages/Landing.jsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Done")
