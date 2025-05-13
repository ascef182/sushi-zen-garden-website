
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import BookTable from '../components/BookTable';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  const [activeSection, setActiveSection] = useState('');
  
  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'menu', 'book', 'contact'];
      const scrollPosition = window.scrollY + 300;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-neutral-50 text-slate-800"
    >
      <Navbar activeSection={activeSection} />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="menu">
        <Menu />
      </section>
      
      <section id="book">
        <BookTable />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
