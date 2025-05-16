import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative flex items-center justify-center min-h-screen gradient-animation overflow-hidden"
      id="hero"
    >
      <div 
        className="absolute inset-0 bg-black/50"
        style={{ backdropFilter: 'blur(100px)' }}
      ></div>
      
      <motion.div 
        className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="w-full md:w-1/2 mb-12 md:mb-0" variants={itemVariants}>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            <motion.span className="block" variants={itemVariants}>Hi, I'm</motion.span>
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
              variants={itemVariants}
            >
             Sumit Moharana
            </motion.span>
          </motion.h1>
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6"
            variants={itemVariants}
          >
             Multifacilated Full Stack Devloper & Multimedia Creator
          </motion.h2>
          <motion.p 
            className="text-white/80 text-lg mb-8 max-w-lg"
            variants={itemVariants}
          >
            I create beautiful, responsive, and user-friendly web applications with modern technologies. Let's build something amazing together.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <motion.a 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a 
              href="#projects"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
          </motion.div>
            {/* <motion.a
               href="/Sumit_Moharana_Resume.pdf"
               download
               className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
            >
             Download Resume
           </motion.a> */}

        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          variants={itemVariants}
        >
          <motion.div 
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative rounded-full overflow-hidden border-8 border-white/20 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/pic.jpg" 
              alt="John Doe"
              className="w-full h-full object-cover object-[5%_5%]"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        aria-label="Scroll Down"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={32} />
      </motion.a>

      {/* Gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-pink-500/20"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-purple-500/20"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
};

export default Hero;