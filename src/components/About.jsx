import { motion } from 'framer-motion'
import { Award, Globe, Heart } from 'lucide-react'

// Import healthcare team images properly
import healthcareTeamImage from '../assets/healthcare-team.jpg'
import healthcareCollaboration from '../assets/healthcare-collaboration.jpg'

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "10+ Years",
      description: "Of healthcare excellence"
    },
    {
      icon: Globe,
      title: "UAE Wide",
      description: "Coverage and support"
    },
    {
      icon: Heart,
      title: "24/7 Support",
      description: "Always here for you"
    }
  ]

  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Healthcare Solutions
            </h2>
            <h3 className="text-2xl font-semibold text-orange-100 mb-4">
              From Equipment to Complete Project Implementation
            </h3>
            <p className="text-lg text-orange-100 mb-6 leading-relaxed">
              Our expert team provides end-to-end solutions including installation, training, and ongoing support for all medical equipment needs.
            </p>
            <p className="text-lg text-orange-100 mb-8 leading-relaxed">
              With over a decade of experience, BASAMAA has established itself as the trusted partner for healthcare providers across the UAE, delivering innovative solutions that enhance patient care and operational efficiency.
            </p>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-white mb-1">UAE Licensed</div>
                <div className="text-sm text-orange-200">Ministry of Health approved supplier</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-white mb-1">10+ Years</div>
                <div className="text-sm text-orange-200">Trusted healthcare partner</div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-orange-50 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                Learn More
              </motion.button>
              <motion.button
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={healthcareCollaboration} 
                alt="BASAMAA Healthcare Solutions Team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

