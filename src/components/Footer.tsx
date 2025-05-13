
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-gray-100">
      <div className="portfolio-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div className="space-y-3">
            <h3 className="font-mono font-bold text-lg mb-4">
              <span className="text-portfolio-black">UX</span>
              <span className="text-portfolio-deepblue">Portfolio</span>
            </h3>
            <p className="text-sm text-gray-600 max-w-sm">
              Balancing utility with emotional intelligence through thoughtful digital experiences.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <h4 className="font-mono text-sm font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/work" className="text-sm hover:text-portfolio-deepblue transition-colors" data-cursor="pointer">Work</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-portfolio-deepblue transition-colors" data-cursor="pointer">About</Link>
              </li>
              <li>
                <Link to="/process" className="text-sm hover:text-portfolio-deepblue transition-colors" data-cursor="pointer">Process</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-portfolio-deepblue transition-colors" data-cursor="pointer">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <h4 className="font-mono text-sm font-bold mb-4">Connect</h4>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-portfolio-deepblue transition-colors" aria-label="GitHub" data-cursor="pointer">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-portfolio-deepblue transition-colors" aria-label="LinkedIn" data-cursor="pointer">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-portfolio-deepblue transition-colors" aria-label="Email" data-cursor="pointer">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">© {currentYear} UX Portfolio. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-portfolio-deepblue transition-colors" data-cursor="pointer">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-portfolio-deepblue transition-colors" data-cursor="pointer">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
