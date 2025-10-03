import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Image } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with product listings, shopping cart, checkout flow, and payment integration. Built with modern best practices and responsive design.',
    image: 'placeholder',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Node.js'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1-demo.com',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Includes authentication and user management.',
    image: 'placeholder',
    tech: ['React', 'TypeScript', 'Firebase', 'TailwindCSS'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2-demo.com',
  },
  {
    title: 'Weather Dashboard',
    description:
      'An interactive weather dashboard that displays current conditions and forecasts. Features location search, favorite locations, and beautiful data visualizations.',
    image: 'placeholder',
    tech: ['React', 'TypeScript', 'REST API', 'Chart.js'],
    github: 'https://github.com/yourusername/project3',
    demo: 'https://project3-demo.com',
  },
  {
    title: 'Portfolio CMS',
    description:
      'A content management system for portfolio websites with drag-and-drop page builder, media management, and SEO optimization tools. Includes admin dashboard.',
    image: 'placeholder',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/yourusername/project4',
    demo: 'https://project4-demo.com',
  },
  {
    title: 'Social Media Dashboard',
    description:
      'A unified dashboard for managing multiple social media accounts. Features post scheduling, analytics, and engagement tracking across platforms.',
    image: 'placeholder',
    tech: ['React', 'TypeScript', 'REST APIs', 'Redux'],
    github: 'https://github.com/yourusername/project5',
    demo: 'https://project5-demo.com',
  },
  {
    title: 'Recipe Finder App',
    description:
      'A recipe discovery application with advanced search filters, meal planning, and shopping list generation. Integrates with multiple recipe APIs.',
    image: 'placeholder',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'REST API'],
    github: 'https://github.com/yourusername/project6',
    demo: 'https://project6-demo.com',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden h-full flex flex-col hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
                    <Image size={64} className="text-gray-600" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent"></div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                      >
                        <Github size={18} />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-200"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
