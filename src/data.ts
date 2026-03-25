import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'v-001',
    name: 'Vortex Core X1',
    price: 1299,
    description: 'The ultimate workstation for high-performance computing.',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=1000',
    details: ['32GB RAM', '1TB NVMe SSD', 'RTX 4080 GPU'],
    specs: {
      Processor: 'Intel Core i9-13900K',
      Memory: '32GB DDR5',
      Storage: '1TB Gen4 SSD',
    }
  },
  {
    id: 'v-002',
    name: 'Aero Shell Jacket',
    price: 349,
    description: 'Minimalist weather protection for the urban explorer.',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1000',
    details: ['Waterproof', 'Breathable', 'Lightweight'],
    specs: {
      Material: 'Gore-Tex Pro',
      Weight: '320g',
      Fit: 'Athletic',
    }
  },
  {
    id: 'v-003',
    name: 'Monolith Desk',
    price: 899,
    description: 'A single piece of obsidian-grade steel, crafted for focus.',
    category: 'Living',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=1000',
    details: ['Powder-coated steel', 'Integrated cable management', 'Minimalist design'],
    specs: {
      Dimensions: '160x80x75cm',
      Material: 'Carbon Steel',
      Finish: 'Matte Black',
    }
  },
  {
    id: 'v-004',
    name: 'Vortex Audio Pro',
    price: 499,
    description: 'Studio-grade sound in a compact, wireless form factor.',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000',
    details: ['Active Noise Cancelling', '40h Battery Life', 'Spatial Audio'],
    specs: {
      Driver: '40mm Beryllium',
      Connectivity: 'Bluetooth 5.3',
      Weight: '250g',
    }
  },
  {
    id: 'v-005',
    name: 'Flux Runner',
    price: 189,
    description: 'Engineered for speed, designed for the street.',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000',
    details: ['Responsive cushioning', 'Breathable mesh', 'Carbon fiber plate'],
    specs: {
      Sole: 'Vortex Foam',
      Upper: 'Engineered Mesh',
      Drop: '8mm',
    }
  },
  {
    id: 'v-006',
    name: 'Zenith Lamp',
    price: 229,
    description: 'Circadian-aligned lighting for peak productivity.',
    category: 'Living',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1000',
    details: ['Smart control', 'Adjustable color temp', 'Ambient mode'],
    specs: {
      Brightness: '1200 Lumens',
      CRI: '95+',
      Power: '15W',
    }
  },
  {
    id: 'v-007',
    name: 'Vortex Watch S1',
    price: 399,
    description: 'Precision timekeeping meets high-performance materials.',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000',
    details: ['Titanium Case', 'Sapphire Crystal', '10-Day Battery'],
    specs: {
      Case: 'Grade 5 Titanium',
      Display: 'AMOLED 1.4"',
      Waterproof: '50m',
    }
  },
  {
    id: 'v-008',
    name: 'Carbon Backpack',
    price: 249,
    description: 'Ultra-lightweight storage for the modern nomad.',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000',
    details: ['Carbon Fiber Weave', 'Water Resistant', '16" Laptop Sleeve'],
    specs: {
      Capacity: '22L',
      Material: 'Carbon/Nylon',
      Weight: '850g',
    }
  },
  {
    id: 'v-009',
    name: 'Nebula Chair',
    price: 1499,
    description: 'Zero-gravity comfort for extended focus sessions.',
    category: 'Living',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1000',
    details: ['Ergonomic Mesh', 'Adjustable Lumbar', '4D Armrests'],
    specs: {
      Material: 'Elastomeric Mesh',
      Base: 'Polished Aluminum',
      Warranty: '12 Years',
    }
  },
  {
    id: 'v-010',
    name: 'Prism Keyboard',
    price: 199,
    description: 'Tactile precision with customizable optical switches.',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=1000',
    details: ['Hot-swappable', 'PBT Keycaps', 'RGB Lighting'],
    specs: {
      Switches: 'Vortex Optical',
      Layout: '75%',
      Connection: 'USB-C / 2.4G',
    }
  },
  {
    id: 'v-011',
    name: 'Vortex Mouse G1',
    price: 129,
    description: 'Ultra-lightweight gaming mouse with zero-latency sensor.',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=1000',
    details: ['60g Weight', '26K DPI Sensor', 'PTFE Feet'],
    specs: {
      Sensor: 'Vortex Optical 2.0',
      Weight: '60g',
      Battery: '80h',
    }
  },
  {
    id: 'v-012',
    name: 'Aero Shell Pants',
    price: 229,
    description: 'Technical trousers designed for unrestricted movement.',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=1000',
    details: ['4-Way Stretch', 'DWR Coating', 'Articulated Knees'],
    specs: {
      Material: 'Nylon/Elastane',
      Weight: '280g',
      Fit: 'Tapered',
    }
  },
  {
    id: 'v-013',
    name: 'Monolith Shelf',
    price: 449,
    description: 'Modular storage system that floats on your wall.',
    category: 'Living',
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=1000',
    details: ['Hidden Mounting', 'Solid Walnut', 'Modular Design'],
    specs: {
      Dimensions: '120x30x5cm',
      Material: 'American Walnut',
      Finish: 'Natural Oil',
    }
  }
];
