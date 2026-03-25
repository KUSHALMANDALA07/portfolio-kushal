import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Mandala Kushal</h3>
              <p className="text-slate-400 text-sm">
                Software Engineer specializing in MERN stack development and scalable API design.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Currently</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Building scalable applications</li>
                <li>• Exploring advanced backend patterns</li>
                <li>• Open to new opportunities</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2026 Mandala Kushal. All rights reserved.
            </p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-300"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
