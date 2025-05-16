import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Code, Palette, LayoutGrid, Users } from 'lucide-react';

const About: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-12"></div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="w-full max-w-md mx-auto -4 h-80 md:h-96 lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="/avatar.png" 
                    alt="Sumit Moharana" 
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-400 -z-10 rounded-lg"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Full Stack Developer & Multimedia Creator</h3>
              <p className="text-gray-700 mb-6">
                Hi, I'm Sumit Moharana — a creative technologist who blends code and content. I build scalable web apps with the MERN stack and bring them to life with beautiful UI, engaging visuals, and clean code. Whether it's a full-featured blog platform, a sleek task manager, or a professional video edit, I love turning ideas into polished digital experiences.
              </p>
              <p className="text-gray-700 mb-8">
                Currently pursuing my MCA at LPU, I'm also a certified Full Stack Developer, technical documenter, and video editor. Let's build something awesome!
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="mr-3 bg-yellow-400 p-2 rounded-lg">
                    <Code size={20} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Clean Code</h4>
                    <p className="text-sm text-gray-600">Well-structured & maintainable</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 bg-yellow-400 p-2 rounded-lg">
                    <Palette size={20} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Creative Design</h4>
                    <p className="text-sm text-gray-600">Beautiful UI/UX solutions</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 bg-yellow-400 p-2 rounded-lg">
                    <LayoutGrid size={20} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Full Stack</h4>
                    <p className="text-sm text-gray-600">End-to-end development</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 bg-yellow-400 p-2 rounded-lg">
                    <Users size={20} className="text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Content Creator</h4>
                    <p className="text-sm text-gray-600">Video & documentation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;