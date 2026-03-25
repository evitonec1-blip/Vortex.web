import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { useStore } from '../store/useStore';
import { PageTransition } from '../components/PageTransition';
import { ChevronLeft, Plus, Minus, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const addToCart = useStore((state) => state.addToCart);

  if (!product) return <div>Product not found</div>;

  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm text-white/40 hover:text-white transition-colors mb-12"
        >
          <ChevronLeft size={16} className="mr-2" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[4/5] bg-zinc-900 rounded-3xl overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Info Section */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-xs font-mono text-white/40 uppercase tracking-[0.2em]">
                {product.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mt-4 uppercase">
                {product.name}
              </h1>
              <p className="text-2xl font-mono text-white mt-6">${product.price}</p>
            </div>

            <p className="text-lg text-white/60 font-light leading-relaxed mb-12">
              {product.description}
            </p>

            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Key Features</h3>
                <ul className="grid grid-cols-2 gap-4">
                  {product.details.map((detail) => (
                    <li key={detail} className="flex items-center text-sm text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-white mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Specifications</h3>
                <div className="space-y-2">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm py-2 border-b border-white/5">
                      <span className="text-white/40">{key}</span>
                      <span className="text-white/90">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="w-full py-6 bg-white text-black font-bold uppercase tracking-widest rounded-full flex items-center justify-center space-x-4 hover:bg-white/90 transition-colors"
            >
              <ShoppingBag size={20} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
