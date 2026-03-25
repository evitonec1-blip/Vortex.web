import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold tracking-tighter text-white uppercase">Vortex</span>
          <p className="text-xs font-mono text-white/20 uppercase tracking-widest">
            High-Performance Commerce
          </p>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em] mb-2">
            Website Crafted By
          </p>
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05, color: '#fff' }}
            className="text-sm font-bold text-white/60 tracking-tight transition-colors"
          >
            EVITONEC STUDIO
          </motion.a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center">
        <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
          © 2026 Vortex Platform
        </p>
        <div className="flex gap-6">
          {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="text-[10px] font-mono text-white/20 uppercase tracking-widest hover:text-white transition-colors"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
