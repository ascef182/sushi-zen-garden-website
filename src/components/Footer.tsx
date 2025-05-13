
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
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
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Logo & About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold">
              <span className="text-accent-red">秘</span>Kitsune
            </h3>
            <p className="text-white/70 text-sm">
              Autêntica culinária japonesa celebrando a arte do sushi, tradição e inovação desde 1987.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-accent-red transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-accent-red transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-accent-red transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-white/70 hover:text-accent-red transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')} 
                  className="text-white/70 hover:text-accent-red transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('book')} 
                  className="text-white/70 hover:text-accent-red transition-colors"
                >
                  Reservas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-white/70 hover:text-accent-red transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Horários</h4>
            <ul className="space-y-2 text-white/70">
              <li className="flex justify-between">
                <span>Segunda - Quinta</span>
                <span>11:30 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sexta - Sábado</span>
                <span>11:30 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span>12:00 - 21:00</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <address className="not-italic text-white/70 space-y-2">
              <p>Rua dos Sushis, 123</p>
              <p>Bairro Sakura</p>
              <p>São Paulo, SP 01001-000</p>
              <p className="mt-4">
                <a href="tel:+551125557890" className="hover:text-accent-red transition-colors">
                  (11) 2555-7890
                </a>
              </p>
              <p>
                <a href="mailto:info@kitsune.com" className="hover:text-accent-red transition-colors">
                  info@kitsune.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Kitsune Restaurante Japonês. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
