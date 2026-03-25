import { motion } from 'motion/react';
import { Code2, Database, Shield, Zap } from 'lucide-react';

export function About() {
  const highlights = [
    'Developed 10+ RESTful APIs using Node.js and Express',
    'Built full-stack MERN applications including an e-commerce platform with optimized search and cart management',
    'Implemented secure authentication systems using JWT, bcrypt, and cookies',
    'Gained real-world development experience through internship'
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Professional <span className="text-blue-400">Summary</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 text-center mb-12 leading-relaxed">
            Software Engineer specializing in backend systems and scalable API development using the MERN stack. 
            Experienced in building full-stack applications, optimizing performance, and implementing secure authentication systems. 
            Strong focus on clean, efficient, and production-ready code.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6"
            >
              <Code2 className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-slate-400">Building end-to-end web applications with MERN stack, focusing on scalability and performance.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6"
            >
              <Database className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend Systems</h3>
              <p className="text-slate-400">Designing and implementing RESTful APIs with efficient data storage and querying.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6"
            >
              <Shield className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Authentication</h3>
              <p className="text-slate-400">Implementing robust authentication systems with JWT, bcrypt, and secure cookie handling.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6"
            >
              <Zap className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
              <p className="text-slate-400">Optimizing applications for speed and efficiency with sub-100ms response times.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Key Highlights</h3>
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
