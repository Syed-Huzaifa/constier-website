import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface VideoPreviewCardProps {
  title: string;
  subtitle: string;
  image: string;
  stats: { label: string; value: string }[];
  delay?: number;
}

export default function VideoPreviewCard({
  title,
  subtitle,
  image,
  stats,
  delay = 0
}: VideoPreviewCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C1D] via-[#0B0C1D]/60 to-transparent" />

        {/* Play button overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center shadow-glow-gold"
              >
                <Play size={32} className="text-[#0B0C1D] ml-1" fill="currentColor" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: delay + 0.2 }}
          className="glass-dark rounded-2xl p-6"
        >
          <p className="text-[#FAAF1E] text-sm mb-2">{subtitle}</p>
          <h3 className="text-2xl text-white mb-4">{title}</h3>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl gradient-text-gold mb-1">{stat.value}</div>
                <div className="text-xs text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            className="flex items-center gap-2 text-[#FAAF1E]"
          >
            <span className="text-sm">View Full Transformation</span>
            <ArrowRight size={16} className={isHovered ? 'translate-x-1' : ''} />
          </motion.div>
        </motion.div>
      </div>

      {/* Border glow on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 rounded-3xl border-2 border-[#FAAF1E]/50 pointer-events-none"
      />
    </motion.div>
  );
}
