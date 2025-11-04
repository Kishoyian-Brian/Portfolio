import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud } from 'lucide-react';
import { SiAngular, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiNestjs, SiPostgresql, SiPrisma, SiPhp, SiSwagger, SiGithub, SiDocker, SiSocketdotio } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'Angular',
        icon: SiAngular,
        description: 'Enterprise web applications',
        iconColor: 'text-red-500',
      },
      {
        name: 'React',
        icon: SiReact,
        description: 'Building interactive UIs',
        iconColor: 'text-cyan-400',
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        description: 'Type-safe development',
        iconColor: 'text-blue-500',
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        description: 'Utility-first CSS framework',
        iconColor: 'text-teal-400',
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Node.js',
        icon: SiNodedotjs,
        description: 'Backend development',
        iconColor: 'text-green-500',
      },
      {
        name: 'NestJS',
        icon: SiNestjs,
        description: 'Scalable server-side apps',
        iconColor: 'text-red-600',
      },
      {
        name: 'PHP',
        icon: SiPhp,
        description: 'Server-side scripting',
        iconColor: 'text-purple-600',
      },
      {
        name: 'WebSockets',
        icon: SiSocketdotio,
        description: 'Real-time communication',
        iconColor: 'text-orange-500',
      },
    ],
  },
  {
    title: 'Database',
    skills: [
      {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        description: 'Relational database',
        iconColor: 'text-blue-600',
      },
      {
        name: 'Prisma ORM',
        icon: SiPrisma,
        description: 'Type-safe database client',
        iconColor: 'text-indigo-500',
      },
    ],
  },
  {
    title: 'Other',
    skills: [
      {
        name: 'REST APIs',
        icon: SiSwagger,
        description: 'API design & integration',
        iconColor: 'text-green-500',
      },
      {
        name: 'Git/GitHub',
        icon: SiGithub,
        description: 'Version control',
        iconColor: 'text-gray-300',
      },
      {
        name: 'Docker',
        icon: SiDocker,
        description: 'Containerization',
        iconColor: 'text-blue-400',
      },
      {
        name: 'Deployment',
        icon: Cloud,
        description: 'CI/CD & DevOps',
        iconColor: 'text-teal-400',
      },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="group"
              >
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 h-full hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const Icon = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon size={24} className={skill.iconColor} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg font-semibold text-white mb-1">{skill.name}</h4>
                            <p className="text-gray-400 text-xs">{skill.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
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
