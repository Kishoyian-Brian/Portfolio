import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Full Width */}
      <Navbar />
      
      {/* Main Layout - 2 Column */}
      <div className="flex flex-col lg:flex-row max-w-6xl xl:max-w-7xl mx-auto gap-5 lg:gap-8">
        {/* Left Column - 350px fixed width, independent scroll */}
        <aside className="w-full lg:w-[380px] lg:sticky lg:top-16 border-r border-[#E6E6E6] bg-white h-screen overflow-y-auto">
          <div className="w-[98%] mx-auto py-5 space-y-5">
            <div className="flex items-center gap-4 border border-[#E6E6E6] rounded-xl p-4">
              <img
                src="https://avatars.githubusercontent.com/u/177422234?v=4"
                alt="Brian - Full Stack Developer"
                className="w-16 h-16 rounded-full border border-[#E6E6E6] object-cover"
              />
              <div className="min-w-0">
                <p className="text-xl font-bold text-black truncate">Mwangi Brian</p>
                <p className="text-sm text-black/70 truncate">Junior Software Developer</p>
              </div>
            </div>

            <div className="border border-[#E6E6E6] rounded-xl p-4">
              <Hero />
            </div>
          </div>
        </aside>

        {/* Center Column - Auto width, feed-style */}
        <main className="flex-1 min-w-0 w-[98%] mx-auto space-y-4">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>

      {/* Footer - Full Width */}
      <Footer />
    </div>
  );
}

export default App;
