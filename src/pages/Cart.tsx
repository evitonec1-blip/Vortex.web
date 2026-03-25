import { useStore } from '../store/useStore';
import { PageTransition } from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export function Cart() {
  const { cart, updateQuantity, removeFromCart } = useStore();
  const [showDemoMessage, setShowDemoMessage] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <PageTransition>
        <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold tracking-tighter text-white uppercase mb-8">Your bag is empty</h1>
          <Link 
            to="/" 
            className="inline-block px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white/90 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase mb-16">Shopping Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex gap-6 p-6 bg-zinc-900/50 rounded-3xl border border-white/5"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-zinc-800 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-white">{item.name}</h3>
                        <p className="text-sm text-white/40">{item.category}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-white/20 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex items-center space-x-4 bg-black/40 rounded-full px-4 py-2 border border-white/5">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-white/40 hover:text-white transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-sm font-mono text-white w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-white/40 hover:text-white transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <p className="text-lg font-mono text-white">${item.price * item.quantity}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5 sticky top-32">
              <h2 className="text-xl font-bold text-white uppercase mb-8">Order Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Subtotal</span>
                  <span className="text-white">${total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Shipping</span>
                  <span className="text-white">Calculated at next step</span>
                </div>
                <div className="h-px bg-white/10 my-4" />
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-white">${total}</span>
                </div>
              </div>
              <button 
                onClick={() => setShowDemoMessage(true)}
                className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full flex items-center justify-center space-x-4 hover:bg-white/90 transition-colors"
              >
                <span>Checkout</span>
                <ArrowRight size={20} />
              </button>

              <AnimatePresence>
                {showDemoMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start space-x-3"
                  >
                    <AlertCircle size={16} className="text-white/40 mt-0.5 flex-shrink-0" />
                    <p className="text-[10px] font-mono text-white/60 uppercase tracking-widest leading-relaxed">
                      this website is just demo for my skills
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
