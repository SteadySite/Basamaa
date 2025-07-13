import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { finalValues } from "../lib/stats"

const Statistics = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      value: finalValues.years,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'Serving UAE healthcare',
      color: 'from-orange-400 to-red-500'
    },
    {
      value: finalValues.clients,
      suffix: '+',
      label: 'Healthcare Partners',
      description: 'Hospitals and clinics',
      color: 'from-orange-500 to-amber-500'
    },
    {
      value: finalValues.products,
      suffix: '+',
      label: 'Medical Products',
      description: 'Available in our catalog',
      color: 'from-amber-400 to-orange-500'
    },
    {
      value: finalValues.partners,
      suffix: '+',
      label: 'Global Manufacturers',
      description: 'Leading manufacturers',
      color: 'from-red-400 to-orange-500'
    }
  ]

  return (
    <section ref={ref} className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.0, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Achievements
          </motion.h2>
          <motion.p 
            className="text-xl text-orange-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Numbers that reflect our commitment to healthcare excellence
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div 
                  className="text-4xl lg:text-6xl font-bold text-white mb-2 stats-counter"
                >
                  <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </span>
                  <span className="text-white">{stat.suffix}</span>
                </div>
                <motion.h3 
                  className="text-lg font-semibold text-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {stat.label}
                </motion.h3>
                <motion.p 
                  className="text-orange-100 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {stat.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics



