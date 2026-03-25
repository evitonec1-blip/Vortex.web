import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';
import { PageTransition } from '../components/PageTransition';
import { useState, useMemo } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '../lib/utils';

type SortOption = 'newest' | 'price-asc' | 'price-desc';

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter((p) => p.category === category);

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [category, sortBy]);

  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-[0.2em]">Collection</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white uppercase mt-4">
              {category}
            </h1>
          </div>

          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
            <button
              type="button"
              onClick={() => setSortBy('price-asc')}
              className={cn(
                "flex items-center space-x-2 px-6 py-3 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all",
                sortBy === 'price-asc' ? "bg-white text-black" : "text-white/40 hover:text-white"
              )}
            >
              <ArrowUp size={12} />
              <span>Low</span>
            </button>
            <button
              type="button"
              onClick={() => setSortBy('price-desc')}
              className={cn(
                "flex items-center space-x-2 px-6 py-3 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all",
                sortBy === 'price-desc' ? "bg-white text-black" : "text-white/40 hover:text-white"
              )}
            >
              <ArrowDown size={12} />
              <span>High</span>
            </button>
            <button
              type="button"
              onClick={() => setSortBy('newest')}
              className={cn(
                "px-6 py-3 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all",
                sortBy === 'newest' ? "bg-white text-black" : "text-white/40 hover:text-white"
              )}
            >
              <span>New</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
