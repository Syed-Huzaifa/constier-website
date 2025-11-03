import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  ArrowRight, MapPin, Calendar, TrendingUp, Award, 
  Building, Hotel, Plane, HeartPulse, Filter
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import ParticleGrid from '../components/ParticleGrid';
import MagneticButton from '../components/MagneticButton';
import VideoPreviewCard from '../components/VideoPreviewCard';
import AnimatedCounter from '../components/AnimatedCounter';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects', icon: <Building size={18} /> },
    { id: 'hospitality', label: 'Hospitality', icon: <Hotel size={18} /> },
    { id: 'aviation', label: 'Aviation', icon: <Plane size={18} /> },
    { id: 'healthcare', label: 'Healthcare', icon: <HeartPulse size={18} /> }
  ];

  const projects = [
    {
      title: 'Bacha Khan International Airport',
      subtitle: 'Aviation Infrastructure Transformation',
      category: 'aviation',
      location: 'Peshawar, Pakistan',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1635073630004-97c3587ebcbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdGVybWluYWwlMjBtb2Rlcm58ZW58MXx8fHwxNzYyMDExMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: [
        { label: 'Passengers', value: '2M+' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Speed', value: '10Gbps' }
      ],
      description: 'Complete network infrastructure overhaul for one of Pakistan\'s busiest airports, including Wi-Fi 6 deployment across all terminals.',
      services: ['Network Infrastructure', 'Wi-Fi 6', 'Security Systems'],
      results: [
        { metric: 'Network Speed', improvement: '300%' },
        { metric: 'Coverage', improvement: '100%' },
        { metric: 'Reliability', improvement: '99.9%' }
      ]
    },
    {
      title: 'Mövenpick Hotel Centaurus',
      subtitle: 'Luxury Hospitality Technology',
      category: 'hospitality',
      location: 'Islamabad, Pakistan',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1758714919732-a72606197238?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIwNDgyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: [
        { label: 'Rooms', value: '350+' },
        { label: 'Satisfaction', value: '98%' },
        { label: 'Coverage', value: '100%' }
      ],
      description: 'Enterprise-grade networking and smart building integration for a flagship luxury hotel property.',
      services: ['Smart Building Tech', 'Guest Wi-Fi', 'IoT Integration'],
      results: [
        { metric: 'Guest Satisfaction', improvement: '45%' },
        { metric: 'Operational Efficiency', improvement: '60%' },
        { metric: 'Energy Savings', improvement: '35%' }
      ]
    },
    {
      title: 'PKLI Hospital',
      subtitle: 'Healthcare Technology Infrastructure',
      category: 'healthcare',
      location: 'Lahore, Pakistan',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1719934398679-d764c1410770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MjA5MzYzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      stats: [
        { label: 'Beds', value: '500+' },
        { label: 'Security', value: '100%' },
        { label: 'Reliability', value: '99.9%' }
      ],
      description: 'Mission-critical IT infrastructure for a major healthcare facility with zero-downtime requirements.',
      services: ['Network Security', 'Data Center', '24/7 Support'],
      results: [
        { metric: 'System Uptime', improvement: '99.9%' },
        { metric: 'Security Incidents', improvement: '-100%' },
        { metric: 'Response Time', improvement: '70%' }
      ]
    },
    {
      title: 'Pearl Continental Hotels',
      subtitle: 'Multi-Property Network Integration',
      category: 'hospitality',
      location: 'Multiple Locations',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1761069449669-1b17dc39831b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjIwMTAyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: [
        { label: 'Properties', value: '5' },
        { label: 'Rooms', value: '1200+' },
        { label: 'Investment ROI', value: '250%' }
      ],
      description: 'Unified network infrastructure across five luxury hotel properties with centralized management.',
      services: ['Cloud Integration', 'Centralized Management', 'Guest Services'],
      results: [
        { metric: 'Management Efficiency', improvement: '85%' },
        { metric: 'Guest Connectivity', improvement: '100%' },
        { metric: 'Cost Reduction', improvement: '40%' }
      ]
    },
    {
      title: 'Serena Hotels Group',
      subtitle: 'Enterprise Technology Transformation',
      category: 'hospitality',
      location: 'Pakistan & International',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1683148669219-f279673db7ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjIwODQ0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: [
        { label: 'Hotels', value: '8+' },
        { label: 'Countries', value: '3' },
        { label: 'Network Points', value: '5000+' }
      ],
      description: 'Comprehensive digital transformation across multiple international properties with advanced analytics.',
      services: ['Digital Transformation', 'Analytics', 'Multi-Site Management'],
      results: [
        { metric: 'Digital Services', improvement: '200%' },
        { metric: 'Data Analytics', improvement: '150%' },
        { metric: 'Guest Experience', improvement: '65%' }
      ]
    },
    {
      title: 'Islamabad International Airport',
      subtitle: 'Smart Airport Infrastructure',
      category: 'aviation',
      location: 'Islamabad, Pakistan',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1635073630004-97c3587ebcbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdGVybWluYWwlMjBtb2Rlcm58ZW58MXx8fHwxNzYyMDExMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      stats: [
        { label: 'Terminals', value: '2' },
        { label: 'Annual Traffic', value: '5M+' },
        { label: 'Network Nodes', value: '3000+' }
      ],
      description: 'State-of-the-art networking and IoT systems for Pakistan\'s premier international gateway.',
      services: ['IoT Systems', 'Advanced Wi-Fi', 'Smart Operations'],
      results: [
        { metric: 'Passenger Experience', improvement: '80%' },
        { metric: 'Operational Efficiency', improvement: '55%' },
        { metric: 'Energy Efficiency', improvement: '45%' }
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-[#0B0C1D] pt-20">
      {/* Hero Section */}
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
              ✨ Our Portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl text-white mb-8 leading-[0.95]"
            >
              Transforming<br />
              <span className="gradient-text-shine">Industries</span><br />
              <span className="text-white/80">One Project at a Time</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/70 mb-12 max-w-2xl leading-relaxed"
            >
              Explore our portfolio of successful deployments across hospitality, aviation, and healthcare sectors.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass rounded-2xl p-6"
            >
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: 50, suffix: '+', label: 'Projects' },
                  { value: 8, suffix: '+', label: 'Countries' },
                  { value: 100, suffix: '%', label: 'Success Rate' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl gradient-text-gold mb-2">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-2xl flex items-center gap-2 transition-all ${
                  activeFilter === filter.id
                    ? 'gradient-gold text-[#0B0C1D] shadow-glow-gold-soft'
                    : 'glass text-white hover:border-[#FAAF1E]/50'
                }`}
              >
                {filter.icon}
                <span>{filter.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <VideoPreviewCard
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                image={project.image}
                stats={project.stats}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Study Section */}
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
              Featured <span className="gradient-text-gold">Case Studies</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Deep dives into our most impactful projects
            </p>
          </motion.div>

          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.2 }}
              className={`mb-32 ${index === projects.length - 1 ? 'mb-0' : ''}`}
            >
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative rounded-3xl overflow-hidden shadow-cinematic ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C1D]/90 via-[#0B0C1D]/50 to-transparent" />
                  
                  {/* Floating Stats */}
                  <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="glass-dark rounded-xl p-4 text-center">
                        <div className="text-2xl gradient-text-gold mb-1">{stat.value}</div>
                        <div className="text-xs text-white/60">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="glass px-4 py-2 rounded-full text-[#FAAF1E] text-sm">
                      {project.category}
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <Calendar size={16} />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <h3 className="text-4xl md:text-5xl text-white mb-4">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 text-white/60 mb-6">
                    <MapPin size={18} />
                    <span>{project.location}</span>
                  </div>

                  <p className="text-lg text-white/70 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Services */}
                  <div className="mb-8">
                    <h4 className="text-sm text-[#FAAF1E] mb-4 tracking-wider">SERVICES PROVIDED</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, idx) => (
                        <div key={idx} className="glass px-4 py-2 rounded-full text-white text-sm">
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-4 mb-8">
                    <h4 className="text-sm text-[#FAAF1E] mb-4 tracking-wider">KEY RESULTS</h4>
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex justify-between items-center glass rounded-xl p-4">
                        <span className="text-white">{result.metric}</span>
                        <span className="gradient-text-gold text-xl">{result.improvement}</span>
                      </div>
                    ))}
                  </div>

                  <MagneticButton to="/contact" variant="ghost">
                    <span>Discuss Your Project</span>
                    <ArrowRight size={20} />
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              Our <span className="gradient-text-gold">Impact</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Measurable results across all projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <TrendingUp size={32} />, value: 99.9, suffix: '%', label: 'Average Uptime' },
              { icon: <Award size={32} />, value: 45, suffix: '%', label: 'Efficiency Gain' },
              { icon: <Building size={32} />, value: 50, suffix: '+', label: 'Active Sites' },
              { icon: <Hotel size={32} />, value: 100, suffix: '%', label: 'Client Retention' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-8 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl gradient-gold flex items-center justify-center text-[#0B0C1D] shadow-glow-gold-soft">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl gradient-text-gold mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
              Let's Create Your<br />
              <span className="gradient-text-shine">Success Story</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Join 50+ leading organizations that trust Constier for their technology needs
            </p>
            
            <MagneticButton to="/contact" variant="primary">
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
