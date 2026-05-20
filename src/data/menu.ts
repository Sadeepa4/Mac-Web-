export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'Burgers' | 'Chicken' | 'Breakfast' | 'Desserts' | 'Drinks';
  image: string;
  description: string;
  calories: number;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'big-mac',
    name: 'Big Mac',
    price: 5.99,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    description: 'Two 100% all beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.',
    calories: 550
  },
  {
    id: 'quarter-pounder',
    name: 'Quarter Pounder with Cheese',
    price: 6.29,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
    description: 'A ¼ lb. of 100% fresh beef that’s cooked when you order, seasoned with just a pinch of salt and pepper.',
    calories: 520
  },
  {
    id: 'mcnuggets-10',
    name: '10 pc. Chicken McNuggets',
    price: 4.99,
    category: 'Chicken',
    image: 'https://images.unsplash.com/photo-1562967962-e2e14a8e3bc2?q=80&w=800&auto=format&fit=crop',
    description: 'Our tender, juicy Chicken McNuggets are made with 100% white meat chicken and no artificial colors, flavors or preservatives.',
    calories: 420
  },
  {
    id: 'mcchicken',
    name: 'McChicken',
    price: 3.49,
    category: 'Chicken',
    image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=800&auto=format&fit=crop',
    description: 'The McChicken is a classic for a reason. It features a toasted bun, crispy chicken patty, and shredded lettuce.',
    calories: 400
  },
  {
    id: 'egg-mcmuffin',
    name: 'Egg McMuffin',
    price: 4.29,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1550524514-9636edba3118?q=80&w=800&auto=format&fit=crop',
    description: 'Our signature breakfast sandwich. A freshly cracked Grade A egg on a toasted English Muffin with American cheese.',
    calories: 310
  },
  {
    id: 'apple-pie',
    name: 'Baked Apple Pie',
    price: 1.49,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=800&auto=format&fit=crop',
    description: 'A favorite since 1968. Our Baked Apple Pie features a cinnamon-spiced apple filling and a lattice-top crust.',
    calories: 230
  },
  {
    id: 'mcflurry-oreo',
    name: 'OREO McFlurry',
    price: 3.99,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop',
    description: 'Vanilla reduced-fat ice cream with OREO cookie pieces.',
    calories: 510
  },
  {
    id: 'coca-cola',
    name: 'Coca-Cola',
    price: 1.99,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=800&auto=format&fit=crop',
    description: 'Enjoy the crisp, iconic taste of Coca-Cola.',
    calories: 150
  }
];
