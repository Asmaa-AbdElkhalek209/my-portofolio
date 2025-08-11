import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Home, User, BriefcaseBusiness, MailOpen } from 'lucide-react';
import HamburgerBtn from '../../components/sidebar/HamburgerBtn';
import SidebarDesktop from '../../components/sidebar/SidebarDesktop';
import SidebarMobile from '../../components/sidebar/SidebarMobile';

const navLinks = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/about', label: 'About', icon: User },
  { to: '/projects', label: 'Projects', icon: BriefcaseBusiness },
  { to: '/contact', label: 'Contact', icon: MailOpen },
];

const pageTitles = {
  '/': 'HOME',
  '/about': 'ABOUT ME',
  '/projects': 'My Projects',
  '/contact': 'GET IN TOUCH',
};

function splitLastWord(text = "") {
  const trimmed = text.trim();
  const words = trimmed === "" ? [] : trimmed.split(/\s+/);
  const last = words.length ? words.pop() : "";
  const first = words.join(" ");
  return { first, last };
}

export default function Sidebar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const currentPageTitle = useMemo(() => pageTitles[location.pathname] || '', [location.pathname]);
  const { first, last } = useMemo(() => splitLastWord(currentPageTitle), [currentPageTitle]);

  const knownPaths = ['/', '/about', '/projects', '/contact'];
  const hideSidebar = !knownPaths.includes(location.pathname);
  // const isHome = location.pathname === '/';


  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 640) { // sm screen size
        setIsScrolled(window.scrollY > 20);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (hideSidebar) return null;

  return (
    <>
      <aside className="hidden lg:flex fixed top-0 right-0 bottom-0 z-50 justify-center items-center">
        <SidebarDesktop navLinks={navLinks} />
      </aside>

      {/* Sidebar Mobile Tab */}
      <div
        className={`bg-lightGray h-screen w-screen lg:hidden fixed top-0 left-0 right-0 bottom-0 z-50 transform transition-transform duration-300
         ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <SidebarMobile navLinks={navLinks} setMenuOpen={setMenuOpen} />
      </div>

      {/* Hamburger Button */}
      <HamburgerBtn setMenuOpen={setMenuOpen} menuOpen={menuOpen} />

      {/* Navbar in screens < sm */}
      {/* { isHome ? null : }*/}
        <div className="drawer sm:hidden fixed z-50 w-full">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div
            className={`navbar w-full flex justify-center content-center items-center transition-all duration-300 
              ${isScrolled ? 'bg-lightGray bg-opacity-80 backdrop-blur' : 'bg-lightGray bg-opacity-100'}`}
          >
            <h2 className="mx-2 flex-1 font-open text-2xl font-[900] text-darkGray">
              {first} <span className='text-mainColor'>{last}</span>
            </h2>
            <div className="flex-none">
              <HamburgerBtn setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
