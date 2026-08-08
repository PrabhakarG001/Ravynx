import './Sidebar.css';
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
import { Logo } from '../../Logo/Logo';

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
        {open && (<div className="sidebar-cls-1" onClick={() => setOpen(false)}/>)}
        
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
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="sidebar-cls-2">
                <Logo className="sidebar-cls-3" />
              </motion.div>
            )}
            
            <button 
                onClick={() => setCollapsed(!collapsed)}
                className="sidebar-cls-4"
                title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
             >
                {collapsed ? (
                   <HiOutlineChevronDoubleRight className="sidebar-cls-5" />
                ) : (
                   <HiOutlineChevronDoubleLeft className="sidebar-cls-6" />
                )}
             </button>
          </div>

          {/* Search Bar */}
          <div className="sidebar-cls-7">
            <div className="sidebar-cls-8">
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
                <div className="sidebar-cls-9">
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
                  className="sidebar-cls-10"
                >
                  {filteredItems.length > 0 ? (
                    <div className="sidebar-cls-11">
                      {filteredItems.map(item => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => {
                             setSearchQuery("");
                             setOpen(false);
                          }}
                          className="sidebar-cls-12"
                        >
                          <item.icon className="sidebar-cls-13" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="sidebar-cls-14">
                      No results found for <span className="sidebar-cls-15">"{searchQuery}"</span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Links */}
          <nav className="sidebar-cls-16">
            {navGroups.map((group, idx) => (
              <div key={idx} className="sidebar-cls-17">
                {!collapsed && group.title && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="sidebar-cls-18">
                    <span className="sidebar-cls-19">{group.title}</span>
                  </motion.div>
                )}
                <div className="sidebar-cls-20">
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
                      <div key={path} className="sidebar-cls-21" ref={isNotif ? notifRef : null}>
                        <Link 
                          to={path} 
                          onClick={handleClick}
                          className={`relative w-full flex items-center px-3 h-9 rounded-md text-[14px] transition-all group
                            ${isActive
                              ? "bg-[#f2f8ff] text-[#0066cc] font-medium"
                              : "text-[#3c4257] hover:bg-gray-100 font-normal"}`}
                        >
                          <div className="sidebar-cls-22">
                            <Icon className={`w-5 h-5 ${isActive ? "text-[#0066cc]" : "text-gray-500 group-hover:text-gray-700"}`}/>
                            {isNotif && <span className="sidebar-cls-23"></span>}
                          </div>
                          <AnimatePresence>
                            {!collapsed && (
                              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="sidebar-cls-24">
                                {label}
                              </motion.span>
                            )}
                          </AnimatePresence>

                          {/* Custom Tooltip for collapsed state */}
                          {collapsed && (
                            <div className="sidebar-cls-25">
                              {label}
                              <div className="sidebar-cls-26"></div>
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
                                <div className="sidebar-cls-27">
                                  <h3 className="sidebar-cls-28">Notifications</h3>
                                  <button className="sidebar-cls-29">Mark all as read</button>
                                </div>
                                <div className="sidebar-cls-30">
                                  <div className="sidebar-cls-31">
                                    <HiOutlineBell className="sidebar-cls-32" />
                                  </div>
                                  <p className="sidebar-cls-33">No notifications</p>
                                  <p className="sidebar-cls-34">When you have new alerts, they will appear here.</p>
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
          <div className="sidebar-cls-35" ref={menuRef}>
             <div 
               className={`w-full flex items-center justify-center md:justify-start px-2 h-12 rounded-md transition-colors cursor-pointer group overflow-hidden ${profileMenuOpen ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
               onClick={() => setProfileMenuOpen(!profileMenuOpen)}
             >
                <div className="sidebar-cls-36">
                   <div className="sidebar-cls-37">
                       PS
                   </div>
                </div>
                <AnimatePresence>
                  {!collapsed && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="sidebar-cls-38">
                       <span className="sidebar-cls-39">Prabhakar Sahu</span>
                       <HiChevronUpDown className="sidebar-cls-40" />
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
                     <div className="sidebar-cls-41">
                       <div className="sidebar-cls-42">
                         Personal
                       </div>
                       
                       <Link to="/profile" onClick={() => setProfileMenuOpen(false)} className="sidebar-cls-43">
                         <HiOutlineUser className="sidebar-cls-44" />
                         Profile
                       </Link>
                       <button onClick={() => navigate('/login')} className="sidebar-cls-45">
                         <HiOutlineArrowsRightLeft className="sidebar-cls-46" />
                         Switch account
                       </button>
                     </div>
                     <div className="sidebar-cls-47"></div>
                     <div className="sidebar-cls-48">
                       <button onClick={() => navigate('/login')} className="sidebar-cls-49">
                         <HiOutlineArrowRightOnRectangle className="sidebar-cls-50" />
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
