import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HiOutlineHome, 
  HiOutlineArrowUpTray, 
  HiOutlineCpuChip, 
  HiOutlineDocumentText, 
  HiOutlineDocumentCheck, 
  HiOutlineChartBar, 
  HiOutlineShieldCheck, 
  HiOutlineCog6Tooth,
  HiOutlineCommandLine,
  HiOutlineQuestionMarkCircle,
  HiChevronUpDown,
  HiMagnifyingGlass,
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
  HiOutlineUser,
  HiOutlineLockClosed,
  HiOutlineBriefcase,
  HiOutlineArrowRightOnRectangle,
  HiOutlineArrowsRightLeft,
  HiOutlineBell
} from "react-icons/hi2";
import { Logo } from "../Logo";

const navGroups = [
  {
    title: "",
    items: [
      { path: "/dashboard", icon: HiOutlineHome, label: "Home" },
      { path: "#notifications", icon: HiOutlineBell, label: "Notifications" },
      { path: "/upload", icon: HiOutlineArrowUpTray, label: "Upload Documents" },
    ]
  },
  {
    title: "VERIFICATION",
    items: [
      { path: "/processing", icon: HiOutlineCpuChip, label: "Processing" },
      { path: "/viewer", icon: HiOutlineDocumentText, label: "Document Viewer" },
      { path: "/report", icon: HiOutlineDocumentCheck, label: "Generated Report" },
    ]
  },
  {
    title: "PLATFORM",
    items: [
      { path: "/analytics", icon: HiOutlineChartBar, label: "Risk Analytics" },
      { path: "/audit", icon: HiOutlineShieldCheck, label: "Audit Logs" },
      { path: "/help", icon: HiOutlineQuestionMarkCircle, label: "Get Help" },
      { path: "/settings", icon: HiOutlineCog6Tooth, label: "Settings" },
    ]
  }
];

