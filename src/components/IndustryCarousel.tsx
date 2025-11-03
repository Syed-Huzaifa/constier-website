import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const industries = [
  {
    name: 'Luxury Hotels',
    image: 'https://images.unsplash.com/photo-1632141021009-a6b6021cde21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGludGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc2MjA0ODI3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: '5-star hospitality infrastructure',
    projects: '25+'
  },
  {
    name: 'Aviation',
    image: 'https://images.unsplash.com/photo-1635073630004-97c3587ebcbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdGVybWluYWwlMjBtb2Rlcm58ZW58MXx8fHwxNzYyMDExMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Airport IT systems',
    projects: '5+'
  },
  {
    name: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1761881917053-a48d16611196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGJ1aWxkaW5nJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjE5NTYyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Hospital technology solutions',
    projects: '10+'
  },
  {
    name: 'Corporate',
    image: 'https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzYxOTk2MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Enterprise IT infrastructure',
    projects: '15+'
  }
];

export default function IndustryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % industries.length);
  const previous = () => setActiveIndex((prev) => (prev - 1 + industries.length) % industries.length);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative aspect-[16/9] rounded-3xl overflow-hidden"
          >
            <ImageWithFallback
              src={industries[activeIndex].image}
              alt={industries[activeIndex].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111230]/90 via-[#111230]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="glass-dark rounded-2xl p-8"
              >
                <div className="text-sm text-[#FAAF1E] mb-2">Industry Expertise</div>
                <h3 className="text-4xl text-white mb-3">{industries[activeIndex].name}</h3>
                <p className="text-gray-300 mb-4">{industries[activeIndex].description}</p>
                <div className="text-white">
                  <span className="text-3xl gradient-text">{industries[activeIndex].projects}</span>
                  <span className="text-gray-400 ml-2">projects completed</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={previous}
          className="w-14 h-14 glass rounded-full flex items-center justify-center hover:shadow-glow-yellow transition-all"
        >
          <ChevronLeft size={24} className="text-[#111230]" />
        </motion.button>

        <div className="flex gap-2">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? 'w-12 bg-[#FAAF1E]' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={next}
          className="w-14 h-14 glass rounded-full flex items-center justify-center hover:shadow-glow-yellow transition-all"
        >
          <ChevronRight size={24} className="text-[#111230]" />
        </motion.button>
      </div>
    </div>
  );
}
