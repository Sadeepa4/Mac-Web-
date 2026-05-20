import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [aiCopy, setAiCopy] = useState("Your favorites, just a click away.");

  useEffect(() => {
    // Simulate AI copy generation on mount
    fetch('/api/ai/copy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: "Generate a catchy hero headline for McDonald's promoting 20% off first mobile order." })
    })
    .then(res => res.json())
    .then(data => {
      if (data.text) setAiCopy(data.text);
    })
    .catch(() => {});
  }, []);

  return (
    <div className="relative pt-24 pb-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-mcd-red rounded-full text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mcd-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-mcd-red"></span>
            </span>
            LIMITED TIME OFFER
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight mb-6">
            {aiCopy}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Experience the next generation of flavors. Personalized menus, 
            exclusive AI-only deals, and the fastest delivery in town.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-secondary flex items-center gap-2 group">
              Order Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-primary flex items-center gap-2">
              <Smartphone size={20} /> Download App
            </button>
          </div>
          
          <div className="mt-12 flex gap-8 items-center text-sm font-semibold text-gray-500">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-mcd-gold" />
              <span>Avg Delivery: 12-18 mins</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
                ))}
              </div>
              <span>4.8/5 Star Rating</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=800&auto=format&fit=crop" 
              alt="Delicious Burger"
              className="w-full h-full object-cover rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-mcd-gold rounded-full -z-10 blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-mcd-red rounded-full -z-10 blur-3xl opacity-20"></div>
          
          {/* Floating Achievement */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -bottom-4 right-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-gray-50"
          >
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <ArrowRight size={20} />
            </div>
            <div>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Recent Order</p>
              <p className="text-sm font-bold">128 people ordered nearby</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
