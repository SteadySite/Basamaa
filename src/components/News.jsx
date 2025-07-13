import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

const News = () => {
  const news = [
    {
      id: 1,
      title: "AEEDC 2026 - Dubai International Dental Conference",
      date: "January 10-12, 2026",
      image: "/src/assets/aeedc-2026.jpg",
      description: "Join us at the largest dental exhibition in the Middle East. Discover the latest innovations in dental technology.",
      category: "Exhibition"
    },
    {
      id: 2,
      title: "WHX Dubai 2026 - World Health Expo",
      date: "February 9-12, 2026",
      image: "/src/assets/whx-dubai.jpg",
      description: "The largest healthcare event in the Middle East. Explore cutting-edge medical technologies and solutions.",
      category: "Conference"
    },
    {
      id: 3,
      title: "DUPHAT 2026 - Dubai International Pharmaceutical Conference",
      date: "March 24-26, 2026",
      image: "/src/assets/duphat-2026.jpg",
      description: "Leading pharmaceutical and healthcare technology conference in the region.",
      category: "Conference"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Latest Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about upcoming healthcare events and industry developments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">{item.category}</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>

                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News

