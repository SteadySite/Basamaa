import { useState } from 'react'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Stethoscope, FlaskConical, Pill, Wrench } from 'lucide-react'
import { Button } from './ui/button'

const Departments = () => {
  const [activeTab, setActiveTab] = useState(0)

  const departments = [
    {
      id: 'medical',
      title: 'Medical Equipment',
      icon: Stethoscope,
      description: 'Comprehensive range of advanced medical equipment for hospitals and clinics',
      image: '/src/assets/medical-bg1.jpg',
      features: [
        'Digital X-Ray Systems',
        'Patient Monitoring Equipment',
        'Surgical Instruments',
        'Diagnostic Equipment'
      ],
      stats: { products: '500+', brands: '25+' }
    },
    {
      id: 'pharmaceutical',
      title: 'Pharmaceuticals',
      icon: Pill,
      description: 'Exclusive distribution of pharmaceutical products from leading manufacturers',
      image: '/src/assets/medical-bg2.jpg',
      features: [
        'Prescription Medications',
        'Over-the-Counter Drugs',
        'Specialty Pharmaceuticals',
        'Medical Consumables'
      ],
      stats: { products: '1000+', brands: '15+' }
    },
    {
      id: 'laboratory',
      title: 'Laboratory Solutions',
      icon: FlaskConical,
      description: 'Complete laboratory equipment and reagents for accurate diagnostics',
      image: '/src/assets/medical-bg3.jpg',
      features: [
        'Laboratory Analyzers',
        'Diagnostic Reagents',
        'Lab Consumables',
        'Quality Control Solutions'
      ],
      stats: { products: '300+', brands: '20+' }
    },
    {
      id: 'projects',
      title: 'Turnkey Projects',
      icon: Wrench,
      description: 'Complete project implementation from planning to commissioning',
      image: '/src/assets/hospital-bg1.jpg',
      features: [
        'Project Planning',
        'Installation Services',
        'Training Programs',
        'Maintenance Support'
      ],
      stats: { projects: '100+', years: '40+' }
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Our Departments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare solutions across multiple specialties, 
            serving hospitals and healthcare providers throughout the UAE
          </p>
        </motion.div>

        {/* Department Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {departments.map((dept, index) => (
              <motion.button
                key={dept.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-full transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-white text-foreground hover:bg-orange-100 border border-orange-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <dept.icon className="h-5 w-5" />
                <span className="font-medium">{dept.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Active Department Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    {React.createElement(departments[activeTab].icon, { className: "h-8 w-8 text-primary" })}
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">
                    {departments[activeTab].title}
                  </h3>
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {departments[activeTab].description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {departments[activeTab].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex space-x-8 mb-8">
                  {Object.entries(departments[activeTab].stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-sm text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <Button className="btn-primary text-white w-fit">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Image */}
              <div className="relative h-64 lg:h-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${departments[activeTab].image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6">
                  <motion.div 
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">
                        {Object.values(departments[activeTab].stats)[0]}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {Object.keys(departments[activeTab].stats)[0]}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Departments

