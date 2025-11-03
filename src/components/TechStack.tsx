import { motion } from 'motion/react';
import { Wifi, Server, Shield, Cloud, Radio, Lock, Smartphone, Database } from 'lucide-react';

const technologies = [
  { icon: <Wifi className="w-8 h-8" />, name: 'Wi-Fi 6/6E', category: 'Wireless' },
  { icon: <Server className="w-8 h-8" />, name: 'Cisco Systems', category: 'Networking' },
  { icon: <Shield className="w-8 h-8" />, name: 'Fortinet', category: 'Security' },
  { icon: <Cloud className="w-8 h-8" />, name: 'Cloud Infrastructure', category: 'Cloud' },
  { icon: <Radio className="w-8 h-8" />, name: 'VOIP Solutions', category: 'Communication' },
  { icon: <Lock className="w-8 h-8" />, name: 'Access Control', category: 'Security' },
  { icon: <Smartphone className="w-8 h-8" />, name: 'Mobile Integration', category: 'IoT' },
  { icon: <Database className="w-8 h-8" />, name: 'Data Centers', category: 'Infrastructure' },
];

export default function TechStack() {
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-[#FAAF1E] transition-colors cursor-pointer"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-xl text-[#111230] mb-4 group-hover:bg-[#FAAF1E] transition-colors">
            {tech.icon}
          </div>
          <h4 className="text-sm text-[#111230] mb-1">{tech.name}</h4>
          <p className="text-xs text-[#59595B]">{tech.category}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
