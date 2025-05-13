
import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Utensils } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-navy-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-10 h-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white/10"></div>
          ))}
        </div>
      </div>
      
      {/* Floating Sushi Images */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute left-8 top-1/4 hidden md:block"
      >
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-accent-red/20 shadow-lg">
          <AspectRatio ratio={1/1}>
            <img 
              src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2940&auto=format&fit=crop" 
              alt="Sushi plate" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute right-8 top-1/3 hidden md:block"
      >
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-accent-red/20 shadow-lg">
          <AspectRatio ratio={1/1}>
            <img 
              src="https://images.unsplash.com/photo-1582450871972-ab5ca641643d?q=80&w=2787&auto=format&fit=crop" 
              alt="Sushi rolls" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </motion.div>
      
      {/* Japanese Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')] opacity-5"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="relative z-10 max-w-4xl mx-auto text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-accent-red/10 text-accent-red font-medium text-sm">
              <span className="flex items-center gap-2">
                <ChefHat className="w-4 h-4" />
                Authentic Japanese Cuisine
                <Utensils className="w-4 h-4" />
              </span>
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight"
          >
            Descubra a Arte do <span className="text-accent-red">Sushi</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto bg-navy-900/50 backdrop-blur-sm p-4 rounded-lg border border-white/10"
          >
            <p>Experimente a harmonia perfeita entre tradição e inovação através de nossos pratos meticulosamente preparados e uma atmosfera gastronômica imersiva.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection('menu')}
              className="px-8 py-3 rounded-full bg-accent-red text-white font-medium hover:bg-accent-red/90 transition-colors flex items-center justify-center gap-2"
            >
              <Utensils className="w-5 h-5" />
              Ver Menu
            </button>
            <button
              onClick={() => scrollToSection('book')}
              className="px-8 py-3 rounded-full bg-white/10 text-white border border-white/20 font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Reservar Mesa
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Sushi Display */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 1 }}
        className="absolute bottom-0 left-0 right-0"
      >
        <div className="relative h-60 overflow-hidden">
          <div className="absolute -bottom-2 left-0 right-0 h-[200px] bg-gradient-to-t from-neutral-50 to-transparent z-10"></div>
          <div className="absolute bottom-0 w-full">
            <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-t-3xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=3270&auto=format&fit=crop" 
                alt="Japanese sushi platter" 
                className="w-full object-cover h-60" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-8 right-8 text-white">
                <div className="flex items-center gap-2 text-accent-red font-bold">
                  <ChefHat className="w-5 h-5" />
                  <span>Preparado por chefs japoneses especializados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <span className="text-white/60 text-sm mb-2">Role para Baixo</span>
          <div className="w-0.5 h-10 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ 
                y: [0, 40, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 right-0 h-10 bg-white/60"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
