import { motion } from 'framer-motion'
import welcomeHeroBg from '../assets/welcome-hero-bg.jpg'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${welcomeHeroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Welcome to BASAMAA
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl mb-8 text-orange-200"
        >
          Leading Medical Supply Excellence
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Connecting Healthcare Providers with World-Class Medical Equipment. 
          BASAMAA has been the trusted partner for hospitals and healthcare 
          facilities across the UAE, providing cutting-edge medical equipment and 
          pharmaceutical supplies.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Explore Our Products
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

