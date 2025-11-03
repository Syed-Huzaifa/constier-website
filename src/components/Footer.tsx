import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import constierLogo from 'figma:asset/951b604ab22ea25f210709dd0e9b0c5f62c79312.png';

export default function Footer() {
  return (
    <footer className="bg-[#111230] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <img src={constierLogo} alt="Constier" className="h-10 w-auto mb-6 brightness-0 invert" />
            <p className="text-gray-400 mb-8 text-lg max-w-sm">
              Seamless technology solutions for smarter hospitality.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-white hover:text-[#FAAF1E] transition-colors group"
            >
              <span className="mr-2">Start a project</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm text-gray-500 mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-sm text-gray-500 mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Hotel Services Design</li>
              <li>Hospitality Technology</li>
              <li>Network Solutions</li>
              <li>Value & Delivery</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm text-gray-500 mb-6 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="mailto:info@constier.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Mail size={16} />
                  info@constier.com
                </a>
              </li>
              <li>
                <a href="tel:+923335085108" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Phone size={16} />
                  +92 333 5085108
                </a>
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <Globe size={16} />
                www.constier.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Constier. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-[#FAAF1E] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#FAAF1E] transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#FAAF1E] transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