export const Sidebar = ({ open, setOpen }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;
    const [collapsed, setCollapsed] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const menuRef = useRef(null);
    const notifRef = useRef(null);

    // Search state
    const [searchQuery, setSearchQuery] = useState("");
    const [searchFocused, setSearchFocused] = useState(false);
    const searchInputRef = useRef(null);

    const allSearchItems = navGroups.flatMap(group => group.items);
    const filteredItems = allSearchItems.filter(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Close menus when clicking outside
    useEffect(() => {
      function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setProfileMenuOpen(false);
        }
        if (notifRef.current && !notifRef.current.contains(event.target)) {
          setNotificationsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Keyboard shortcut for search (/)
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
          e.preventDefault();
          if (!collapsed) {
             searchInputRef.current?.focus();
          }
        }
        if (e.key === 'Escape') {
          searchInputRef.current?.blur();
          setSearchFocused(false);
          setSearchQuery("");
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [collapsed]);

    return (
      <>
        {/* Mobile Backdrop */}
        {open && (<div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-20 md:hidden" onClick={() => setOpen(false)}/>)}
        
        {/* Sidebar Container */}
        <motion.aside 
          animate={{ width: collapsed ? 72 : 288 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={`fixed top-0 left-0 h-full bg-white border-r border-[#e3e8ee] flex flex-col z-30 md:relative md:translate-x-0 md:flex md:shrink-0
            ${open ? "translate-x-0" : "-translate-x-full"} shadow-2xl md:shadow-none`}
        >
          
          {/* Header */}
          <div className={`px-4 py-4 flex transition-colors ${collapsed ? 'flex-col gap-2 items-center justify-center' : 'items-center justify-between'}`}>
            {!collapsed && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 whitespace-nowrap overflow-hidden ml-2">
                <Logo className="text-[22px] text-[#1a1f36]" />
              </motion.div>
            )}
            
            <button 
                onClick={() => setCollapsed(!collapsed)}
                className="flex items-center justify-center w-8 h-8 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
             >
                {collapsed ? (
                   <HiOutlineChevronDoubleRight className="w-5 h-5" />
                ) : (
                   <HiOutlineChevronDoubleLeft className="w-5 h-5" />
                )}
             </button>
          </div>

          {/* Search Bar */}
          <div className="px-4 py-2 mb-2 relative z-[100]">
            <div className="relative flex items-center group cursor-text">
              <HiMagnifyingGlass className={`absolute left-3 w-4 h-4 text-gray-400 group-hover:text-gray-500 transition-colors ${collapsed ? 'left-1/2 -translate-x-1/2' : ''}`} />
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder={collapsed ? "" : "Search dashboard"} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                className={`w-full h-9 bg-white border border-[#e3e8ee] rounded-md text-[13px] text-[#1a1f36] placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all ${collapsed ? 'px-0 opacity-0 pointer-events-none' : 'pl-9 pr-8'} cursor-text`}
                readOnly={collapsed}
              />
              {!collapsed && !searchQuery && (
                <div className="absolute right-3 text-[10px] text-gray-400 font-medium border border-gray-200 rounded px-1.5 py-0.5 bg-gray-50 flex items-center justify-center">
                  /
                </div>
              )}
            </div>

            {/* Search Results Dropdown */}
            <AnimatePresence>
              {searchFocused && searchQuery && !collapsed && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-4 right-4 mt-1 bg-white border border-[#e3e8ee] rounded-lg shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] overflow-hidden"
                >
                  {filteredItems.length > 0 ? (
                    <div className="max-h-[240px] overflow-y-auto py-1 custom-scrollbar">
                      {filteredItems.map(item => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => {
                             setSearchQuery("");
                             setOpen(false);
                          }}
                          className="flex items-center gap-3 px-3 py-2.5 text-[13px] text-[#3c4257] font-medium hover:bg-[#f2f8ff] hover:text-[#0066cc] transition-colors"
                        >
                          <item.icon className="w-[18px] h-[18px] opacity-70" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-4 text-[13px] text-gray-500 text-center bg-gray-50">
                      No results found for <span className="font-semibold text-gray-700">"{searchQuery}"</span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-3 overflow-visible flex flex-col gap-6 pb-4">
            {navGroups.map((group, idx) => (
              <div key={idx} className="flex flex-col">
                {!collapsed && group.title && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="px-3 mb-2">
                    <span className="text-[11px] font-bold tracking-wider text-gray-500 uppercase">{group.title}</span>
                  </motion.div>
                )}
                <div className="flex flex-col gap-0.5">
                  {group.items.map(({ path, icon: Icon, label }) => {
                    const isNotif = path === "#notifications";
                    const isActive = currentPath.startsWith(path) && !isNotif;
                    
                    const handleClick = (e) => {
                      if (isNotif) {
                        e.preventDefault();
                        setNotificationsOpen(!notificationsOpen);
                      } else {
                        setOpen(false);
                        setNotificationsOpen(false);
                      }
                    };

                    return (
                      <div key={path} className="relative" ref={isNotif ? notifRef : null}>
                        <Link 
                          to={path} 
                          onClick={handleClick}
                          className={`relative w-full flex items-center px-3 h-9 rounded-md text-[14px] transition-all group
                            ${isActive
                              ? "bg-[#f2f8ff] text-[#0066cc] font-medium"
                              : "text-[#3c4257] hover:bg-gray-100 font-normal"}`}
                        >
                          <div className="flex items-center justify-center min-w-5 relative">
                            <Icon className={`w-5 h-5 ${isActive ? "text-[#0066cc]" : "text-gray-500 group-hover:text-gray-700"}`}/>
                            {isNotif && <span className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-red-500 border border-white box-content transform translate-x-0.5 -translate-y-0.5"></span>}
                          </div>
                          <AnimatePresence>
                            {!collapsed && (
                              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ml-3 whitespace-nowrap flex-1">
                                {label}
                              </motion.span>
                            )}
                          </AnimatePresence>

                          {/* Custom Tooltip for collapsed state */}
                          {collapsed && (
                            <div className="absolute left-full ml-4 px-2.5 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-[100] pointer-events-none border border-gray-700">
                              {label}
                              <div className="absolute top-1/2 -left-1 -mt-1 w-2 h-2 bg-gray-900 border-l border-b border-gray-700 transform rotate-45"></div>
                            </div>
                          )}
                        </Link>
                        
                        {isNotif && (
                          <AnimatePresence>
                            {notificationsOpen && (
                              <motion.div
                                initial={{ opacity: 0, x: -10, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -10, scale: 0.95 }}
                                transition={{ duration: 0.15 }}
                                className={`absolute left-full top-0 ml-4 w-80 bg-white border border-[#e3e8ee] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-[200] overflow-hidden`}
                              >
                                <div className="p-4 border-b border-[#e3e8ee] flex justify-between items-center bg-gray-50/50">
                                  <h3 className="text-[14px] font-bold text-[#1a1f36]">Notifications</h3>
                                  <button className="text-[12px] text-[#0066cc] font-medium hover:underline">Mark all as read</button>
                                </div>
                                <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
                                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-3">
                                    <HiOutlineBell className="w-6 h-6 text-gray-300" />
                                  </div>
                                  <p className="text-[14px] font-bold text-[#1a1f36] mb-1">No notifications</p>
                                  <p className="text-[13px] text-gray-500">When you have new alerts, they will appear here.</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          {/* Footer User Profile */}
          <div className="border-t border-[#e3e8ee] bg-white p-2 relative" ref={menuRef}>
             <div 
               className={`w-full flex items-center justify-center md:justify-start px-2 h-12 rounded-md transition-colors cursor-pointer group overflow-hidden ${profileMenuOpen ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
               onClick={() => setProfileMenuOpen(!profileMenuOpen)}
             >
                <div className="flex items-center justify-center min-w-8">
                   <div className="w-7 h-7 rounded bg-[#00897b] text-white flex items-center justify-center text-xs font-bold">
                       PS
                   </div>
                </div>
                <AnimatePresence>
                  {!collapsed && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="ml-3 flex flex-1 items-center justify-between whitespace-nowrap">
                       <span className="text-[14px] text-[#1a1f36] font-medium truncate">Prabhakar Sahu</span>
                       <HiChevronUpDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 flex-shrink-0" />
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>

             {/* Profile Popup Menu */}
             <AnimatePresence>
                {profileMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute bottom-[60px] ${collapsed ? 'left-2 min-w-[180px]' : 'left-2 right-2'} bg-white border border-[#e3e8ee] rounded-xl shadow-lg py-1 z-50`}
                  >
                     <div className="px-2 py-1">
                       <div className="text-[13px] text-[#1a1f36] font-medium px-3 py-1.5 bg-[#f7f9fc] rounded-md mb-1 cursor-default">
                         Personal
                       </div>
                       
                       <Link to="/profile" onClick={() => setProfileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2 text-[13px] text-[#3c4257] hover:bg-gray-50 rounded-md transition-colors w-full">
                         <HiOutlineUser className="w-[18px] h-[18px] text-gray-400" />
                         Profile
                       </Link>
                       <button onClick={() => navigate('/login')} className="flex items-center gap-3 px-3 py-2 text-[13px] text-[#3c4257] hover:bg-gray-50 rounded-md transition-colors w-full">
                         <HiOutlineArrowsRightLeft className="w-[18px] h-[18px] text-gray-400" />
                         Switch account
                       </button>
                     </div>
                     <div className="border-t border-[#e3e8ee] my-1"></div>
                     <div className="px-2 py-1">
                       <button onClick={() => navigate('/login')} className="flex items-center gap-3 px-3 py-2 text-[13px] text-[#3c4257] hover:bg-gray-50 hover:text-red-600 rounded-md transition-colors w-full">
                         <HiOutlineArrowRightOnRectangle className="w-[18px] h-[18px] text-gray-400 group-hover:text-red-500" />
                         Logout
                       </button>
                     </div>
                  </motion.div>
                )}
             </AnimatePresence>
          </div>
        </motion.aside>
      </>
    );
};
