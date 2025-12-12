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
        iconColor: 'text-red-600',
      },
      {
        name: 'React',
        icon: SiReact,
        description: 'Building interactive UIs',
        iconColor: 'text-[#1DA1F2]',
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        description: 'Type-safe development',
        iconColor: 'text-blue-600',
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        description: 'Utility-first CSS framework',
        iconColor: 'text-teal-500',
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
        iconColor: 'text-green-600',
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
        iconColor: 'text-indigo-600',
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
        iconColor: 'text-green-600',
      },
      {
        name: 'Git/GitHub',
        icon: SiGithub,
        description: 'Version control',
        iconColor: 'text-black',
      },
      {
        name: 'Docker',
        icon: SiDocker,
        description: 'Containerization',
        iconColor: 'text-[#1DA1F2]',
      },
      {
        name: 'Deployment',
        icon: Cloud,
        description: 'CI/CD & DevOps',
        iconColor: 'text-[#1DA1F2]',
      },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);

  return (
    <section id="skills" className="py-6 bg-white border-b border-[#E6E6E6]" ref={ref}>
      <div className="px-4">
        <h2 className="text-2xl font-bold mb-6 text-black">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white border border-[#E6E6E6] rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-black mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-4 p-3 hover:bg-[#F7F9F9] rounded-lg transition-colors"
                    >
                      <div className="w-12 h-12 border border-[#E6E6E6] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className={skill.iconColor} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-semibold text-black mb-1">{skill.name}</h4>
                        <p className="text-xs text-black/60">{skill.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
