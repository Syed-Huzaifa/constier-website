import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Search, Lightbulb, Rocket, Headphones } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your needs and goals',
    icon: <Search className="w-6 h-6" />
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Designing the perfect solution',
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    number: '03',
    title: 'Innovation',
    description: 'Implementing cutting-edge technology',
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    number: '04',
    title: 'Deployment',
    description: 'Seamless integration and launch',
    icon: <Rocket className="w-6 h-6" />
  },
  {
    number: '05',
    title: 'Support',
    description: 'Continuous optimization',
    icon: <Headphones className="w-6 h-6" />
  }
];

export default function ProcessFlow() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative py-12">
      {/* SVG Path */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <motion.path
          d="M 100 50 Q 200 50 300 150 T 500 150 Q 600 150 700 250 T 900 250 Q 1000 250 1100 150"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeDasharray="10 10"
          style={{
            pathLength,
            opacity: 0.3
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FAAF1E" />
            <stop offset="100%" stopColor="#FF8E3C" />
          </linearGradient>
        </defs>
      </svg>

      {/* Steps */}
      <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="relative"
          >
            {/* Number Circle */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 mx-auto mb-6 glass rounded-full flex items-center justify-center shadow-premium relative overflow-hidden group"
            >
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 text-2xl text-[#111230] group-hover:text-white transition-colors">
                {step.number}
              </span>
            </motion.div>

            {/* Content */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-[#FAAF1E]">
                {step.icon}
              </div>
              <h3 className="text-xl text-[#111230] mb-2">{step.title}</h3>
              <p className="text-sm text-[#59595B]">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
