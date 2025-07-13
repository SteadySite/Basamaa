import { motion } from 'framer-motion'
import { Stethoscope, Shield, Users, Award } from 'lucide-react'

const Services = () => {
  const services = [
    {
      id: 'medical-supply',
      icon: Stethoscope,
      title: 'Medical Equipment Supply',
      description: 'Comprehensive range of advanced medical equipment for hospitals and clinics',
      features: [
        'Digital X-Ray Systems',
        'Patient Monitoring Equipment',
        'Surgical Instruments',
        'Diagnostic Equipment'
      ]
    },
    {
      id: 'quality-assurance',
      icon: Shield,
      title: 'Quality Assurance',
      description: 'All products meet international standards and UAE Ministry of Health requirements',
      features: [
        'UAE Licensed Supplier',
        'International Standards',
        'Quality Certification',
        'Compliance Guarantee'
      ]
    },
    {
      id: 'customer-support',
      icon: Users,
      title: 'Customer Support',
      description: 'Dedicated support team providing installation, training, and ongoing assistance',
      features: [
        'Installation Services',
        'Technical Training',
        'Maintenance Support',
        '24/7 Customer Care'
      ]
    },
    {
      id: 'trusted-partner',
      icon: Award,
      title: 'Trusted Partnership',
      description: '15+ years of excellence serving healthcare providers across the UAE',
      features: [
        '15+ Years Experience',
        '9+ Healthcare Partners',
        'Proven Track Record',
        'Reliable Service'
      ]
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-foreground mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Professional medical equipment solutions and comprehensive support services for healthcare providers
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

