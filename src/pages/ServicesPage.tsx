import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Wifi, Server, Shield, Cloud, Zap, Lock, 
  Settings, Smartphone, Database, Globe, HeadphonesIcon,
  CheckCircle, Sparkles, Phone
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import ParticleGrid from '../components/ParticleGrid';
import MagneticButton from '../components/MagneticButton';
import FloatingServiceCard from '../components/FloatingServiceCard';
import FAQ from '../components/FAQ';

export default function ServicesPage() {
  const services = [
    {
      icon: <Wifi size={32} />,
      title: 'Network Infrastructure',
      description: 'Enterprise Wi-Fi 6/6E, structured cabling, and intelligent network systems',
      image: 'https://images.unsplash.com/photo-1760013767150-da8e4ded6286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjA5NTgxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'High-speed Wi-Fi 6/6E deployment',
        'Structured cabling infrastructure',
        'Network design & optimization',
        'IoT device integration'
      ]
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Integration',
      description: 'Seamless cloud connectivity and hybrid infrastructure solutions',
      image: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnxlbnwxfHx8fDE3NjIwODQwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Cloud migration strategies',
        'Hybrid infrastructure setup',
        'Multi-cloud management',
        'Cloud backup & disaster recovery'
      ]
    },
    {
      icon: <Shield size={32} />,
      title: 'Cybersecurity',
      description: 'Multi-layered protection with 24/7 monitoring and threat detection',
      image: 'https://images.unsplash.com/photo-1603985529862-9e12198c9a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3NjIwNzQ2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Advanced threat detection',
        'Security audits & compliance',
        'Firewall & intrusion prevention',
        '24/7 security monitoring'
      ]
    },
    {
      icon: <Server size={32} />,
      title: 'Data Center Solutions',
      description: 'Scalable infrastructure for mission-critical operations',
      image: 'https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIwOTYzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Data center design & build',
        'Virtualization solutions',
        'Storage & backup systems',
        'Disaster recovery planning'
      ]
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Smart Building Technology',
      description: 'IoT integration and building automation systems',
      image: 'https://images.unsplash.com/photo-1758714919732-a72606197238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIwNDgyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'IoT device integration',
        'Building automation systems',
        'Energy management',
        'Smart access control'
      ]
    },
    {
      icon: <HeadphonesIcon size={32} />,
      title: 'Managed IT Support',
      description: 'Comprehensive 24/7 technical support and system maintenance',
      image: 'https://images.unsplash.com/photo-1574966390692-5140d4310743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwd29ya3xlbnwxfHx8fDE3NjIwNDgyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        '24/7 helpdesk support',
        'Proactive monitoring',
        'Regular maintenance',
        'Rapid incident response'
      ]
    }
  ];

  const quickServices = [
    { icon: <Wifi size={28} />, title: 'Network Infrastructure', description: 'Enterprise connectivity solutions' },
    { icon: <Cloud size={28} />, title: 'Cloud Integration', description: 'Seamless hybrid systems' },
    { icon: <Shield size={28} />, title: 'Cybersecurity', description: 'Advanced threat protection' }
  ];

  const benefits = [
    {
      icon: <Zap size={32} />,
      title: 'Lightning Fast',
      description: 'Experience blazing speeds with our optimized infrastructure'
    },
    {
      icon: <Lock size={32} />,
      title: 'Bank-Level Security',
      description: 'Military-grade encryption and multi-layered protection'
    },
    {
      icon: <Settings size={32} />,
      title: 'Scalable Solutions',
      description: 'Grow seamlessly without infrastructure limitations'
    },
    {
      icon: <Globe size={32} />,
      title: 'Global Standards',
      description: 'Compliance with international technology standards'
    }
  ];

  return (
    <div className="bg-[#0B0C1D] pt-20">
      {/* Hero Section - Cinematic */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 mesh-gradient z-0" />
        <div className="absolute inset-0 grid-pattern-lg opacity-30 z-0" />

        {/* Particle Grid Layer */}
        <div className="absolute inset-0 z-10">
          <ParticleGrid />
        </div>

        {/* Content Layer */}
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block glass px-6 py-3 rounded-full text-[#FAAF1E] text-sm mb-8 border border-[#FAAF1E]/20"
            >
              ✨ Enterprise Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl text-white mb-8 leading-[0.95]"
            >
              Next-Gen<br />
              <span className="gradient-text-shine">Technology</span><br />
              <span className="text-white/80">Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/70 mb-12 max-w-2xl leading-relaxed"
            >
              Comprehensive IT infrastructure and technology services designed to power the world's leading hospitality brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton to="/contact" variant="primary">
                <span>Get Started</span>
                <ArrowRight size={20} />
              </MagneticButton>
              <MagneticButton to="/projects" variant="secondary">
                <span>View Case Studies</span>
              </MagneticButton>
            </motion.div>
          </div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C1D] via-[#1A1B2E] to-[#0B0C1D]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {quickServices.map((service, index) => (
              <FloatingServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              Complete <span className="gradient-text-gold">Technology Stack</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              End-to-end solutions for every aspect of your IT infrastructure
            </p>
          </motion.div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: 0.2 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center text-[#0B0C1D] mb-6 shadow-glow-gold-soft">
                    {service.icon}
                  </div>

                  <h3 className="text-4xl md:text-5xl text-white mb-6">
                    {service.title}
                  </h3>

                  <p className="text-xl text-white/70 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle size={20} className="text-[#FAAF1E] flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <MagneticButton to="/contact" variant="ghost">
                    <span>Learn More</span>
                    <ArrowRight size={20} />
                  </MagneticButton>
                </div>

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative rounded-3xl overflow-hidden shadow-cinematic ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C1D]/80 via-[#0B0C1D]/40 to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-8 left-8 glass-dark rounded-2xl px-6 py-3">
                    <div className="flex items-center gap-2">
                      <Sparkles size={20} className="text-[#FAAF1E]" />
                      <span className="text-white">Enterprise Grade</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C1D] via-[#1A1B2E] to-[#0B0C1D]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              Why Choose <span className="gradient-text-gold">Constier</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The competitive advantages that set us apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-8 group"
              >
                <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center text-[#0B0C1D] mb-6 group-hover:scale-110 transition-transform shadow-glow-gold-soft">
                  {benefit.icon}
                </div>
                <h3 className="text-xl text-white mb-3">{benefit.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              Frequently Asked <span className="gradient-text-gold">Questions</span>
            </h2>
          </motion.div>

          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0C1D]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FAAF1E]/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl text-white mb-8 leading-tight">
              Let's Build<br />
              <span className="gradient-text-shine">Something Amazing</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Talk to our experts about your technology needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton to="/contact" variant="primary">
                <span>Schedule Consultation</span>
                <Phone size={20} />
              </MagneticButton>
              <MagneticButton to="/projects" variant="secondary">
                <span>View Our Work</span>
                <ArrowRight size={20} />
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
