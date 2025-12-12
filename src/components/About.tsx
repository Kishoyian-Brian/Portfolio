import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);

  return (
    <section id="about" className="py-6 bg-[var(--card)] border-b border-[var(--border)]" ref={ref}>
      <div className="px-4">
        <h2 className="text-2xl font-bold mb-6 text-[var(--text)]">
          About Me
        </h2>

        <div className="space-y-6">
          <p className="text-base text-[var(--muted)] leading-relaxed">
            Hello! I'm Brian, a passionate full-stack developer who builds complete web solutions
            from database design to frontend interfaces and deployment. I specialize in creating
            scalable, performant, and production-ready applications using modern technologies
            across the entire stack.
          </p>

          <p className="text-base text-[var(--muted)] leading-relaxed">
            On the backend, I work with Node.js, NestJS, PostgreSQL, and Prisma ORM to build
            robust APIs and data layers. I also have experience with PHP for legacy systems.
            On the frontend, I craft responsive user interfaces using Angular and React with
            TypeScript, ensuring type-safety throughout the application.
          </p>

          <p className="text-base text-[var(--muted)] leading-relaxed">
            Beyond development, I'm skilled in deployment and DevOps, ensuring applications
            run smoothly in production environments. I thrive on solving complex technical
            challenges and delivering end-to-end solutions that make a real impact.
          </p>

          <div className="pt-4">
            <h3 className="text-lg font-semibold text-[var(--text)] mb-4">What I bring to the table:</h3>
            <ul className="space-y-3 text-[var(--muted)]">
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-3">▹</span>
                <span>Full-stack expertise from database to deployment</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-3">▹</span>
                <span>Strong architectural design and system thinking</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-3">▹</span>
                <span>Production-ready code with testing and DevOps practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-3">▹</span>
                <span>Ability to work across the entire technology stack</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
