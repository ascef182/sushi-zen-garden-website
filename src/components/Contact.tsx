
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-20 px-4 bg-neutral-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail size={20} className="text-accent-red" />
            <h2 className="text-lg font-medium text-accent-red">Entre em Contato</h2>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-playfair font-bold text-navy-800 mb-6">
            Contato
          </h3>
          
          <p className="text-slate-700 max-w-2xl mx-auto">
            Tem perguntas sobre nosso menu, eventos ou opções de jantar privado? Estamos aqui para ajudar. Entre em contato conosco através de qualquer um dos canais abaixo.
          </p>
        </motion.div>
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 - Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm p-8 text-center"
          >
            <div className="w-12 h-12 bg-accent-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} className="text-accent-red" />
            </div>
            
            <h4 className="text-xl font-playfair font-bold text-navy-800 mb-2">Localização</h4>
            
            <p className="text-slate-600">
              Rua dos Sushis, 123<br />
              Bairro Sakura<br />
              São Paulo, SP 01001-000
            </p>
          </motion.div>
          
          {/* Card 2 - Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm p-8 text-center"
          >
            <div className="w-12 h-12 bg-accent-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={24} className="text-accent-red" />
            </div>
            
            <h4 className="text-xl font-playfair font-bold text-navy-800 mb-2">Telefone</h4>
            
            <p className="text-slate-600 mb-2">
              Reservas:<br />
              <a href="tel:+551125557890" className="text-accent-red hover:underline">
                (11) 2555-7890
              </a>
            </p>
            
            <p className="text-slate-600">
              Eventos Privados:<br />
              <a href="tel:+551125557891" className="text-accent-red hover:underline">
                (11) 2555-7891
              </a>
            </p>
          </motion.div>
          
          {/* Card 3 - Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-xl shadow-sm p-8 text-center"
          >
            <div className="w-12 h-12 bg-accent-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={24} className="text-accent-red" />
            </div>
            
            <h4 className="text-xl font-playfair font-bold text-navy-800 mb-2">Email</h4>
            
            <p className="text-slate-600 mb-2">
              Reservas:<br />
              <a href="mailto:reservas@kitsune.com" className="text-accent-red hover:underline">
                reservas@kitsune.com
              </a>
            </p>
            
            <p className="text-slate-600">
              Informações Gerais:<br />
              <a href="mailto:info@kitsune.com" className="text-accent-red hover:underline">
                info@kitsune.com
              </a>
            </p>
          </motion.div>
        </div>
        
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-xl overflow-hidden shadow-xl h-[400px]"
        >
          <div className="absolute inset-0 bg-navy-800/10 pointer-events-none"></div>
          <iframe
            title="Localização do Restaurante"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.846030223523!2d-73.9876452!3d40.7501914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1587133365605!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
