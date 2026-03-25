import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Developer Portfolio Website',
      description: 'Designed and developed a responsive portfolio website with modern UI and animations',
      technologies: ['React', 'Tailwind CSS'],
      features: [
        'Integrated project showcase with GitHub links',
        'Optimized responsiveness',
        'Deployed using Vercel'
      ],
      github: 'https://github.com/KUSHALMANDALA07',
      demo: 'https://portfolio-kushal-delta.vercel.app/'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Built a full-stack e-commerce platform with product filtering and cart management',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux'],
      features: [
        'Redux for efficient state management',
        'RESTful APIs using Node.js and Express',
        'Secure authentication using bcrypt and cookies',
        'Optimized search achieving <100ms response time for 500+ products'
      ],
      github: 'https://github.com/KUSHALMANDALA07'
    },
    {
      title: 'PondPulse – Aquaculture Platform',
      description: 'Developed a full-stack platform for fish and prawn farmers',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      features: [
        'Product purchase module implementation',
        'Role-based dashboards',
        'User-friendly interface for real-world usability'
      ],
      github: 'https://github.com/KUSHALMANDALA07'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg">
            Real-world applications built with modern technologies
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">View Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
