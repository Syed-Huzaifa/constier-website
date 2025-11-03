import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface ScrollProgressDotsProps {
  sections: string[];
}

export default function ScrollProgressDots({ sections }: ScrollProgressDotsProps) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      const sectionElements = sections.map(id => document.getElementById(id));
      
      sectionElements.forEach((element, index) => {
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map((_, index) => (
        <motion.button
          key={index}
          onClick={() => scrollToSection(index)}
          className="relative group"
          whileHover={{ scale: 1.2 }}
        >
          {/* Dot */}
          <div
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              activeSection === index
                ? 'border-[#FAAF1E] bg-[#FAAF1E] shadow-glow-gold-soft'
                : 'border-white/30 bg-transparent hover:border-[#FAAF1E]/50'
            }`}
          />
          
          {/* Active indicator */}
          {activeSection === index && (
            <motion.div
              layoutId="activeSection"
              className="absolute inset-0 rounded-full border-2 border-[#FAAF1E]/30"
              initial={{ scale: 1 }}
              animate={{ scale: 2 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}
