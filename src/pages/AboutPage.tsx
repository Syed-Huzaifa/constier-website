import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Lightbulb, Target, Heart, Users2, Globe2, Building, 
  TrendingUp, Award, Shield, Zap 
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import AnimatedCounter from '../components/AnimatedCounter';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ParticleGrid from '../components/ParticleGrid';
import MagneticButton from '../components/MagneticButton';
import ParallaxSection from '../components/ParallaxSection';

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical standards in every interaction'
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: 'Passion',
      description: 'Driven by enthusiasm and dedication to deliver exceptional results'
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Results',
      description: 'We measure success by the tangible value we deliver to our clients'
    }
  ];

  const milestones = [
    { year: '2008', event: 'Company Founded', description: 'Constier established with a vision to transform hospitality technology' },
    { year: '2012', event: 'Major Expansion', description: 'Expanded services to healthcare and aviation sectors' },
    { year: '2016', event: '25th Project', description: 'Completed 25th major infrastructure deployment' },
    { year: '2020', event: 'Regional Leader', description: 'Recognized as leading hospitality tech provider in the region' },
    { year: '2024', event: '50+ Projects', description: 'Celebrating 50+ successful deployments and growing' }
  ];

  const team = [
    {
      role: 'Leadership',
      icon: <Users2 className="w-8 h-8" />,
      description: 'Visionary leaders with decades of combined industry experience'
    },
    {
      role: 'Engineering',
      icon: <Building className="w-8 h-8" />,
      description: 'Certified technicians and system architects'
    },
    {
      role: 'Support',
      icon: <Globe2 className="w-8 h-8" />,
      description: '24/7 technical support team always ready to assist'
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block glass px-6 py-3 rounded-full text-[#FAAF1E] text-sm mb-8 border border-[#FAAF1E]/20"
              >
                ✨ About Constier
              </motion.div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl text-white mb-8 leading-[0.95]">
                Innovating<br />
                Hospitality<br />
                <span className="gradient-text-gold">Technology</span>
              </h1>
              
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                Since our founding, we've been dedicated to transforming the hospitality industry through innovative technology solutions.
              </p>

              <MagneticButton to="/contact" variant="primary">
                <span>Start Your Journey</span>
                <ArrowRight size={20} />
              </MagneticButton>
            </motion.div>

            <ParallaxSection offset={35}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-cinematic">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzYxOTk2MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="About Constier"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C1D]/80 to-transparent" />
              </div>

              {/* Floating stat */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 glass-dark rounded-2xl p-6 shadow-glow-gold"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center">
                    <Award size={24} className="text-[#0B0C1D]" />
                  </div>
                  <div>
                    <div className="text-2xl text-white">
                      <AnimatedCounter end={15} suffix="+" />
                    </div>
                    <div className="text-sm text-white/60">Years</div>
                  </div>
                </div>
              </motion.div>
              </motion.div>
            </ParallaxSection>
          </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1B2E] to-[#0B0C1D]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { end: 50, suffix: '+', label: 'Projects Delivered', icon: <TrendingUp size={24} /> },
              { end: 15, suffix: '+', label: 'Years Experience', icon: <Award size={24} /> },
              { end: 30, suffix: '+', label: 'Team Members', icon: <Users2 size={24} /> },
              { end: 100, suffix: '%', label: 'Client Satisfaction', icon: <Shield size={24} /> }
            ].map((stat, index) => (
              <ParallaxSection key={index} offset={20 + (index * 8)}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass rounded-3xl p-8 text-center group"
                >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl gradient-gold flex items-center justify-center text-[#0B0C1D] group-hover:scale-110 transition-transform shadow-glow-gold-soft">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl gradient-text-gold mb-2">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl text-white mb-8">
                Our <span className="gradient-text-gold">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                <p>
                  Founded on the belief that technology should enhance—not complicate—hospitality operations, Constier has emerged as a trusted partner for businesses seeking to modernize their IT infrastructure.
                </p>
                <p>
                  From our first project to our latest innovations, we've maintained an unwavering commitment to excellence, integrity, and client success. Our journey has been defined by the transformative impact we've had on hotels, airports, hospitals, and hospitality venues across the region.
                </p>
                <p>
                  Today, we stand at the forefront of hospitality technology, combining deep industry expertise with cutting-edge solutions to help our clients thrive in an increasingly digital world.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl text-white mb-8">Company Milestones</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0 w-20">
                      <div className="text-2xl gradient-text-gold">{milestone.year}</div>
                    </div>
                    <div className="flex-grow border-l-2 border-white/10 group-hover:border-[#FAAF1E] transition-colors pl-6 pb-6">
                      <h4 className="text-lg text-white mb-2">{milestone.event}</h4>
                      <p className="text-white/60">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C1D] via-[#1A1B2E] to-[#0B0C1D]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-3xl p-12 min-h-[400px] flex flex-col justify-between overflow-hidden group"
            >
              <div className="absolute inset-0 gradient-gold opacity-90" />
              <div className="absolute inset-0 bg-[#FAAF1E]/20 backdrop-blur-sm" />
              
              <div className="relative z-10">
                <Target className="w-12 h-12 text-[#0B0C1D] mb-6" />
                <div className="text-sm text-[#0B0C1D]/80 mb-4 tracking-wider">OUR MISSION</div>
                <h3 className="text-3xl md:text-4xl text-[#0B0C1D] mb-6 leading-tight">
                  Transform hospitality through innovation
                </h3>
                <p className="text-lg text-[#0B0C1D]/80">
                  To deliver technology solutions that simplify operations, enhance guest experiences, and drive sustainable growth for our clients.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-3xl p-12 min-h-[400px] flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FAAF1E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <Lightbulb className="w-12 h-12 text-[#FAAF1E] mb-6" />
                <div className="text-sm text-[#FAAF1E] mb-4 tracking-wider">OUR VISION</div>
                <h3 className="text-3xl md:text-4xl text-white mb-6 leading-tight">
                  The world's most trusted technology partner
                </h3>
                <p className="text-lg text-white/70">
                  To be recognized globally for our innovation, reliability, and unwavering commitment to client success in hospitality technology.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              Our Core <span className="gradient-text-gold">Values</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-8 group relative overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#FAAF1E]/10 to-transparent"
                />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center text-[#0B0C1D] mb-6 shadow-glow-gold-soft group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl text-white mb-4 group-hover:gradient-text-gold transition-all">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1B2E] to-[#0B0C1D]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl text-white mb-8 leading-tight">
                Meet Our <span className="gradient-text-gold">Team</span>
              </h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                A diverse group of passionate professionals united by a common goal: delivering excellence in hospitality technology.
              </p>
              
              <div className="space-y-6">
                {team.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 items-start glass rounded-2xl p-6 hover:border-[#FAAF1E]/30 transition-colors"
                  >
                    <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center text-[#0B0C1D] flex-shrink-0 shadow-glow-gold-soft">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl text-white mb-2">{item.role}</h3>
                      <p className="text-white/60">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-cinematic">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1574966390692-5140d4310743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwd29ya3xlbnwxfHx8fDE3NjIwNDgyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C1D] via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              Global <span className="gradient-text-gold">Presence</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Serving clients across continents with localized expertise and global standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                location: 'Pakistan',
                description: 'Headquarters in Islamabad with nationwide project delivery',
                projects: 35
              },
              {
                location: 'Middle East',
                description: 'Strategic partnerships across the Gulf region',
                projects: 10
              },
              {
                location: 'South Asia',
                description: 'Expanding footprint in emerging hospitality markets',
                projects: 5
              }
            ].map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-8"
              >
                <div className="text-5xl gradient-text-gold mb-4">
                  <AnimatedCounter end={region.projects} suffix="+" />
                </div>
                <h3 className="text-2xl text-white mb-4">{region.location}</h3>
                <p className="text-white/70">{region.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C1D] via-[#1A1B2E] to-[#0B0C1D]" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              Client <span className="gradient-text-gold">Testimonials</span>
            </h2>
          </motion.div>

          <TestimonialsCarousel />
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
              Ready to Work<br />
              with <span className="gradient-text-shine">Constier?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can help transform your hospitality technology
            </p>
            
            <MagneticButton to="/contact" variant="primary">
              <span>Get In Touch</span>
              <ArrowRight size={20} />
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
