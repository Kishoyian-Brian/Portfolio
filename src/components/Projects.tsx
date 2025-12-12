import { useRef } from 'react';
import { ExternalLink, Github, Image } from 'lucide-react';

const getTechColor = (tech: string): string => {
  const techLower = tech.toLowerCase();
  
  // Frontend frameworks
  if (techLower.includes('angular')) return 'bg-red-50 text-red-700 border border-red-200';
  if (techLower.includes('react')) return 'bg-blue-50 text-blue-700 border border-blue-200';
  if (techLower.includes('typescript')) return 'bg-blue-50 text-blue-700 border border-blue-200';
  if (techLower.includes('javascript')) return 'bg-yellow-50 text-yellow-700 border border-yellow-200';
  if (techLower.includes('html')) return 'bg-orange-50 text-orange-700 border border-orange-200';
  if (techLower.includes('css')) return 'bg-blue-50 text-blue-700 border border-blue-200';
  if (techLower.includes('tailwind')) return 'bg-teal-50 text-teal-700 border border-teal-200';
  
  // Backend frameworks
  if (techLower.includes('nestjs')) return 'bg-red-50 text-red-700 border border-red-200';
  if (techLower.includes('node')) return 'bg-green-50 text-green-700 border border-green-200';
  
  // Database
  if (techLower.includes('postgresql') || techLower.includes('postgres')) return 'bg-blue-50 text-blue-700 border border-blue-200';
  if (techLower.includes('prisma')) return 'bg-indigo-50 text-indigo-700 border border-indigo-200';
  
  // Tools & Services
  if (techLower.includes('jwt') || techLower.includes('auth')) return 'bg-purple-50 text-purple-700 border border-purple-200';
  if (techLower.includes('websocket')) return 'bg-green-50 text-green-700 border border-green-200';
  if (techLower.includes('cloudinary')) return 'bg-blue-50 text-blue-700 border border-blue-200';
  if (techLower.includes('vercel')) return 'bg-gray-50 text-gray-700 border border-gray-200';
  if (techLower.includes('framer')) return 'bg-purple-50 text-purple-700 border border-purple-200';
  if (techLower.includes('vite')) return 'bg-yellow-50 text-yellow-700 border border-yellow-200';
  if (techLower.includes('leaflet') || techLower.includes('map')) return 'bg-green-50 text-green-700 border border-green-200';
  if (techLower.includes('responsive') || techLower.includes('design')) return 'bg-pink-50 text-pink-700 border border-pink-200';
  if (techLower.includes('font awesome')) return 'bg-blue-50 text-blue-700 border border-blue-200';
  
  // Default
  return 'bg-gray-50 text-gray-700 border border-gray-200';
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

  return (
    <section id="projects" className="py-6 bg-white border-b border-[#E6E6E6]" ref={ref}>
      <div className="px-4">
        <h2 className="text-2xl font-bold mb-6 text-black">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white border border-[#E6E6E6] rounded-2xl overflow-hidden flex flex-col hover:border-[#1DA1F2] transition-colors"
            >
              <div className="h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
                {project.image && project.image !== 'placeholder' ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image size={64} className="text-black/20" />
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-black mb-3 hover:text-[#1DA1F2] transition-colors">
                  {project.title}
                </h3>

                <p className="text-black/70 mb-4 flex-1 text-sm leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs rounded-full ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-[#E6E6E6] text-black rounded-full hover:border-[#1DA1F2] hover:text-[#1DA1F2] transition-colors text-sm"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-full hover:bg-[#1a8cd8] transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
