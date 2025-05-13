
import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 px-4 bg-neutral-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Left Column - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-accent-red rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1628432136678-43ff9be34064?q=80&w=2826&auto=format&fit=crop" 
                alt="Master Chef" 
                className="w-full h-[500px] object-cover rounded-lg shadow-xl" 
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="font-playfair font-bold text-navy-800 text-lg">est.</span>
                  <span className="text-4xl font-playfair font-bold text-accent-red">1987</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Text */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <Info size={20} className="text-accent-red" />
              <h2 className="text-lg font-medium text-accent-red">Our Story</h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-navy-800 mb-6">
              Tradition Meets Innovation
            </h3>
            
            <div className="space-y-4 text-slate-700">
              <p>
                Founded by Master Chef Hiroshi Tanaka, Kitsune has been a staple of authentic Japanese cuisine since 1987. Our journey began with a vision to bring the true essence of Japan's culinary artistry to the heart of the city.
              </p>
              
              <p>
                For over three decades, we've maintained our commitment to quality, sourcing the freshest ingredients and seafood daily. Every dish that leaves our kitchen embodies the perfect balance between time-honored techniques and contemporary creativity.
              </p>
              
              <p>
                Our team of chefs train for years to master the delicate art of sushi-making, ensuring that each bite tells a story of tradition, passion, and meticulous attention to detail.
              </p>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <div className="border-l-4 border-accent-red pl-4">
                <div className="font-medium text-navy-800">Master Chef</div>
                <div className="text-lg font-playfair font-bold text-navy-800">Hiroshi Tanaka</div>
              </div>
              
              <div className="border-l-4 border-accent-red pl-4">
                <div className="font-medium text-navy-800">Head Sommelier</div>
                <div className="text-lg font-playfair font-bold text-navy-800">Akira Yamaguchi</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
