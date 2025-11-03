import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, Shield, Zap, Clock, TrendingUp, Award,
  Wifi, Server, Cloud, Search, Lightbulb, Rocket, Headphones,
  Star, Quote, Send
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import ParticleGrid from '../components/ParticleGrid';
import SwitchingText from '../components/SwitchingText';
import MagneticButton from '../components/MagneticButton';
import FloatingServiceCard from '../components/FloatingServiceCard';
import ScrollProgressDots from '../components/ScrollProgressDots';
import VideoPreviewCard from '../components/VideoPreviewCard';
import CurvedTimeline from '../components/CurvedTimeline';
import AnimatedCounter from '../components/AnimatedCounter';
import IndustryCarousel from '../components/IndustryCarousel';
import ParallaxSection from '../components/ParallaxSection';

export default function HomePage() {
  const sections = ['hero', 'services', 'why-constier', 'industries', 'process', 'cases', 'testimonials', 'cta'];

  const stats = [
    { value: 50, suffix: '+', label: 'Hotels Powered' },
    { value: 15, suffix: '+', label: 'Years Experience' },
    { value: 8, suffix: '+', label: 'Countries' }
  ];

  const services = [
    {
      icon: <Wifi size={28} />,
      title: 'Smart Infrastructure',
      description: 'Enterprise Wi-Fi 6/6E and intelligent network systems that scale'
    },
    {
      icon: <Server size={28} />,
      title: 'Cloud Integration',
      description: 'Seamless cloud connectivity and hybrid infrastructure solutions'
    },
    {
      icon: <Shield size={28} />,
      title: 'Security First',
      description: 'Multi-layered protection with 24/7 monitoring and threat detection'
    }
  ];

  const pillars = [
    {
      icon: <Sparkles size={32} />,
      title: 'Innovation',
      description: 'Cutting-edge technology that stays ahead of industry trends',
      color: 'from-[#FAAF1E] to-[#FFC55C]'
    },
    {
      icon: <Zap size={32} />,
      title: 'Intelligence',
      description: 'AI-powered systems that learn and optimize automatically',
      color: 'from-[#FFC55C] to-[#FAAF1E]'
    },
    {
      icon: <Clock size={32} />,
      title: '24/7 Support',
      description: 'Round-the-clock expert assistance whenever you need it',
      color: 'from-[#FAAF1E] to-[#E59A00]'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Cost Efficiency',
      description: 'Maximize ROI with scalable solutions and predictable costs',
      color: 'from-[#E59A00] to-[#FAAF1E]'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Deep dive into your needs and goals',
      icon: <Search size={24} />
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Custom solution architecture design',
      icon: <Lightbulb size={24} />
    },
    {
      number: '03',
      title: 'Innovation',
      description: 'Cutting-edge technology implementation',
      icon: <Sparkles size={24} />
    },
    {
      number: '04',
      title: 'Deployment',
      description: 'Seamless integration and launch',
      icon: <Rocket size={24} />
    },
    {
      number: '05',
      title: 'Support',
      description: 'Continuous optimization and care',
      icon: <Headphones size={24} />
    }
  ];

  const caseStudies = [
    {
      title: 'Bacha Khan International Airport',
      subtitle: 'Aviation Infrastructure',
      image: 'https://images.unsplash.com/photo-1635073630004-97c3587ebcbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdGVybWluYWwlMjBtb2Rlcm58ZW58MXx8fHwxNzYyMDExMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: [
        { label: 'Passengers', value: '2M+' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Speed', value: '10Gbps' }
      ]
    },
    {
      title: 'Mövenpick Hotel Centaurus',
      subtitle: 'Luxury Hospitality',
      image: 'https://images.unsplash.com/photo-1758714919732-a72606197238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIwNDgyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: [
        { label: 'Rooms', value: '350+' },
        { label: 'Satisfaction', value: '98%' },
        { label: 'Coverage', value: '100%' }
      ]
    },
    {
      title: 'PKLI Hospital',
      subtitle: 'Healthcare Technology',
      image: 'https://images.unsplash.com/photo-1761881917053-a48d16611196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGJ1aWxkaW5nJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjE5NTYyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: [
        { label: 'Beds', value: '500+' },
        { label: 'Security', value: '100%' },
        { label: 'Reliability', value: '99.9%' }
      ]
    }
  ];

  const testimonials = [
    {
      quote: 'Constier transformed our entire network infrastructure across 5 properties. Their expertise in hospitality technology is unmatched, and the results have been outstanding.',
      author: 'Ahmad Hassan',
      role: 'IT Director, Luxury Hotels Group',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1574966390692-5140d4310743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwd29ya3xlbnwxfHx8fDE3NjIwNDgyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      quote: 'The team at Constier is reliable, professional, and innovative. Our digital transformation journey was seamless thanks to their expertise and dedication.',
      author: 'Sarah Khan',
      role: 'Operations Manager, PKLI Hospital',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzYxOTk2MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="relative bg-[#0B0C1D]">
      {/* Scroll Progress Dots */}
      <ScrollProgressDots sections={sections} />

      {/* HERO SECTION - CINEMATIC */}
      <section id="hero" className="relative h-screen flex items-center overflow-hidden">
        {/* Background Layer 1: Gradient Mesh */}
        <div className="absolute inset-0 mesh-gradient z-0" />
        
        {/* Background Layer 2: Grid Pattern */}
        <div className="absolute inset-0 grid-pattern-lg opacity-30 z-0" />

        {/* Background Layer 3: Floating Blobs with Parallax */}
        <ParallaxSection offset={100}>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FAAF1E]/10 rounded-full blur-3xl animate-pulse z-0" />
        </ParallaxSection>
        <ParallaxSection offset={-80}>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFC55C]/10 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '2s' }} />
        </ParallaxSection>

        {/* Particle Grid Layer - Above backgrounds, below content */}
        <div className="absolute inset-0 z-10">
          <ParticleGrid />
        </div>

        {/* Content Layer - Above everything */}
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block glass px-6 py-3 rounded-full text-[#FAAF1E] text-sm mb-8 border border-[#FAAF1E]/20"
              >
                ✨ Enterprise Hospitality Technology
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.05]">
                Transforming<br />
                <SwitchingText
                  words={['Hospitality', 'Innovation', 'Excellence', 'Future']}
                  className="gradient-text-shine"
                /><br />
                <span className="text-white/80">with Advanced</span><br />
                <span className="gradient-text-gold">Technology</span>
              </h1>

              <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl leading-relaxed">
                Next-generation IT infrastructure that powers seamless operations and exceptional guest experiences for the world's leading hospitality brands.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <MagneticButton to="/services" variant="primary">
                  <span>Explore Solutions</span>
                  <ArrowRight size={20} />
                </MagneticButton>

                <MagneticButton to="/contact" variant="secondary">
                  <span>Book Strategy Call</span>
                </MagneticButton>
              </div>

              {/* KPI Stats Strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="glass rounded-2xl p-4 md:p-6"
              >
                <div className="grid grid-cols-3 gap-3 md:gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl gradient-text-gold mb-1">
                        <AnimatedCounter
                          end={stat.value}
                          suffix={stat.suffix}
                          duration={2.5}
                        />
                      </div>
                      <div className="text-xs md:text-sm text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right: 3D Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <ParallaxSection offset={30}>
                <div className="relative pr-8">
                  {/* Main Image */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 rounded-3xl overflow-hidden shadow-cinematic"
                  >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758714919732-a72606197238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIwNDgyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Luxury Hotel"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C1D]/80 to-transparent" />
                </motion.div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, 12, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-6 left-4 glass-dark rounded-2xl p-4 shadow-glow-gold-soft"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center">
                      <Award size={20} className="text-[#0B0C1D]" />
                    </div>
                    <div>
                      <div className="text-xl text-white">99.9%</div>
                      <div className="text-sm text-white/60">Uptime</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, -2, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-8 -right-8 glass-dark rounded-2xl p-6 shadow-glow-gold-soft"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center">
                      <Cloud size={24} className="text-[#0B0C1D]" />
                    </div>
                    <div>
                      <div className="text-2xl text-white">24/7</div>
                      <div className="text-sm text-white/60">Support</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              </ParallaxSection>
            </motion.div>
          </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#FAAF1E]/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#FAAF1E]"
            />
          </div>
        </motion.div>
      </section>

      {/* SERVICES SHOWCASE - 3D GLASS CARDS */}
      <section id="services" className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C1D] via-[#1A1B2E] to-[#0B0C1D]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              Enterprise-Grade <span className="gradient-text-gold">Solutions</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Comprehensive technology infrastructure that scales with your ambitions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ParallaxSection key={index} offset={20 + (index * 10)}>
                <FloatingServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 0.2}
                />
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CONSTIER - SMART STORYTELLING */}
      <section id="why-constier" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left: Image with AI Mesh Overlay */}
            <ParallaxSection offset={40}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-cinematic">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1632141021009-a6b6021cde21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGludGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc2MjA0ODI3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Premium Industry"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 particle-bg" />
                <div className="absolute inset-0 grid-pattern opacity-20" />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 glass-dark rounded-2xl p-8 shadow-glow-gold"
              >
                <div className="text-5xl gradient-text-gold mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-white/80">Successful Projects</div>
              </motion.div>
              </motion.div>
            </ParallaxSection>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl text-white mb-8">
                Why Leading Brands<br />
                Choose <span className="gradient-text-gold">Constier</span>
              </h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                We're not just another IT provider. We're your strategic technology partner, committed to your long-term success.
              </p>
            </motion.div>
          </div>

          {/* 4 Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-8 group cursor-pointer relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-10`}
                />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center text-[#0B0C1D] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow-gold-soft">
                    {pillar.icon}
                  </div>

                  <h3 className="text-2xl text-white mb-4 group-hover:gradient-text-gold transition-all">
                    {pillar.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES - ADVANCED CAROUSEL */}
      <section id="industries" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1B2E] to-[#0B0C1D]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              Industries We <span className="gradient-text-gold">Transform</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Specialized expertise across diverse sectors
            </p>
          </motion.div>

          <IndustryCarousel />
        </div>
      </section>

      {/* HOW WE WORK - CURVED TIMELINE */}
      <section id="process" className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C1D] via-[#252640]/20 to-[#0B0C1D]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              Our Proven <span className="gradient-text-gold">Process</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              From discovery to deployment and beyond
            </p>
          </motion.div>

          <CurvedTimeline steps={processSteps} />
        </div>
      </section>

      {/* CASE STUDIES - VIDEO PREVIEW */}
      <section id="cases" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              Success <span className="gradient-text-gold">Stories</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Real transformations, measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <VideoPreviewCard
                key={index}
                title={study.title}
                subtitle={study.subtitle}
                image={study.image}
                stats={study.stats}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - LUXURY DEPTH */}
      <section id="testimonials" className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1B2E] to-[#0B0C1D]" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              Trusted by <span className="gradient-text-gold">Industry Leaders</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <ParallaxSection key={index} offset={25 + (index * 5)}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -8 }}
                  className="glass rounded-3xl p-8"
                >
                <Quote className="text-[#FAAF1E] mb-6" size={40} />

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#FAAF1E] text-[#FAAF1E]" />
                  ))}
                </div>

                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#FAAF1E]/30">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-white">{testimonial.author}</div>
                    <div className="text-sm text-white/60">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRATEGIC BANNER */}
      <section id="cta" className="relative py-32 overflow-hidden">
        {/* Spotlight Effect */}
        <div className="absolute inset-0 bg-[#0B0C1D]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FAAF1E]/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl text-white mb-8 leading-tight">
              Future-Proof Your<br />
              <span className="gradient-text-shine">Hospitality Experience</span><br />
              Today
            </h2>

            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Join 50+ leading brands that trust Constier for their technology infrastructure
            </p>

            {/* Email Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 glass rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#FAAF1E]/50"
              />
              <MagneticButton variant="primary">
                <span>Get Started</span>
                <Send size={20} />
              </MagneticButton>
            </motion.div>

            <p className="text-sm text-white/50">
              or <Link to="/contact" className="text-[#FAAF1E] hover:underline">schedule a consultation call</Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
