import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, Clock, MessageSquare, 
  CheckCircle, ArrowRight, Sparkles
} from 'lucide-react';
import ParticleGrid from '../components/ParticleGrid';
import MagneticButton from '../components/MagneticButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: ['+92 (51) 123-4567', '+92 (300) 123-4567'],
      action: 'Call Us'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: ['info@constier.com', 'support@constier.com'],
      action: 'Email Us'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Office',
      details: ['Blue Area, Islamabad', 'Pakistan'],
      action: 'Get Directions'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      action: 'Schedule Call'
    }
  ];

  const services = [
    'Network Infrastructure',
    'Cloud Integration',
    'Cybersecurity',
    'Data Center Solutions',
    'Smart Building Technology',
    'Managed IT Support',
    'Consultation',
    'Other'
  ];

  const reasons = [
    {
      icon: <MessageSquare size={32} />,
      title: 'Quick Response',
      description: 'We respond to all inquiries within 24 hours'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Expert Consultation',
      description: 'Free initial consultation with our specialists'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Custom Solutions',
      description: 'Tailored technology solutions for your needs'
    }
  ];

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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block glass px-6 py-3 rounded-full text-[#FAAF1E] text-sm mb-8 border border-[#FAAF1E]/20"
            >
              ✨ Get In Touch
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl text-white mb-8 leading-[0.95]"
            >
              Let's Build<br />
              <span className="gradient-text-shine">Something Great</span><br />
              <span className="text-white/80">Together</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
            >
              Whether you have a question, need a quote, or want to discuss your project, we're here to help.
            </motion.p>
          </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl text-white mb-4">
                Send us a <span className="gradient-text-gold">message</span>
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 glass rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#FAAF1E]/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-white/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 glass rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#FAAF1E]/50 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm text-white/80 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 glass rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#FAAF1E]/50 transition-all"
                      placeholder="+92 300 1234567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm text-white/80 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 glass rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#FAAF1E]/50 transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm text-white/80 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-6 py-4 glass rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-[#FAAF1E]/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#1A1B2E]">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-[#1A1B2E]">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-white/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 glass rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#FAAF1E]/50 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-dark rounded-2xl p-6 flex items-center gap-4 border-2 border-[#FAAF1E]/50"
                  >
                    <CheckCircle size={24} className="text-[#FAAF1E]" />
                    <div>
                      <div className="text-white mb-1">Message Sent Successfully!</div>
                      <div className="text-sm text-white/60">We'll get back to you within 24 hours.</div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-5 gradient-gold rounded-3xl text-[#0B0C1D] flex items-center justify-center gap-3 shadow-glow-gold-soft hover:shadow-glow-gold transition-all"
                  >
                    <span className="text-lg">Send Message</span>
                    <Send size={20} />
                  </motion.button>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl text-white mb-8">
                Contact <span className="gradient-text-gold">Information</span>
              </h2>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass rounded-3xl p-6 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center text-[#0B0C1D] flex-shrink-0 group-hover:scale-110 transition-transform shadow-glow-gold-soft">
                      {info.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-white/70">
                          {detail}
                        </p>
                      ))}
                      <div className="mt-4 text-[#FAAF1E] text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                        <span>{info.action}</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C1D] via-[#1A1B2E] to-[#0B0C1D]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              Why <span className="gradient-text-gold">Contact Us?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gradient-gold flex items-center justify-center text-[#0B0C1D] shadow-glow-gold-soft">
                  {reason.icon}
                </div>
                <h3 className="text-2xl text-white mb-4">{reason.title}</h3>
                <p className="text-white/70 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-6">
              Visit Our <span className="gradient-text-gold">Office</span>
            </h2>
            <p className="text-xl text-white/60">
              Located in the heart of Islamabad
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden shadow-cinematic"
          >
            {/* Placeholder for map - replace with actual map implementation */}
            <div className="aspect-video bg-gradient-to-br from-[#1A1B2E] to-[#0B0C1D] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="relative z-10 text-center">
                <MapPin size={48} className="text-[#FAAF1E] mx-auto mb-4" />
                <h3 className="text-2xl text-white mb-2">Blue Area, Islamabad</h3>
                <p className="text-white/60 mb-6">Pakistan's Capital Territory</p>
                <MagneticButton variant="ghost">
                  <span>Open in Maps</span>
                  <ArrowRight size={20} />
                </MagneticButton>
              </div>
            </div>
          </motion.div>
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
              Ready to Transform<br />
              Your <span className="gradient-text-shine">Technology?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Schedule a free consultation with our technology experts today
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton variant="primary">
                <Phone size={20} />
                <span>Schedule Call</span>
              </MagneticButton>
              <MagneticButton to="/services" variant="secondary">
                <span>View Services</span>
                <ArrowRight size={20} />
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
