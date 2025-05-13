
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const menuItems = [
    { title: "Work", path: "/work" },
    { title: "About", path: "/about" },
    { title: "Process", path: "/process" },
    { title: "Contact", path: "/contact" }
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm' : 'py-6'
      }`}
    >
      <div className="portfolio-container flex items-center justify-between">
        <BrandLogo size="md" />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link 
                  to={item.path} 
                  className="text-sm font-medium link-underline py-1 px-1"
                  data-cursor="pointer"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-black" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          data-cursor="pointer"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md animate-slide-down">
          <nav className="portfolio-container py-4">
            <ul className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link 
                    to={item.path} 
                    className="block py-2 text-lg font-medium" 
                    onClick={() => setMobileMenuOpen(false)}
                    data-cursor="pointer"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
