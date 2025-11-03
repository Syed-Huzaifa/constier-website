import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface FloatingServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FloatingServiceCard({
  icon,
  title,
  description,
  delay = 0
}: FloatingServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ 
        y: -12,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative glass rounded-3xl p-8 overflow-hidden cursor-pointer"
    >
      {/* Glow effect on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-[#FAAF1E]/10 via-transparent to-transparent pointer-events-none"
      />

      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-3xl border-2 border-[#FAAF1E]/50 animate-pulse" />
      </div>

      <div className="relative z-10">
        {/* Icon with glow */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center text-[#0B0C1D] mb-6 shadow-glow-gold-soft"
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl text-white mb-3 group-hover:gradient-text-gold transition-all">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/70 mb-6 leading-relaxed">
          {description}
        </p>

        {/* CTA - revealed on hover */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-[#FAAF1E]"
        >
          <span className="text-sm">Learn more</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight size={16} />
          </motion.div>
        </motion.div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAAF1E]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
