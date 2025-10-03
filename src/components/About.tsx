import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-gray-700">
                <User size={120} className="text-blue-400" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Hello! I'm Brian, a passionate full-stack developer who builds complete web solutions
                from database design to frontend interfaces and deployment. I specialize in creating
                scalable, performant, and production-ready applications using modern technologies
                across the entire stack.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                On the backend, I work with Node.js, NestJS, PostgreSQL, and Prisma ORM to build
                robust APIs and data layers. I also have experience with PHP for legacy systems.
                On the frontend, I craft responsive user interfaces using Angular and React with
                TypeScript, ensuring type-safety throughout the application.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond development, I'm skilled in deployment and DevOps, ensuring applications
                run smoothly in production environments. I thrive on solving complex technical
                challenges and delivering end-to-end solutions that make a real impact.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-white mb-3">What I bring to the table:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">▹</span>
                    <span>Full-stack expertise from database to deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">▹</span>
                    <span>Strong architectural design and system thinking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">▹</span>
                    <span>Production-ready code with testing and DevOps practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">▹</span>
                    <span>Ability to work across the entire technology stack</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
