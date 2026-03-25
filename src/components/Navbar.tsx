import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { useStore } from '../store/useStore';
import { PRODUCTS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const cart = useStore((state) => state.cart);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Shop', path: '/' },
    { name: 'Tech', path: '/category/Tech' },
    { name: 'Apparel', path: '/category/Apparel' },
    { name: 'Living', path: '/category/Living' },
  ];

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    ).slice(0, 5);
  }, [searchQuery]);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  // Close search on navigation
  useEffect(() => {
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
          VORTEX
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                location.pathname === link.path ? "text-white" : "text-white/50"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="text-white/50 hover:text-white transition-colors"
          >
            <Search size={20} />
          </button>
          <Link to="/cart" className="relative text-white/50 hover:text-white transition-colors">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button 
            className="md:hidden text-white/50 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col"
          >
            <div className="h-20 px-6 flex items-center justify-between border-b border-white/10">
              <div className="flex-1 flex items-center">
                <Search size={24} className="text-white/20 mr-4" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search products, categories, collections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-2xl font-bold tracking-tight text-white focus:outline-none placeholder:text-white/10"
                />
              </div>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="ml-4 p-2 text-white/50 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-12">
              <div className="max-w-3xl mx-auto">
                {searchQuery.trim() === '' ? (
                  <div>
                    <h3 className="text-xs font-mono text-white/20 uppercase tracking-[0.3em] mb-8">Quick Links</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          className="group flex items-center justify-between p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                          <span className="text-xl font-bold tracking-tight">{link.name}</span>
                          <ArrowRight size={20} className="text-white/20 group-hover:text-white transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-xs font-mono text-white/20 uppercase tracking-[0.3em] mb-8">
                      Results ({searchResults.length})
                    </h3>
                    <div className="space-y-4">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          className="group flex items-center gap-6 p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                          <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/5">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-lg font-bold tracking-tight">{product.name}</h4>
                              <span className="text-sm font-mono text-white/40">${product.price}</span>
                            </div>
                            <p className="text-sm text-white/40 line-clamp-1">{product.description}</p>
                          </div>
                        </Link>
                      ))}
                      {searchResults.length === 0 && (
                        <div className="py-20 text-center">
                          <p className="text-white/20 font-mono uppercase tracking-[0.2em]">No products found</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-light tracking-tight text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
