import { Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-2 pb-2 bg-white">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#E6E6E6] rounded-full text-sm text-black">
          <div className="w-2 h-2 bg-[#1DA1F2] rounded-full"></div>
          Available for new opportunities
        </div>

        <h1 className="text-3xl font-bold text-black">
          Mwangi Brian
        </h1>

        <h2 className="text-xl text-black font-medium">
          Junior Software Developer
        </h2>

        <p className="text-base text-black/70 leading-relaxed">
          I craft dynamic full-stack solutions that bridge the gap between innovative ideas and 
          production reality. With mastery in Angular, NestJS, and PostgreSQL, I architect robust 
          applications that scale seamlessly from database to deployment.
        </p>

        <div className="grid grid-cols-3 gap-3 py-2">
          <div>
            <div className="text-2xl font-bold text-black">3+</div>
            <div className="text-xs text-black/60 mt-1">Years</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-black">10+</div>
            <div className="text-xs text-black/60 mt-1">Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-black">100%</div>
            <div className="text-xs text-black/60 mt-1">Satisfaction</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <button
            onClick={scrollToProjects}
            className="w-full px-4 py-2 bg-[#1DA1F2] text-white font-semibold rounded-full hover:bg-[#1a8cd8] transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <ArrowRight size={16} />
            View My Work
          </button>
          
          <a
            href="https://docs.google.com/document/d/1Pq5-4zGUh4vtK3UZVxKNk_PDh4e0WZFZnWgghxals84/edit?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-4 py-2 border border-[#E6E6E6] text-black font-semibold rounded-full hover:border-[#1DA1F2] hover:text-[#1DA1F2] transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <Download size={16} />
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

