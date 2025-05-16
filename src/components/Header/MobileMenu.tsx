import React from 'react';
import { Github as GitHub, Linkedin, Twitter } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="fixed top-16 left-0 w-full h-screen bg-black z-40 flex flex-col">
      <div className="container mx-auto px-6 py-8 flex flex-col">
        <nav className="flex flex-col space-y-6 mb-8">
          <a 
            href="#about" 
            className="text-white text-xl hover:text-yellow-400 transition-colors"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a 
            href="#experience" 
            className="text-white text-xl hover:text-yellow-400 transition-colors"
            onClick={handleLinkClick}
          >
            Experience
          </a>
          <a 
            href="#projects" 
            className="text-white text-xl hover:text-yellow-400 transition-colors"
            onClick={handleLinkClick}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="text-white text-xl hover:text-yellow-400 transition-colors"
            onClick={handleLinkClick}
          >
            Skills
          </a>
          <a 
            href="#contact" 
            className="text-white text-xl hover:text-yellow-400 transition-colors"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-6 mt-auto">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
            <GitHub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;