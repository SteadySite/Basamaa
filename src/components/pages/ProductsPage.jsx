import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, ExternalLink, ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

// Import images properly
import xraySystemImage from '../../assets/xray-system.jpg'
import patientMonitorImage from '../../assets/patient-monitor.jpg'
import surgicalMicroscopeImage from '../../assets/surgical-microscope.jpg'
import ultrasoundSystemImage from '../../assets/ultrasound-system.png'
import ventilatorImage from '../../assets/ventilator.png'
import defibrillatorImage from '../../assets/defibrillator.jpg'
import medicalEquipment1 from '../../assets/medical-equipment-1.webp'
import medicalEquipment2 from '../../assets/medical-equipment-2.jpg'
import laboratory1 from '../../assets/laboratory-1.jpg'
import laboratory2 from '../../assets/laboratory-2.jpg'

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'diagnostic', name: 'Diagnostic Testing' },
    { id: 'biotechnology', name: 'Biotechnology' },
    { id: 'laboratory', name: 'Laboratory Equipment' },
    { id: 'medical_devices', name: 'Medical Devices' },
    { id: 'hemostatic', name: 'Hemostatic Products' }
  ]

  const products = [
    // ScheBo Biotech AG - Germany
    {
      id: 1,
      name: "Helicobacter pylori Diagnostic Tools",
      manufacturer: "ScheBo Biotech AG",
      country: "Germany",
      image: laboratory1,
      description: "Advanced diagnostic solutions for gastroenterology and oncology, specializing in Helicobacter pylori detection",
      category: "diagnostic",
      price: "Contact for Quote",
      website: "https://www.schebo.de/en",
      keyProducts: ["Gastroenterology diagnostic kits", "SARS-CoV-2 diagnostic products", "Veterinary diagnostic solutions"]
    },
    {
      id: 2,
      name: "SARS-CoV-2 Diagnostic Products",
      manufacturer: "ScheBo Biotech AG",
      country: "Germany", 
      image: medicalEquipment1,
      description: "Innovative biotechnology solutions for COVID-19 testing and viral diagnostics",
      category: "diagnostic",
      price: "Contact for Quote",
      website: "https://www.schebo.de/en",
      keyProducts: ["COVID-19 rapid tests", "Viral diagnostic kits", "Laboratory testing solutions"]
    },

    // Amamed EU - Russia
    {
      id: 3,
      name: "AMA RUT Expert - Rapid Urease Test",
      manufacturer: "Amamed EU",
      country: "Russia",
      image: laboratory2,
      description: "Leading developer of Helicobacter pylori diagnostic tools and rapid urease tests with digital reading capabilities",
      category: "diagnostic",
      price: "Contact for Quote",
      website: "https://www.amamed.ru",
      keyProducts: ["AMA RUT Expert", "AMA RUT PRO", "HELIC Ammonia breath test devices"]
    },
    {
      id: 4,
      name: "HELIC Ammonia Breath Test Devices",
      manufacturer: "Amamed EU",
      country: "Russia",
      image: patientMonitorImage,
      description: "Point-of-care diagnostic tests for Helicobacter pylori detection systems",
      category: "diagnostic",
      price: "Contact for Quote",
      website: "https://www.amamed.ru",
      keyProducts: ["Helicobacter pylori detection systems", "Breath test analyzers", "Rapid diagnostic tools"]
    },

    // SD Biosensor - Korea
    {
      id: 5,
      name: "STANDARD Q COVID-19 Rapid Tests",
      manufacturer: "SD Biosensor",
      country: "Korea",
      image: xraySystemImage,
      description: "Global leader in diagnostic reagents and platforms for screening, diagnosis, and monitoring",
      category: "diagnostic",
      price: "Contact for Quote",
      website: "https://www.sdbiosensor.com",
      keyProducts: ["STANDARD Q COVID-19 rapid tests", "SD CodeFree glucose monitoring system", "F200 fluorescence immunoassay device"]
    },
    {
      id: 6,
      name: "SD CodeFree Glucose Monitoring System",
      manufacturer: "SD Biosensor",
      country: "Korea",
      image: medicalEquipment2,
      description: "Advanced glucose monitoring and diabetes management solutions",
      category: "medical_devices",
      price: "Contact for Quote",
      website: "https://www.sdbiosensor.com",
      keyProducts: ["Glucose monitoring systems", "Diabetes management tools", "Blood glucose test strips"]
    },

    // Mascia Brunelli - Italy
    {
      id: 7,
      name: "Cutanplast Hemostatic Products",
      manufacturer: "Mascia Brunelli S.p.A",
      country: "Italy",
      image: surgicalMicroscopeImage,
      description: "Manufacturer of hemostatic devices for surgery and distributor of medical devices for tissue culture",
      category: "hemostatic",
      price: "Contact for Quote",
      website: "https://www.masciabrunelli.it",
      keyProducts: ["Cutanplast hemostatic products", "Oxidized regenerated cellulose products", "Immunohaematology diagnostic products"]
    },
    {
      id: 8,
      name: "Immunohaematology Diagnostic Products",
      manufacturer: "Mascia Brunelli S.p.A",
      country: "Italy",
      image: ultrasoundSystemImage,
      description: "Advanced medical devices for tissue culture and surgical applications",
      category: "laboratory",
      price: "Contact for Quote",
      website: "https://www.masciabrunelli.it",
      keyProducts: ["Tissue culture devices", "Surgical hemostatic solutions", "Laboratory diagnostic equipment"]
    },

    // Biotime
    {
      id: 9,
      name: "Point-of-Care Testing Solutions",
      manufacturer: "Biotime",
      country: "China",
      image: ventilatorImage,
      description: "Innovative biotechnology company specializing in rapid diagnostic testing and point-of-care solutions",
      category: "diagnostic",
      price: "Contact for Quote",
      website: "https://www.biotime.cn",
      keyProducts: ["Rapid diagnostic tests", "Point-of-care analyzers", "Immunoassay systems"]
    },

    // Additional products from other companies
    {
      id: 10,
      name: "Endotoxin Detection Systems",
      manufacturer: "Bio Endo",
      country: "China",
      image: defibrillatorImage,
      description: "Specialized endotoxin detection and testing solutions for pharmaceutical and medical applications",
      category: "laboratory",
      price: "Contact for Quote",
      website: "https://www.bioendo.com",
      keyProducts: ["Endotoxin detection kits", "LAL testing solutions", "Pharmaceutical quality control"]
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.country.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Products
          </motion.h1>
          <motion.p 
            className="text-xl text-orange-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive range of medical equipment from our trusted global partners
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products or manufacturers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === product.category)?.name}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {product.country}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-primary font-medium mb-3">{product.manufacturer}</p>
                  <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                  
                  {/* Key Products */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Products:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.keyProducts.slice(0, 3).map((keyProduct, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {keyProduct}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">{product.price}</span>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => window.open(product.website, '_blank')}
                        className="btn-primary"
                      >
                        Visit Website
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(product.website, '_blank')}
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Need a Custom Solution?
          </motion.h2>
          <motion.p 
            className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our experts can help you find the perfect medical equipment from our trusted partners
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button className="bg-white text-primary hover:bg-orange-50 px-8 py-3 text-lg">
              Contact Our Experts <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage

