import { motion } from 'motion/react';
import { Tag, Sparkles, Gift } from 'lucide-react';

const deals = [
  {
    title: 'Free Fries Friday',
    desc: 'Get any size Fries for FREE with a $1 minimum purchase every Friday.',
    icon: <Gift className="text-mcd-red" />,
    color: 'bg-red-50'
  },
  {
    title: 'BOGO $1',
    desc: 'Buy one favorite, get another for just $1. Limited time only.',
    icon: <Tag className="text-blue-600" />,
    color: 'bg-blue-50'
  },
  {
    title: 'MyMcDonald’s Rewards',
    desc: 'Earn 100 points for every $1 spent. Redeem for free food!',
    icon: <Sparkles className="text-mcd-gold" />,
    color: 'bg-yellow-50'
  }
];

export const Deals = () => {
  return (
    <section id="deals" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Exclusive Deals & Rewards</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Our AI finds the best savings for you. Check back daily for personalized 
            offers based on your favorites.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {deals.map((deal, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${deal.color} p-8 rounded-[32px] border border-black/5 hover:scale-[1.02] transition-transform cursor-pointer group`}
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:rotate-6 transition-transform">
                {deal.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 leading-tight">{deal.title}</h3>
              <p className="text-gray-600 mb-8 font-medium">{deal.desc}</p>
              <button className="w-full py-4 bg-white rounded-2xl font-black text-sm hover:shadow-lg transition-all active:scale-95">
                Redeem Offer
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
