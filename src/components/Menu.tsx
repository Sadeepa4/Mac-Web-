import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS, MenuItem } from '../data/menu';
import { Plus, Info, Zap } from 'lucide-react';

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Burgers');
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const categories = ['Burgers', 'Chicken', 'Breakfast', 'Desserts', 'Drinks'];

  useEffect(() => {
    // Get AI Recommendations
    fetch('/api/ai/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ context: `Active category is ${activeCategory}. Time is noon.` })
    })
    .then(res => res.json())
    .then(data => {
      if (data.items) setRecommendations(data.items);
    })
    .catch(() => {});
  }, [activeCategory]);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-4xl font-black mb-4">Our Menu</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${
                    activeCategory === cat 
                    ? 'bg-mcd-red text-white' 
                    : 'bg-white text-gray-500 hover:bg-gray-100 shadow-sm'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* AI Recommended Chip */}
          {recommendations.length > 0 && (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white p-4 rounded-2xl shadow-sm border border-mcd-gold/30 flex items-center gap-4 max-w-sm"
            >
              <div className="w-10 h-10 bg-mcd-gold/20 rounded-xl flex items-center justify-center text-mcd-gold">
                <Zap size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-[10px] text-mcd-gold font-black uppercase tracking-widest leading-none mb-1">Smart Pick</p>
                <p className="text-xs font-semibold leading-tight">People usually order <span className="text-mcd-red">McFlurry</span> with their {activeCategory}!</p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
                    {item.calories} kcal
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg leading-tight">{item.name}</h3>
                    <span className="font-extrabold text-mcd-red text-lg">${item.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6 line-clamp-2">{item.description}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gray-100 hover:bg-mcd-gold hover:text-mcd-black transition-colors py-3 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm">
                      <Plus size={18} /> Add
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 text-gray-400 hover:text-mcd-red transition-colors">
                      <Info size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
