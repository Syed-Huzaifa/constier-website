import { motion } from 'motion/react';

interface FloatingBlobProps {
  className?: string;
  delay?: number;
}

export default function FloatingBlob({ className = '', delay = 0 }: FloatingBlobProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay }}
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{
        background: 'radial-gradient(circle, rgba(250, 175, 30, 0.3) 0%, transparent 70%)'
      }}
    />
  );
}
