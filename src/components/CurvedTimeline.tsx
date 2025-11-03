import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ReactNode } from 'react';

interface TimelineStep {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

interface CurvedTimelineProps {
  steps: TimelineStep[];
}

export default function CurvedTimeline({ steps }: CurvedTimelineProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative py-20">
      {/* Curved SVG Path */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FAAF1E" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#FFC55C" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E59A00" stopOpacity="0.6" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <motion.path
          d="M 100 400 Q 300 200, 500 400 T 900 400 Q 1000 400, 1100 300"
          fill="none"
          stroke="url(#curveGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow)"
          style={{
            pathLength,
            opacity: 0.6
          }}
        />

        {/* Animated dot traveling along the path */}
        <motion.circle
          r="6"
          fill="#FAAF1E"
          filter="url(#glow)"
          style={{
            offsetDistance: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
            offsetPath: 'path("M 100 400 Q 300 200, 500 400 T 900 400 Q 1000 400, 1100 300")'
          }}
        />
      </svg>

      {/* Timeline Steps */}
      <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              delay: index * 0.15, 
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="relative flex flex-col items-center text-center"
          >
            {/* Number Circle with Glow */}
            <motion.div
              whileHover={{ 
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.6 }
              }}
              className="relative mb-6"
            >
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-[#FAAF1E]/20 blur-xl scale-150" />
              
              {/* Main circle */}
              <div className="relative w-24 h-24 glass rounded-full flex items-center justify-center shadow-premium overflow-hidden group">
                {/* Shine effect */}
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                
                <span className="relative z-10 text-3xl gradient-text-gold">
                  {step.number}
                </span>
              </div>
            </motion.div>

            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
              className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center text-[#0B0C1D] mb-4 shadow-glow-gold-soft"
            >
              {step.icon}
            </motion.div>

            {/* Content */}
            <h3 className="text-xl text-white mb-3">{step.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              {step.description}
            </p>

            {/* Connection line for mobile */}
            {index < steps.length - 1 && (
              <div className="md:hidden w-0.5 h-12 bg-gradient-to-b from-[#FAAF1E] to-transparent mx-auto mt-8" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
