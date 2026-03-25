import { Link } from 'react-router-dom';
import { Product } from '../types';
import { usePrefetch } from '../hooks/usePrefetch';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { prefetch } = usePrefetch();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onMouseEnter={() => prefetch(`/product/${product.id}`)}
      className="group relative"
    >
      <Link to={`/product/${product.id}`}>
        <div className="aspect-[3/4] overflow-hidden bg-zinc-900 rounded-2xl relative">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="mt-4 flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-white/90">{product.name}</h3>
            <p className="text-xs text-white/40 mt-1">{product.category}</p>
          </div>
          <p className="text-sm font-mono text-white">${product.price}</p>
        </div>
      </Link>
    </motion.div>
  );
}
