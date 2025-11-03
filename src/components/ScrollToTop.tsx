import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, Sparkles } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get footer element
      const footer = document.querySelector('footer');
      if (!footer) return;

      // Get footer position
      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Show button when footer is visible (even partially)
      setIsVisible(footerRect.top <= windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.25, 0.1, 0.25, 1],
            scale: { type: "spring", stiffness: 300, damping: 20 }
          }}
          whileHover={{ 
            scale: 1.1,
            y: -5,
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Scroll to top"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FAAF1E] to-[#FFC55C] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
          
          {/* Main button with glassmorphism */}
          <div className="relative glass-dark border border-[#FAAF1E]/30 rounded-full p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:border-[#FAAF1E]/60 group-hover:shadow-premium">
            {/* Animated gradient background on hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FAAF1E]/10 to-[#FFC55C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Icon with animation */}
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -3, 0],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ChevronUp 
                  size={24} 
                  className="text-[#FAAF1E] transition-colors duration-300 group-hover:text-white" 
                />
              </motion.div>
              
              {/* Sparkle effect on hover */}
              <motion.div
                className="absolute -top-1 -right-1"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Sparkles size={12} className="text-[#FAAF1E]" />
              </motion.div>
            </div>
          </div>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
          >
            <div className="glass-dark px-4 py-2 rounded-lg border border-[#FAAF1E]/20">
              <span className="text-sm text-white/90">Back to Top</span>
            </div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
