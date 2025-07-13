import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'

const Products = () => {
  const companies = [
    {
      id: 1,
      name: "ScheBo Biotech AG",
      country: "Germany",
      website: "https://www.schebo.de/en",
      description: "Innovative biotechnology company specializing in in-vitro diagnostics for gastroenterology and oncology.",
      products: [
        "Helicobacter pylori diagnostic tools",
        "Gastroenterology diagnostic kits",
        "SARS-CoV-2 diagnostic products",
        "Veterinary diagnostic solutions"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      name: "Amamed EU",
      country: "Russia",
      website: "https://www.amamed.eu",
      description: "Leading developer and manufacturer of Helicobacter pylori diagnostic tools and rapid urease tests.",
      products: [
        "AMA RUT Expert - Rapid urease test with digital reading",
        "AMA RUT PRO - Point-of-care diagnostic test",
        "HELIC Ammonia breath test devices",
        "Helicobacter pylori detection systems"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      name: "SD Biosensor",
      country: "Korea",
      website: "https://www.sdbiosensor.com",
      description: "Global leader in diagnostic reagents and platforms for screening, diagnosis, and monitoring.",
      products: [
        "STANDARD Q COVID-19 rapid tests",
        "SD CodeFree glucose monitoring system",
        "F200 fluorescence immunoassay device",
        "STANDARD LipidoCare cholesterol analyzer"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      name: "Mascia Brunelli S.p.A",
      country: "Italy",
      website: "https://www.masciabrunelli.it",
      description: "Manufacturer of hemostatic devices for surgery and distributor of medical devices for tissue culture.",
      products: [
        "Cutanplast hemostatic products",
        "Oxidized regenerated cellulose products",
        "Immunohaematology diagnostic products",
        "Clinical chemistry analyzers"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      name: "Xiamen Biotime Biotechnology",
      country: "China",
      website: "https://www.xiamenbiotime.com",
      description: "Hi-tech enterprise specialized in R&D, production, and sales of immunofluorescence reagents and analyzers.",
      products: [
        "Immunofluorescence reagents",
        "Immunoassay analyzers",
        "Point-of-care testing devices",
        "Clinical diagnostic equipment"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      name: "Xiamen Bioendo Technology",
      country: "China",
      website: "https://www.bioendo.com",
      description: "Expert in endotoxin detection and endotoxin-free products since 1978.",
      products: [
        "LAL endotoxin test kits",
        "Recombinant Factor C assays",
        "Bacterial endotoxin testing solutions",
        "Endotoxin removal systems"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      id: 7,
      name: "Erba Lachema s.r.o.",
      country: "Czech Republic",
      website: "https://www.erbalachema.com",
      description: "50+ years tradition in development and manufacture of products for urine analysis, clinical chemistry, and microbiology.",
      products: [
        "MIKROLATEST bacterial identification kits",
        "Antibiotic susceptibility testing systems",
        "Clinical chemistry analyzers",
        "Urine analysis equipment"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      id: 8,
      name: "Goldsite Diagnostics",
      country: "China",
      website: "https://en.goldsite.com.cn",
      description: "Leading Chinese diagnostics manufacturer specializing in in-vitro diagnostics devices and reagents since 1999.",
      products: [
        "Specific protein analyzers",
        "HbA1c POCT analyzers",
        "COVID-19 antigen test kits",
        "Chemiluminescence devices"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      id: 9,
      name: "Eaglenos Sciences",
      country: "China",
      website: "https://www.eaglenos.com/en",
      description: "Specializes in development, manufacture and marketing of diagnostic devices for home care and health management.",
      products: [
        "Electrolyte analyzers",
        "Blood gas analyzers",
        "Glucose & lactate meters",
        "Portable diagnostic devices"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      id: 10,
      name: "Erma Inc.",
      country: "Japan",
      website: "https://www.erma.jp",
      description: "Leading manufacturer of medical and diagnostic equipment with 100+ years of technical expertise.",
      products: [
        "PCE-210 automatic blood cell counter",
        "Bilirubin meters",
        "Hand refractometers",
        "Hematology analyzers"
      ],
      image: "/api/placeholder/400/300"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Partner Companies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            BASAMAA partners with leading global manufacturers to bring you the highest quality medical equipment and diagnostic solutions.
          </motion.p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Company Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {company.name}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                      {company.country}
                    </span>
                  </div>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {company.description}
                </p>
              </div>

              {/* Products List */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Products:
                </h4>
                <ul className="space-y-2">
                  {company.products.map((product, productIndex) => (
                    <li key={productIndex} className="flex items-start">
                      <ArrowRight size={16} className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{product}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visit Website Button */}
              <div className="px-6 pb-6">
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  Visit Website
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Specific Medical Equipment?
            </h3>
            <p className="text-xl mb-6 text-orange-100">
              Contact us to discuss your requirements and get personalized recommendations from our partner network.
            </p>
            <button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Contact Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Products

