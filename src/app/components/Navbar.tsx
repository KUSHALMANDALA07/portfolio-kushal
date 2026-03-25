import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-[#4d95ff] hover:text-blue-400 transition-colors"
          >
            MK
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-sm relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <a
              href="/resume.kushalmandala.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-[#4d95ff] hover:bg-[#3a82e5] rounded-lg transition-colors duration-300 text-white text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-slate-950/98 backdrop-blur-md border-t border-slate-800"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-slate-300 hover:text-cyan-400 transition-colors text-left py-2"
              >
                {link.name}
              </button>
            ))}
            <a
              href="c:\Users\kusha\OneDrive\Tài liệu\resume.kushalmandala.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-[#4d95ff] hover:bg-[#3a82e5] rounded-lg transition-colors duration-300 text-white w-fit"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
