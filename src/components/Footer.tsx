import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--card)] border-t border-[var(--border)] py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-[var(--muted)]">
            <span>&copy; 2025 Brian. Built with</span>
            <Heart size={16} className="text-[var(--accent)] fill-current" />
            <span>and React</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Kishoyian-Brian"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/brian-mwangi033/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-[var(--muted)] text-sm">
          <p>Designed and developed with modern web technologies</p>
        </div>
      </div>
    </footer>
  );
}
