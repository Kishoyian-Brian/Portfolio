import { motion } from 'framer-motion';
import { ChevronDown, Download, ArrowRight, Code, Database, Cloud } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMzI3MzEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCAzLjk5LTRIMzZjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDR2LTRjLTIuMiAwLTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 mb-6"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Available for new opportunities
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Brian
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-4 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Junor Software Developer
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I specialize in building enterprise-grade applications using modern technologies. 
              With expertise in React, Node.js, and cloud architecture, I deliver scalable solutions 
              that drive business growth.
            </motion.p>

            {/* Professional Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight size={18} />
                View My Work
              </motion.button>
              
              <motion.button
                onClick={scrollToContact}
                className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Get Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Floating Tech Icons */}
            <div className="relative w-full h-96 flex items-center justify-center">
              <motion.div
                className="absolute top-8 left-8 w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code className="text-blue-400" size={32} />
              </motion.div>
              
              <motion.div
                className="absolute top-16 right-12 w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Database className="text-purple-400" size={32} />
              </motion.div>
              
              <motion.div
                className="absolute bottom-16 left-12 w-16 h-16 bg-pink-500/20 rounded-lg flex items-center justify-center"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                <Cloud className="text-pink-400" size={32} />
              </motion.div>

              {/* Central Professional Card */}
              <motion.div
                className="w-64 h-80 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-2xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4"></div>
                <h3 className="text-white font-semibold mb-2">Full Stack Solutions</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Enterprise applications with modern architecture and scalable design patterns.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">AWS</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-gray-400" size={32} />
        </motion.div>
      </div>
    </section>
  );
}
