import { PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';
import { PageTransition } from '../components/PageTransition';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ChevronDown, X, ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '../lib/utils';

type SortOption = 'newest' | 'price-asc' | 'price-desc';

export function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Tech', 'Apparel', 'Living'];

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((p) => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.details.some(d => d.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[12vw] md:text-[8vw] font-bold leading-[0.85] tracking-tighter uppercase text-white"
          >
            Engineered <br />
            <span className="text-white/20 italic">For Speed</span>
          </motion.h1>
          <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="max-w-md text-lg text-white/60 font-light leading-relaxed">
              Vortex is a high-performance commerce experience designed to eliminate latency. 
              Sub-100ms interactions for the modern shopper.
            </p>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <section className="mb-12 sticky top-24 z-40 bg-black/80 backdrop-blur-md py-4 -mx-6 px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={cn(
                  "flex items-center space-x-2 px-6 py-3 rounded-full border text-sm transition-colors",
                  isFilterOpen ? "bg-white text-black border-white" : "bg-white/5 border-white/10 text-white hover:border-white/30"
                )}
              >
                <SlidersHorizontal size={16} />
                <span>Filters</span>
              </button>

              <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
                <button
                  type="button"
                  onClick={() => setSortBy('price-asc')}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all",
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
                    "flex items-center space-x-2 px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all",
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
                    "px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all",
                    sortBy === 'newest' ? "bg-white text-black" : "text-white/40 hover:text-white"
                  )}
                >
                  <span>New</span>
                </button>
              </div>
            </div>
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-6 flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={cn(
                        "px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all",
                        selectedCategory === cat 
                          ? "bg-white text-black" 
                          : "bg-white/5 text-white/40 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Product Grid */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-light tracking-tight text-white">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
              <span className="ml-4 text-xs font-mono text-white/20 uppercase tracking-widest">
                ({filteredProducts.length})
              </span>
            </h2>
            <div className="h-px flex-1 mx-8 bg-white/10 hidden md:block" />
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredProducts.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-40 text-center">
              <p className="text-white/20 font-mono uppercase tracking-[0.2em]">No products found matching your criteria</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-8 text-sm text-white hover:underline underline-offset-8 transition-all"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>
      </div>
    </PageTransition>
  );
}
