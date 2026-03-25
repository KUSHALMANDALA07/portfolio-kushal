import { motion } from 'motion/react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaNodeJs, 
  FaGithub, 
  FaPython, 
  FaJava,
  FaCode
} from 'react-icons/fa';
import { 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss, 
  SiPostman, 
  SiGit,
  SiVercel,
  SiNpm
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export function Skills() {
  const mainSkills = [
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#ffffff' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'REST APIs', icon: TbApi, color: '#FF6C37' }
  ];

  const techTools = [
    { name: 'NPM', icon: SiNpm, color: '#CB3837' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'VS Code', icon: FaCode, color: '#007ACC' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'Vercel', icon: SiVercel, color: '#ffffff' }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >

          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">
              My <span className="text-cyan-400">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {mainSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                  >
                    <Icon 
                      className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110" 
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm md:text-base text-slate-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-2">
              Tech <span className="text-cyan-400">Tools</span>
            </h3>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {techTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                  >
                    <Icon 
                      className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110" 
                      style={{ color: tool.color }}
                    />
                    <span className="text-sm md:text-base text-slate-300 group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-slate-400 text-sm md:text-base">
              Additional expertise in:{' '}
              <span className="text-cyan-400">Authentication Systems</span>,{' '}
              <span className="text-cyan-400">MVC Architecture</span>,{' '}
              <span className="text-cyan-400">Scalable Systems</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}