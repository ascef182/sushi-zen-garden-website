
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fish } from 'lucide-react';

type MenuCategory = 'sushi' | 'sashimi' | 'rolls' | 'signature';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('sushi');

  const categories: { id: MenuCategory; name: string }[] = [
    { id: 'sushi', name: 'Nigiri Sushi' },
    { id: 'sashimi', name: 'Sashimi' },
    { id: 'rolls', name: 'Rolls Especiais' },
    { id: 'signature', name: 'Pratos Exclusivos' },
  ];

  const menuItems: Record<MenuCategory, MenuItem[]> = {
    sushi: [
      { name: 'Otoro (Atum Gordo)', description: 'Barriga de atum premium, rica e amanteigada', price: 'R$70' },
      { name: 'Uni (Ouriço do Mar)', description: 'Ouriço do mar fresco com sabor doce e oceânico', price: 'R$90', popular: true },
      { name: 'Amaebi (Camarão Doce)', description: 'Camarão doce cru com delicada doçura', price: 'R$50' },
      { name: 'Unagi (Enguia de Água Doce)', description: 'Enguia de água doce grelhada com molho doce', price: 'R$60' },
      { name: 'Hamachi (Olhete)', description: 'Peixe olhete selvagem com textura amanteigada', price: 'R$45' },
    ],
    sashimi: [
      { name: 'Prato Premium de Sashimi', description: '9 peças de peixe premium selecionado pelo chef', price: 'R$175', popular: true },
      { name: 'Sashimi de Maguro (Atum)', description: '5 peças de atum azul fresco', price: 'R$120' },
      { name: 'Sashimi de Sake (Salmão)', description: '5 peças de salmão selvagem', price: 'R$100' },
      { name: 'Sashimi de Hotate (Vieira)', description: '5 peças de vieiras doces de Hokkaido', price: 'R$130' },
      { name: 'Sashimi de Tai (Pargo Vermelho)', description: '5 peças de delicado pargo vermelho', price: 'R$110' },
    ],
    rolls: [
      { name: 'Roll Especial Kitsune', description: 'Toro, uni, caviar, flocos de ouro, envolto em pepino', price: 'R$160', popular: true },
      { name: 'Dragon Roll', description: 'Enguia grelhada, abacate, pepino, tobiko', price: 'R$120' },
      { name: 'Rainbow Roll', description: 'California roll coberto com sashimi sortido', price: 'R$110' },
      { name: 'Spicy Tuna Roll', description: 'Atum picado, maionese picante, pepino, brotos', price: 'R$90' },
      { name: 'Soft Shell Crab Roll', description: 'Caranguejo de casca mole tempurá, abacate, alface, tobiko', price: 'R$130' },
    ],
    signature: [
      { name: 'Wagyu Tataki', description: 'Wagyu A5 selado com ponzu e óleo de trufa', price: 'R$225', popular: true },
      { name: 'Bacalhau Negro Miso', description: 'Marinado por 72 horas em nossa mistura especial de miso', price: 'R$190' },
      { name: 'Chirashi Sakura', description: 'Sashimi premium sortido sobre arroz temperado', price: 'R$210' },
      { name: 'Experiência Omakase', description: 'Seleção do chef de pratos sazonais premium', price: 'R$600' },
      { name: 'Lagosta Tempurá', description: 'Lagosta inteira em leve massa tempurá com molhos para mergulhar', price: 'R$240' },
    ],
  };

  return (
    <div className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Fish size={20} className="text-accent-red" />
            <h2 className="text-lg font-medium text-accent-red">Nossos Pratos</h2>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-playfair font-bold text-navy-800 mb-6">
            Menu Sazonal
          </h3>
          
          <p className="text-slate-700 max-w-2xl mx-auto">
            Nosso menu muda com as estações para apresentar os ingredientes mais frescos. Cada prato é preparado com precisão e cuidado, destacando os sabores naturais dos ingredientes premium.
          </p>
        </motion.div>
        
        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-accent-red text-white'
                  : 'bg-neutral-100 text-slate-700 hover:bg-neutral-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <AnimatePresence mode="wait">
            {menuItems[activeCategory].map((item, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow relative"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-playfair font-bold text-navy-800">{item.name}</h4>
                  <div className="flex flex-col items-end">
                    {item.popular && (
                      <span className="inline-block mb-1 px-3 py-1 bg-accent-red/10 text-accent-red text-xs font-medium rounded-full">
                        Popular
                      </span>
                    )}
                    <span className="text-lg font-medium text-accent-red">{item.price}</span>
                  </div>
                </div>
                
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="mt-12 text-center">
          <span className="italic text-slate-500">
            * Consumir frutos do mar crus ou mal cozidos pode aumentar o risco de doenças transmitidas por alimentos
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
