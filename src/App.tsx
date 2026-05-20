import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Deals } from './components/Deals';
import { ChatOverlay } from './components/ChatOverlay';
import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Social Proof Divider */}
        <div className="py-8 bg-mcd-red text-white overflow-hidden whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-12 font-black text-2xl uppercase tracking-widest opacity-50"
          >
            {[1,2,3,4,5,6].map(i => (
              <span key={i} className="flex items-center gap-4">
                Freshly Grilled <span className="text-mcd-gold">●</span> Over 1 Billion Served <span className="text-mcd-gold">●</span> Fast Delivery
              </span>
            ))}
          </motion.div>
        </div>

        <Menu />
        <Deals />

        {/* Locations Stub */}
        <section id="locations" className="py-20 px-4 bg-mcd-black text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-8">Find a Store Near You</h2>
            <div className="relative max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="Enter your zip code..." 
                className="w-full py-6 px-8 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-mcd-gold/50 text-xl font-bold"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-mcd-gold text-mcd-black px-10 rounded-full font-black text-lg hover:scale-105 transition-transform active:scale-95">
                Find
              </button>
            </div>
            <p className="mt-8 text-white/60 font-semibold flex items-center justify-center gap-2">
              <MapPin size={18} /> Currently serving 38,000+ locations worldwide
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-mcd-red rounded-lg flex items-center justify-center">
                <span className="text-mcd-gold text-2xl font-black">M</span>
              </div>
              <span className="font-black text-xl tracking-tighter">McOrdering AI</span>
            </div>
            <p className="text-sm text-gray-500 font-medium">
              Revolutionizing fast food with the power of artificial intelligence.
            </p>
            <div className="flex gap-4">
              <Facebook size={20} className="text-gray-400 hover:text-mcd-red cursor-pointer" />
              <Instagram size={20} className="text-gray-400 hover:text-mcd-red cursor-pointer" />
              <Twitter size={20} className="text-gray-400 hover:text-mcd-red cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-black mb-6 uppercase text-xs tracking-widest">Connect</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li className="hover:text-mcd-red cursor-pointer">Mobile App</li>
              <li className="hover:text-mcd-red cursor-pointer">Gift Cards</li>
              <li className="hover:text-mcd-red cursor-pointer">McDelivery</li>
              <li className="hover:text-mcd-red cursor-pointer">Newsletter</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li className="hover:text-mcd-red cursor-pointer">Our Story</li>
              <li className="hover:text-mcd-red cursor-pointer">Careers</li>
              <li className="hover:text-mcd-red cursor-pointer">Sustainability</li>
              <li className="hover:text-mcd-red cursor-pointer">Newsroom</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-6 uppercase text-xs tracking-widest">Help</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li className="hover:text-mcd-red cursor-pointer flex items-center gap-2">
                <Phone size={14} /> Contact Us
              </li>
              <li className="hover:text-mcd-red cursor-pointer">FAQ</li>
              <li className="hover:text-mcd-red cursor-pointer">Order Status</li>
              <li className="hover:text-mcd-red cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-50 text-center">
          <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">
            © 2026 McOrdering AI. Not affiliated with McDonald's Corp. For demonstration purposes only.
          </p>
        </div>
      </footer>

      <ChatOverlay />
    </div>
  );
}
