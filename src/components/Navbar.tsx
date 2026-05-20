import { motion } from 'motion/react';
import { ShoppingCart, Menu as MenuIcon, User, Search } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-mcd-red rounded-lg flex items-center justify-center">
              <span className="text-mcd-gold text-2xl font-black">M</span>
            </div>
            <span className="font-black text-xl tracking-tighter">McOrdering AI</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-6 font-semibold text-sm">
            <a href="#menu" className="hover:text-mcd-red transition-colors">Menu</a>
            <a href="#deals" className="hover:text-mcd-red transition-colors">Deals</a>
            <a href="#locations" className="hover:text-mcd-red transition-colors">Locations</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-mcd-gold rounded-full font-bold text-sm hover:shadow-md transition-all">
            <ShoppingCart size={18} />
            <span>$0.00</span>
          </button>
          <button className="p-2 md:hidden">
            <MenuIcon size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};
