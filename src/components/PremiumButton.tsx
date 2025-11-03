import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface PremiumButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export default function PremiumButton({ 
  children, 
  to, 
  href, 
  onClick, 
  variant = 'primary',
  className = '' 
}: PremiumButtonProps) {
  const baseClasses = "px-8 py-4 rounded-2xl transition-all duration-300 inline-flex items-center justify-center gap-2";
  
  const variantClasses = {
    primary: "gradient-primary text-[#111230] shadow-premium hover:shadow-premium-lg hover:scale-105",
    secondary: "bg-[#111230] text-white hover:bg-[#FAAF1E] hover:text-[#111230] shadow-premium",
    ghost: "glass border-2 border-white/20 text-[#111230] hover:border-[#FAAF1E]/50 hover:shadow-glow-yellow"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
