import { motion, useInView } from 'framer-motion'
import { Award, Users, Globe, Heart, Shield, Target } from 'lucide-react'

// Import images properly
import healthcareTeamImage from '../../assets/healthcare-team.jpg'
import healthcareBg from '../../assets/healthcare_bg2.jpg'
import healthcareTeam1 from '../../assets/healthcare-team-1.jpg'
import healthcareTeam2 from '../../assets/healthcare-team-2.jpg'
import medicalEquipment1 from '../../assets/medical-equipment-1.webp'
import laboratory1 from '../../assets/laboratory-1.jpg'

const AboutPage = () => {
  const finalValues = {
    years: 10,
    clients: 15,
    products: 15,
    partners: 10
  }

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We ensure all products meet the highest international standards"
    },
    {
      icon: Heart,
      title: "Patient Care",
      description: "Every solution we provide ultimately serves better patient outcomes"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously seek the latest medical technologies and solutions"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships with healthcare providers"
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
            About BASAMAA
          </motion.h1>
          <motion.p 
            className="text-xl text-orange-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            10+ years of excellence in healthcare solutions across the UAE
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Since our establishment, BASAMAA has been at the forefront of medical supply excellence in the UAE. 
                What started as a vision to bridge the gap between cutting-edge medical technology and 
                healthcare providers has evolved into a trusted partnership with 15+ hospitals and clinics.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our commitment to quality, innovation, and patient care has made us the preferred partner 
                for healthcare institutions seeking reliable medical equipment and pharmaceutical supplies.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to expand our reach while maintaining the personal touch and dedication 
                to excellence that has defined BASAMAA with 10+ years of experience.
              </p>
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
                alt="BASAMAA Healthcare Team"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at BASAMAA
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to healthcare excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: finalValues.years, label: "Years of Excellence" },
              { value: finalValues.clients, label: "Healthcare Partners" },
              { value: finalValues.products, label: "Medical Products" },
              { value: finalValues.partners, label: "Global Manufacturers" }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold text-white mb-2">{achievement.value}+</div>
                <div className="text-orange-100 text-lg">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
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
                src={medicalEquipment1} 
                alt="Modern Healthcare Facility"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the leading provider of innovative medical solutions in the UAE, 
                connecting healthcare providers with world-class medical equipment and 
                pharmaceutical supplies that enhance patient care and operational efficiency.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To transform healthcare delivery across the region by providing access to 
                the latest medical technologies, comprehensive support services, and 
                building lasting partnerships that drive healthcare excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Section: Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the diverse range of medical products we offer to meet every healthcare need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diagnostic Equipment</h3>
              <p className="text-gray-600">Advanced tools for accurate disease detection and monitoring.</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Surgical Instruments</h3>
              <p className="text-gray-600">High-precision instruments for various surgical procedures.</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient Monitoring</h3>
              <p className="text-gray-600">Reliable devices for continuous patient vital sign tracking.</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Laboratory Equipment</h3>
              <p className="text-gray-600">State-of-the-art equipment for research and clinical laboratories.</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Consumables</h3>
              <p className="text-gray-600">Essential disposable medical supplies for daily operations.</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rehabilitation Devices</h3>
              <p className="text-gray-600">Equipment to aid patient recovery and physical therapy.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage


