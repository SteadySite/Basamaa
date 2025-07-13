import { motion } from 'framer-motion'
import { Truck, Wrench, GraduationCap, Phone, Clock, Shield, Users, Award } from 'lucide-react'

// Import images properly
import healthcareBg from '../../assets/healthcare_bg2.jpg'
import healthcareTeamImage from '../../assets/healthcare-team.jpg'
import medicalEquipment1 from '../../assets/medical-equipment-1.webp'
import medicalEquipment2 from '../../assets/medical-equipment-2.jpg'
import pharmaceutical1 from '../../assets/pharmaceutical-1.jpeg'
import pharmaceutical2 from '../../assets/pharmaceutical-2.jpg'

const ServicesPage = () => {
  const services = [
    {
      icon: Truck,
      title: "Equipment Supply & Delivery",
      description: "Comprehensive medical equipment sourcing and timely delivery to healthcare facilities across the UAE",
      features: ["Same-day delivery in Dubai", "Temperature-controlled transport", "Installation included"]
    },
    {
      icon: Wrench,
      title: "Installation & Maintenance",
      description: "Professional installation and ongoing maintenance services for all medical equipment",
      features: ["Certified technicians", "24/7 emergency support", "Preventive maintenance programs"]
    },
    {
      icon: GraduationCap,
      title: "Training & Education",
      description: "Comprehensive training programs for healthcare staff on equipment operation and safety",
      features: ["On-site training", "Certification programs", "Ongoing support"]
    },
    {
      icon: Phone,
      title: "Technical Support",
      description: "Round-the-clock technical support and troubleshooting for all supplied equipment",
      features: ["24/7 helpdesk", "Remote diagnostics", "Rapid response team"]
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Fast Response",
      description: "Quick turnaround times for all service requests"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All services meet international healthcare standards"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with extensive healthcare experience"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "40+ years of excellence in healthcare services"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl text-orange-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive healthcare solutions from equipment supply to ongoing support
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end healthcare solutions designed to enhance patient care and operational efficiency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Consultation</h3>
                    <p className="text-orange-100">We assess your specific healthcare needs and requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Solution Design</h3>
                    <p className="text-orange-100">Custom solution development based on your facility's needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Implementation</h3>
                    <p className="text-orange-100">Professional installation and setup of all equipment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Ongoing Support</h3>
                    <p className="text-orange-100">Continuous maintenance and support services</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={healthcareTeamImage} 
                alt="Healthcare Process"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose BASAMAA</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The advantages of partnering with the UAE's leading medical supply company
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={healthcareBg} 
                alt="Healthcare Facility"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact our team today to discuss your healthcare equipment needs and discover 
                how BASAMAA can enhance your facility's capabilities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">+971 6 559 2481</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">24/7 Support Available</span>
                </div>
              </div>
              <button className="mt-8 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200">
                Contact Us Today
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

