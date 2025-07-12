import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, ArrowRight, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const Products = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  // Mock product data - in a real app, this would come from an API
  const mockProducts = [
    {
      id: 1,
      name: 'Digital X-Ray System',
      category: 'Diagnostic Equipment',
      description: 'High-resolution digital radiography system for accurate diagnostic imaging',
      manufacturer: 'MedTech Solutions',
      price: 'Contact for pricing',
      image: '/api/placeholder/300/200',
      features: ['High resolution imaging', 'Digital workflow', 'DICOM compatible', 'Low radiation dose']
    },
    {
      id: 2,
      name: 'Surgical Microscope',
      category: 'Surgical Instruments',
      description: 'Advanced surgical microscope with LED illumination and HD recording',
      manufacturer: 'Precision Optics',
      price: 'Contact for pricing',
      image: '/api/placeholder/300/200',
      features: ['LED illumination', 'HD recording', 'Motorized focus', 'Ergonomic design']
    },
    {
      id: 3,
      name: 'Patient Monitor',
      category: 'Patient Monitoring',
      description: 'Multi-parameter patient monitoring system for critical care',
      manufacturer: 'VitalCare Systems',
      price: 'Contact for pricing',
      image: '/api/placeholder/300/200',
      features: ['Multi-parameter monitoring', 'Wireless connectivity', 'Alarm management', 'Data storage']
    },
    {
      id: 4,
      name: 'Automated Analyzer',
      category: 'Laboratory Equipment',
      description: 'High-throughput automated clinical chemistry analyzer',
      manufacturer: 'LabTech Instruments',
      price: 'Contact for pricing',
      image: '/api/placeholder/300/200',
      features: ['High throughput', 'Automated processing', 'Quality control', 'Result reporting']
    },
    {
      id: 5,
      name: 'Ultrasound System',
      category: 'Diagnostic Equipment',
      description: 'Portable ultrasound system with advanced imaging capabilities',
      manufacturer: 'SonoMed Technologies',
      price: 'Contact for pricing',
      image: '/api/placeholder/300/200',
      features: ['Portable design', 'Advanced imaging', 'Multiple probes', 'Cloud connectivity']
    },
    {
      id: 6,
      name: 'Electrosurgical Unit',
      category: 'Surgical Instruments',
      description: 'Advanced electrosurgical generator with safety features',
      manufacturer: 'SurgiTech Pro',
      price: 'Contact for pricing',
      image: '/api/placeholder/300/200',
      features: ['Safety monitoring', 'Multiple modes', 'Tissue sensing', 'User-friendly interface']
    },
    {
      id: 7,
      name: 'Ventilator',
      category: 'Patient Monitoring',
      description: 'Advanced mechanical ventilator for critical care patients',
      manufacturer: 'RespiraCare',
      price: 'Contact for pricing',
      image: '/api/placeholder/300/200',
      features: ['Advanced modes', 'Lung protection', 'Monitoring capabilities', 'Easy operation']
    },
    {
      id: 8,
      name: 'Centrifuge',
      category: 'Laboratory Equipment',
      description: 'High-speed laboratory centrifuge for sample processing',
      manufacturer: 'SpinLab Equipment',
      price: 'Contact for pricing',
      image: '/api/placeholder/300/200',
      features: ['High speed', 'Temperature control', 'Safety features', 'Multiple rotors']
    }
  ]

  const categories = ['All', 'Diagnostic Equipment', 'Surgical Instruments', 'Patient Monitoring', 'Laboratory Equipment']

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(mockProducts)
      setFilteredProducts(mockProducts)
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredProducts(filtered)
  }, [products, selectedCategory, searchTerm])

  if (loading) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading products...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality medical equipment and supplies 
            from trusted manufacturers worldwide.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Package className="h-12 w-12 text-primary" />
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <Badge variant="secondary" className="mb-2">
                    {product.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Manufacturer:</p>
                    <p className="text-sm font-medium">{product.manufacturer}</p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {product.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{product.features.length - 2} more
                      </Badge>
                    )}
                  </div>
                  <div className="pt-2">
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/product/${product.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button onClick={() => { setSearchTerm(''); setSelectedCategory('All') }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-card rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team can help you source specific medical equipment or supplies. 
              Contact us with your requirements and we'll find the right solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">
                  Request Custom Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link to="/services">
                  Learn About Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

