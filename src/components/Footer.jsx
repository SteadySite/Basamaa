import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import basamaaLogo from '../assets/basamaa-logo.png'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Jobs', href: '/jobs' },
    { name: 'Contact Us', href: '/contact' }
  ]

  const departments = [
    { name: 'Medical Equipment', href: '/products?category=medical' },
    { name: 'Pharmaceuticals', href: '/products?category=pharmaceutical' },
    { name: 'Laboratory Solutions', href: '/products?category=laboratory' },
    { name: 'Cardiac Care', href: '/products?category=cardiac' },
    { name: 'Turnkey Projects', href: '/services?type=projects' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src={basamaaLogo} 
                alt="BASAMAA Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-gradient">BASAMAA</h1>
                <p className="text-xs text-gray-400">Medical Supply Excellence</p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              BASAMAA is a leading medical supply company in the UAE, connecting 
              healthcare providers with world-class medical equipment and pharmaceutical supplies.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Departments</h3>
            <ul className="space-y-3">
              {departments.map((dept, index) => (
                <li key={index}>
                  <Link 
                    to={dept.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>312 Al Wahda Street, Office # 101</p>
                  <p>P.O. Box 4483</p>
                  <p>Sharjah, UAE</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-gray-300">
                  <p>+971 6 559 2481</p>
                  <p>Toll Free: 800 2122</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-gray-300">
                  <p>sales@basamaa.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 BASAMAA Medical Supply. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/compliance" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
                Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

