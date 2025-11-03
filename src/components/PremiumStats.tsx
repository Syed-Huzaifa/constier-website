import { motion } from 'motion/react';
import AnimatedCounter from './AnimatedCounter';

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

interface PremiumStatsProps {
  stats: Stat[];
  variant?: 'glass' | 'gradient' | 'neu';
}

export default function PremiumStats({ stats, variant = 'glass' }: PremiumStatsProps) {
  const getCardClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'gradient-primary';
      case 'neu':
        return 'neu-light';
      default:
        return 'glass';
    }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ y: -8, scale: 1.05 }}
          className={`${getCardClasses()} rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-premium-lg`}
        >
          <div className="text-5xl md:text-6xl mb-3">
            <span className={variant === 'gradient' ? 'text-[#111230]' : 'gradient-text'}>
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                decimals={stat.decimals || 0}
              />
            </span>
          </div>
          <div className={`text-sm ${variant === 'gradient' ? 'text-[#111230]/80' : 'text-[#59595B]'}`}>
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
