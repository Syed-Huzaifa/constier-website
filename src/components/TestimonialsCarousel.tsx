import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Ahmad Hassan',
    role: 'IT Director',
    company: 'Luxury Hotels Group',
    content: 'Constier transformed our entire network infrastructure across 5 properties. Their expertise in hospitality technology is unmatched, and the results have been outstanding.',
    image: 'https://images.unsplash.com/photo-1574966390692-5140d4310743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwd29ya3xlbnwxfHx8fDE3NjIwNDgyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5
  },
  {
    name: 'Sarah Khan',
    role: 'Operations Manager',
    company: 'PKLI Hospital',
    content: 'The team at Constier is reliable, professional, and innovative. Our digital transformation journey was seamless thanks to their expertise and dedication.',
    image: 'https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzYxOTk2MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'General Manager',
    company: 'Mövenpick Hotel Centaurus',
    content: 'Outstanding service and cutting-edge solutions. Guest satisfaction has increased significantly since implementing Constier\'s technology infrastructure.',
    image: 'https://images.unsplash.com/photo-1758714919732-a72606197238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIwNDgyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5
  },
  {
    name: 'Dr. Fatima Malik',
    role: 'Chief Technology Officer',
    company: 'Healthcare Solutions Inc.',
    content: 'Constier\'s attention to detail and understanding of healthcare technology requirements made them the perfect partner for our infrastructure upgrade.',
    image: 'https://images.unsplash.com/photo-1761881917053-a48d16611196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGJ1aWxkaW5nJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjE5NTYyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-white border border-gray-200 rounded-2xl p-12"
          >
            <Quote className="w-12 h-12 text-[#FAAF1E] mb-6" />
            
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-[#FAAF1E] text-[#FAAF1E]" />
              ))}
            </div>

            <p className="text-2xl text-[#111230] mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-lg text-[#111230]">{testimonials[currentIndex].name}</div>
                <div className="text-sm text-[#59595B]">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-[#FAAF1E]' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={previous}
            className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#FAAF1E] hover:text-[#FAAF1E] transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#FAAF1E] hover:text-[#FAAF1E] transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
