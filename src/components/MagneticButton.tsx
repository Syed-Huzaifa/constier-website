import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface MagneticButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export default function MagneticButton({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = ''
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const x = (clientX - left - width / 2) * 0.3;
    const y = (clientY - top - height / 2) * 0.3;
    
    setPosition({ x, y });
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary: 'gradient-gold text-[#0B0C1D] shadow-glow-gold-soft hover:shadow-glow-gold',
    secondary: 'glass-dark text-white border border-[#FAAF1E]/30 hover:border-[#FAAF1E]',
    ghost: 'glass text-[#FAAF1E] border border-[#FAAF1E]/20 hover:border-[#FAAF1E]/50'
  };

  const content = (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={resetPosition}
      className={`px-8 py-4 rounded-3xl transition-all duration-300 inline-flex items-center justify-center gap-3 cursor-pointer ${variantStyles[variant]} ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3"
      >
        {children}
      </motion.div>
    </motion.div>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return <div onClick={onClick}>{content}</div>;
}
