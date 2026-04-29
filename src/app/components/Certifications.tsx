import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import cert1 from '../../assets/fbf92725e519cd235ad7dc65ca32d358af8641a4.png';
import cert2 from '../../assets/c2e0d23489a437a8fdf4716feacf8cacdcbaac0d.png';
import cert3 from '../../assets/7df06a2b20e6fcff793e36907129d23280d8f984.png';
import cert4 from '../../assets/3d79d96aa4a8b5658be8fb078885908f7c674e4b.png';
import cert5 from '../../assets/certificate-syntecxhub.png';

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
    {
      title: 'Backend Development Internship',
      organization: 'SYNTECXHUB',
      date: 'Feb 2026 - Mar 2026',
      image: cert5,
      description: 'Successfully completed the Internship Program at SYNTECXHUB in BACKEND DEVELOPMENT showing active participation with unwavering dedication. Credential ID: SH07BD1774842434489.',
      tag: 'Internship',
      verifyLink: 'https://www.syntecxhub.com'
    },
    {
      title: 'HackMelaa 2026 Participation',
      organization: 'FEBE, Bonam Venkata Chalamayya Engineering College',
      date: '2026',
      image: cert1,
      description: 'For active participation in HackMelaa 2026 – Centralised Hackathon, organized by FEBE, showcasing innovation and technical excellence.',
      tag: 'Hackathon'
    },
    {
      title: 'AI Hackathon Participation',
      organization: 'Kalvium × Promptrepo',
      date: '2025',
      image: cert2,
      description: 'Participated in a competitive AI hackathon as part of Team Deathly Hackers, competing among 368 participants from 88 teams. Showcased innovation, dedication, and technical excellence in the Prototype Round at the Campus Level.',
      tag: 'Hackathon'
    },
    {
      title: 'Enterprise Design Thinking Practitioner',
      organization: 'IBM SkillsBuild',
      date: 'FEB 2026',
      image: cert3,
      description: 'This certification strengthened my understanding of user-centered design and innovation-driven problem solving. Through an intensive learning program and a one-week in-person industry-led session, I explored how real-world companies design products and solve user problems using structured design thinking frameworks.',
      tag: 'IBM SkillsBuild',
      verifyLink: 'https://www.credly.com/go/lfTYp5YX'
    },
    {
      title: 'Solutions Architecture Job Simulation',
      organization: 'AWS × Forage',
      date: 'June 2025',
      image: cert4,
      description: 'Completed practical tasks in designing a simple, scalable, hosting architecture. This virtual job simulation provided exposure to real-world software architecture practices followed in global companies.',
      tag: 'Forage'
    }
  ];

  return (
    <>
      <section id="certifications" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              My <span className="text-cyan-400">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-slate-300 max-w-4xl mx-auto mb-6 text-sm md:text-base"
            >
              I believe continuous learning and practical exposure are essential for becoming a strong software engineer. 
              Through industry-recognized certifications, bootcamps, and hackathons, I have built a solid foundation in 
              full-stack development, design thinking, and problem solving.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-slate-400 max-w-4xl mx-auto mb-12 text-sm md:text-base"
            >
              Each certification represents not only theoretical knowledge but also hands-on implementation, real-world 
              problem solving, and collaboration with peers and industry professionals.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer max-w-md mx-auto"
                  onClick={() => setSelectedCert(index)}
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden bg-white">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 bg-cyan-500 text-white text-xs rounded-full">
                          {cert.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-cyan-400 text-sm mb-2">{cert.organization} • {cert.date}</p>
                      <p className="text-slate-400 text-sm line-clamp-3 mb-4">
                        {cert.description}
                      </p>
                      <div className="flex items-center gap-2 text-cyan-400 text-sm">
                        <Award className="w-4 h-4" />
                        <span>Click to view details</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {selectedCert !== null && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900 border border-slate-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {certifications[selectedCert].title}
                  </h3>
                  <p className="text-cyan-400">
                    {certifications[selectedCert].organization} • {certifications[selectedCert].date}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-slate-400 hover:text-white transition-colors text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="relative aspect-[4/3] bg-white rounded-lg overflow-hidden mb-6">
                <img 
                  src={certifications[selectedCert].image} 
                  alt={certifications[selectedCert].title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Description</h4>
                  <p className="text-slate-300 leading-relaxed">
                    {certifications[selectedCert].description}
                  </p>
                </div>

                {certifications[selectedCert].verifyLink && (
                  <a
                    href={certifications[selectedCert].verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors duration-300 text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Verify Certificate</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
