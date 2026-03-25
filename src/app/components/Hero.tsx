import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import heroBackground from '../../assets/030ef6bbf318b543e6bf6328a78f332b0a899f32.png';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-right"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-slate-950/20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            MANDALA KUSHAL
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-[#4d95ff] mb-8"
          >
            Software Engineer | MERN Stack Developer | Backend Specialist
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col gap-3 text-slate-300 mb-8"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#4d95ff]" />
              <span className="text-white">Eluru, Andhra Pradesh, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#4d95ff]" />
              <a href="mailto:kushalmandala123@gmail.com" className="text-white hover:text-white transition-colors">
                kushalmandala123@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#4d95ff]" />
              <span className="text-white">+91-9866137636</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="https://github.com/KUSHALMANDALA07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 text-white"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kushal-mandala/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 text-white"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-16"
          >
            <a href="#about" className="inline-block animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
                <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto animate-pulse"></div>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}