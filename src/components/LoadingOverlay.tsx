import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface LoadingOverlayProps {
  isLoading: boolean;
}

export function LoadingOverlay({ isLoading }: LoadingOverlayProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setCount(0);
      const duration = 1500;
      const intervalTime = 15;
      const steps = duration / intervalTime;
      const increment = 100 / steps;

      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return Math.min(prev + increment, 100);
        });
      }, intervalTime);

      return () => clearInterval(timer);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          exit={{ pointerEvents: 'none' }}
        >
          {/* Left Curtain */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            className="absolute inset-y-0 left-0 w-1/2 bg-black border-r border-white/5"
          />
          
          {/* Right Curtain */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
            className="absolute inset-y-0 right-0 w-1/2 bg-black border-l border-white/5"
          />

          {/* Counter Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 text-center"
          >
            <div className="text-[15vw] font-bold tracking-tighter text-white leading-none">
              {Math.floor(count)}%
            </div>
            <div className="mt-6 flex flex-col items-center gap-4">
              <div className="w-48 h-px bg-white/10 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${count}%` }}
                />
              </div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em] animate-pulse">
                System Initialization
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
