import { motion } from 'motion/react';

interface AnimatedBlobProps {
  size?: number;
  color?: string;
  delay?: number;
  duration?: number;
}

export default function AnimatedBlob({ 
  size = 300, 
  color = 'rgba(250, 175, 30, 0.2)', 
  delay = 0,
  duration = 20 
}: AnimatedBlobProps) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`
      }}
      animate={{
        x: [0, 100, -100, 0],
        y: [0, -100, 100, 0],
        scale: [1, 1.2, 0.8, 1],
        rotate: [0, 90, 180, 270, 360]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    />
  );
}
