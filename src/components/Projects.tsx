import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Image } from 'lucide-react';

const getTechColor = (tech: string): string => {
  const techLower = tech.toLowerCase();
  
  // Frontend frameworks
  if (techLower.includes('angular')) return 'bg-red-500/20 text-red-400 border border-red-500/30';
  if (techLower.includes('react')) return 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30';
  if (techLower.includes('typescript')) return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
  if (techLower.includes('javascript')) return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
  if (techLower.includes('html')) return 'bg-orange-500/20 text-orange-400 border border-orange-500/30';
  if (techLower.includes('css')) return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
  if (techLower.includes('tailwind')) return 'bg-teal-500/20 text-teal-400 border border-teal-500/30';
  
  // Backend frameworks
  if (techLower.includes('nestjs')) return 'bg-red-600/20 text-red-500 border border-red-600/30';
  if (techLower.includes('node')) return 'bg-green-500/20 text-green-400 border border-green-500/30';
  
  // Database
  if (techLower.includes('postgresql') || techLower.includes('postgres')) return 'bg-blue-600/20 text-blue-500 border border-blue-600/30';
  if (techLower.includes('prisma')) return 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30';
  
  // Tools & Services
  if (techLower.includes('jwt') || techLower.includes('auth')) return 'bg-purple-500/20 text-purple-400 border border-purple-500/30';
  if (techLower.includes('websocket')) return 'bg-green-500/20 text-green-400 border border-green-500/30';
  if (techLower.includes('cloudinary')) return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
  if (techLower.includes('vercel')) return 'bg-gray-400/20 text-gray-300 border border-gray-400/30';
  if (techLower.includes('framer')) return 'bg-purple-500/20 text-purple-400 border border-purple-500/30';
  if (techLower.includes('vite')) return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
  if (techLower.includes('leaflet') || techLower.includes('map')) return 'bg-green-500/20 text-green-400 border border-green-500/30';
  if (techLower.includes('responsive') || techLower.includes('design')) return 'bg-pink-500/20 text-pink-400 border border-pink-500/30';
  if (techLower.includes('font awesome')) return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
  
  // Default
  return 'bg-gray-700/50 text-gray-300 border border-gray-600/50';
};

const projects = [
  {
    title: 'EduSoma - Learning Management System',
    description:
      'An innovative Learning Management System that revolutionizes online education. Features multi-role user management, course creation, progress tracking, interactive quizzes, automated certificates, and discussion forums. Built with modern fullstack architecture.',
    image: '/E-learning.png',
    tech: ['Angular', 'NestJS 11.0', 'PostgreSQL', 'Prisma ORM', 'TailwindCSS', 'JWT Auth'],
    github: 'https://github.com/Kishoyian-Brian/E-Learning',
    demo: 'https://github.com/Kishoyian-Brian/E-Learning',
  },
  {
    title: 'RentCar - Car Rental Management System',
    description:
      'A dynamic full-stack car rental management system with role-based access control for admins, agents, and customers. Features car browsing, booking system, profile management, reviews, and real-time notifications.',
    image: 'Cars.png',
    tech: ['Angular', 'NestJS', 'PostgreSQL', 'Prisma ORM', 'JWT Auth', 'Cloudinary'],
    github: 'https://github.com/Kishoyian-Brian/Rental_Car',
    demo: 'https://github.com/Kishoyian-Brian/Rental_Car',
  },
  {
    title: 'SendIt - Parcel Delivery Management System',
    description:
      'An intelligent parcel delivery management system with real-time tracking, role-based access control, and advanced route optimization. Features interactive maps, live location updates, and multi-role system for admins, drivers, and users.',
    image: 'Sendit.png',
    tech: ['Angular', 'NestJS', 'PostgreSQL', 'Prisma', 'WebSockets', 'Leaflet Maps'],
    github: 'https://github.com/Kishoyian-Brian/Sendit',
    demo: 'https://github.com/Kishoyian-Brian/Sendit',
  },
  {
    title: 'Shopiie E-commerce Platform',
    description:
      'A modern full-stack e-commerce platform built with NestJS and Angular. Features product management, shopping cart functionality, checkout flow, payment integration, and responsive design for seamless online shopping experiences.',
    image: 'Shoppie.png',
    tech: ['Angular', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'Responsive Design'],
    github: 'https://github.com/Kishoyian-Brian/Shoppie',
  },
  {
    title: 'GreenScape Adventures - Eco-Tourism Website',
    description:
      'A stunning, responsive website for an eco-tourism and nature adventure company. Features sustainable tourism experiences, nature activities, interactive galleries, and environmental conservation awareness. Built with pure frontend technologies.',
    image: '/greenscape.png',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Font Awesome', 'Vercel'],
    github: 'https://github.com/Kishoyian-Brian/GreenSCape-Adventure',
    demo: 'https://green-scape-kappa.vercel.app/',
  },
  {
    title: 'My Portfolio - Modern Developer Portfolio',
    description:
      'A modern, responsive portfolio website showcasing full-stack development skills and projects. Features smooth animations, professional design, interactive sections, and comprehensive project showcase. Built with React, TypeScript, and Tailwind CSS.',
    image: '/portfolio.png',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'Vite'],
    github: 'https://github.com/Kishoyian-Brian/Portfolio',
    demo: 'https://brian-portfolio-ten-nu.vercel.app/',
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
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
                  <div className="h-48 bg-gray-700 flex items-center justify-center relative overflow-hidden">
                    {project.image && project.image !== 'placeholder' ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image size={64} className="text-gray-600" />
                    )}
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
                            className={`px-3 py-1 text-sm rounded-full ${getTechColor(tech)}`}
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
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200"
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
