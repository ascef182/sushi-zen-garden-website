
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
    { id: 'rolls', name: 'Specialty Rolls' },
    { id: 'signature', name: 'Signature Dishes' },
  ];

  const menuItems: Record<MenuCategory, MenuItem[]> = {
    sushi: [
      { name: 'Otoro (Fatty Tuna)', description: 'Premium fatty tuna belly, rich and buttery', price: '$14' },
      { name: 'Uni (Sea Urchin)', description: 'Fresh sea urchin with a sweet, oceanic flavor', price: '$18', popular: true },
      { name: 'Amaebi (Sweet Shrimp)', description: 'Raw sweet shrimp with a delicate sweetness', price: '$10' },
      { name: 'Unagi (Freshwater Eel)', description: 'Grilled freshwater eel glazed with sweet sauce', price: '$12' },
      { name: 'Hamachi (Yellowtail)', description: 'Wild-caught yellowtail with a buttery texture', price: '$9' },
    ],
    sashimi: [
      { name: 'Premium Sashimi Platter', description: '9 pieces of chef-selected premium fish', price: '$35', popular: true },
      { name: 'Maguro (Tuna) Sashimi', description: '5 pieces of fresh bluefin tuna', price: '$24' },
      { name: 'Sake (Salmon) Sashimi', description: '5 pieces of wild-caught salmon', price: '$20' },
      { name: 'Hotate (Scallop) Sashimi', description: '5 pieces of sweet Hokkaido scallops', price: '$26' },
      { name: 'Tai (Red Snapper) Sashimi', description: '5 pieces of delicate red snapper', price: '$22' },
    ],
    rolls: [
      { name: 'Kitsune Special Roll', description: 'Toro, uni, caviar, gold flakes, wrapped in cucumber', price: '$32', popular: true },
      { name: 'Dragon Roll', description: 'Grilled eel, avocado, cucumber, tobiko', price: '$24' },
      { name: 'Rainbow Roll', description: 'California roll topped with assorted sashimi', price: '$22' },
      { name: 'Spicy Tuna Roll', description: 'Chopped tuna, spicy mayo, cucumber, sprouts', price: '$18' },
      { name: 'Soft Shell Crab Roll', description: 'Tempura soft shell crab, avocado, lettuce, tobiko', price: '$26' },
    ],
    signature: [
      { name: 'Wagyu Tataki', description: 'Seared A5 wagyu with ponzu and truffle oil', price: '$45', popular: true },
      { name: 'Miso Black Cod', description: 'Marinated for 72 hours in our special miso blend', price: '$38' },
      { name: 'Sakura Chirashi', description: 'Premium assorted sashimi over seasoned rice', price: '$42' },
      { name: 'Omakase Experience', description: 'Chef\'s selection of premium seasonal dishes', price: '$120' },
      { name: 'Lobster Tempura', description: 'Whole lobster in light tempura batter with dipping sauces', price: '$48' },
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
            <h2 className="text-lg font-medium text-accent-red">Our Offerings</h2>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-playfair font-bold text-navy-800 mb-6">
            Seasonal Menu
          </h3>
          
          <p className="text-slate-700 max-w-2xl mx-auto">
            Our menu changes with the seasons to showcase the freshest ingredients. Each dish is crafted with precision and care, highlighting the natural flavors of premium ingredients.
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
                {item.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-accent-red/10 text-accent-red text-xs font-medium rounded-full">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-playfair font-bold text-navy-800">{item.name}</h4>
                  <span className="text-lg font-medium text-accent-red">{item.price}</span>
                </div>
                
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="mt-12 text-center">
          <span className="italic text-slate-500">
            * Consuming raw or undercooked seafood may increase risk of foodborne illness
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
