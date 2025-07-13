import { motion } from 'framer-motion'

const Partners = () => {
  const partners = [
    { name: "Siemens Healthineers", logo: "/src/assets/siemens-logo.png" },
    { name: "Philips Healthcare", logo: "/src/assets/philips-logo.png" },
    { name: "GE Healthcare", logo: "/src/assets/ge-logo.png" },
    { name: "Carl Zeiss", logo: "/src/assets/zeiss-logo.png" },
    { name: "Dräger", logo: "/src/assets/drager-logo.png" },
    { name: "Zoll Medical", logo: "/src/assets/zoll-logo.png" },
    { name: "Mindray", logo: "/src/assets/mindray-logo.png" },
    { name: "Medtronic", logo: "/src/assets/medtronic-logo.png" }
  ]

  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Global Partners
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            We collaborate with world-leading medical equipment manufacturers to bring you the best healthcare solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors duration-300 border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3 shadow-sm border border-white/30">
                  <span className="text-2xl font-bold text-white">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-medium text-white">
                  {partner.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners

