import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import constierLogo from 'figma:asset/951b604ab22ea25f210709dd0e9b0c5f62c79312.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-dark shadow-premium' 
            : 'bg-transparent'
        }`}
      >
        {/* Premium border glow */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FAAF1E]/30 to-transparent transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo with enhanced visibility */}
            <Link to="/" className="flex items-center z-50 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative glass-dark px-4 py-2 rounded-xl border border-white/10"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#FAAF1E]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Logo with brightness filter */}
                <img 
                  src={constierLogo} 
                  alt="Constier" 
                  className="h-10 w-auto relative z-10 brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" 
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group px-6 py-3"
                >
                  <span className={`relative z-10 text-sm transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-[#FAAF1E]'
                      : 'text-white/80 group-hover:text-white'
                  }`}>
                    {link.name}
                  </span>
                  
                  {/* Hover background */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 glass rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                  {/* Active indicator */}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FAAF1E] shadow-glow-gold-soft"
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/contact"
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-3 gradient-gold rounded-2xl flex items-center gap-2 shadow-glow-gold-soft hover:shadow-glow-gold transition-all duration-300 overflow-hidden"
                >
                  {/* Shine effect */}
                  <motion.div
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                  
                  <span className="relative z-10 text-[#0B0C1D]">Get Started</span>
                  <ArrowRight size={16} className="relative z-10 text-[#0B0C1D]" />
                </motion.div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 glass rounded-xl p-3 text-white"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0B0C1D]/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Particle effect */}
            <div className="absolute inset-0 particle-bg opacity-30" />
            <div className="absolute inset-0 grid-pattern opacity-10" />

            {/* Menu Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative h-full flex flex-col items-center justify-center p-8"
            >
              {/* Logo at top */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="absolute top-8 left-8 glass-dark px-4 py-2 rounded-xl border border-white/10"
              >
                <img 
                  src={constierLogo} 
                  alt="Constier" 
                  className="h-10 w-auto brightness-0 invert opacity-90" 
                />
              </motion.div>

              {/* Nav Links */}
              <div className="space-y-4 mb-12">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block group relative`}
                    >
                      <motion.div
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4"
                      >
                        <div className={`w-1 h-8 rounded-full transition-all ${
                          location.pathname === link.path
                            ? 'bg-[#FAAF1E] shadow-glow-gold-soft'
                            : 'bg-white/20 group-hover:bg-[#FAAF1E]/50'
                        }`} />
                        <span className={`text-4xl transition-colors ${
                          location.pathname === link.path
                            ? 'gradient-text-gold'
                            : 'text-white group-hover:text-[#FAAF1E]'
                        }`}>
                          {link.name}
                        </span>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-4 gradient-gold rounded-2xl flex items-center gap-3 shadow-glow-gold"
                  >
                    <Sparkles size={20} className="text-[#0B0C1D]" />
                    <span className="text-lg text-[#0B0C1D]">Get Started</span>
                    <ArrowRight size={20} className="text-[#0B0C1D]" />
                  </motion.div>
                </Link>
              </motion.div>

              {/* Bottom decoration */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 text-center"
              >
                <p className="text-white/40 text-sm">
                  Transforming Hospitality with Technology
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
