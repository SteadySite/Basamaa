import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Package, ExternalLink, Mail, Phone, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  // Mock product data - in a real app, this would come from an API
  const mockProducts = {
    1: {
      id: 1,
      name: 'Digital X-Ray System',
      category: 'Diagnostic Equipment',
      description: 'High-resolution digital radiography system for accurate diagnostic imaging with advanced image processing capabilities and seamless workflow integration.',
      manufacturer: 'MedTech Solutions',
      manufacturerWebsite: 'https://medtechsolutions.com',
      price: 'Contact for pricing',
      image: '/api/placeholder/600/400',
      features: [
        'High resolution imaging up to 14-bit depth',
        'Digital workflow integration',
        'DICOM compatible with PACS connectivity',
        'Low radiation dose technology',
        'Automatic exposure control',
        'Advanced image processing algorithms',
        'Touch screen interface',
        'Remote diagnostics capability'
      ],
      specifications: {
        'Image Matrix': '3000 x 3000 pixels',
        'Pixel Size': '100 μm',
        'A/D Conversion': '14-bit',
        'Interface': 'Ethernet, USB 3.0',
        'Power Requirements': '100-240V AC, 50/60Hz',
        'Dimensions': '45 x 35 x 15 cm',
        'Weight': '12 kg',
        'Certifications': 'CE, FDA, ISO 13485'
      },
      applications: [
        'General radiography',
        'Orthopedic imaging',
        'Chest examinations',
        'Emergency diagnostics',
        'Pediatric imaging'
      ],
      benefits: [
        'Improved diagnostic accuracy',
        'Reduced patient exposure',
        'Enhanced workflow efficiency',
        'Cost-effective operation',
        'Easy maintenance'
      ]
    },
    2: {
      id: 2,
      name: 'Surgical Microscope',
      category: 'Surgical Instruments',
      description: 'Advanced surgical microscope with LED illumination and HD recording capabilities for precision surgical procedures.',
      manufacturer: 'Precision Optics',
      manufacturerWebsite: 'https://precisionoptics.com',
      price: 'Contact for pricing',
      image: '/api/placeholder/600/400',
      features: [
        'LED illumination system',
        'HD recording capability',
        'Motorized focus and zoom',
        'Ergonomic design',
        'Multiple magnification levels',
        'Integrated camera system',
        'Foot pedal controls',
        'Adjustable working distance'
      ],
      specifications: {
        'Magnification Range': '6x to 40x',
        'Working Distance': '200-400mm',
        'Illumination': 'LED, 50,000 hour life',
        'Camera Resolution': '4K Ultra HD',
        'Controls': 'Motorized with foot pedals',
        'Power Requirements': '100-240V AC',
        'Weight': '85 kg',
        'Certifications': 'CE, FDA, ISO 13485'
      },
      applications: [
        'Neurosurgery',
        'Ophthalmology',
        'ENT procedures',
        'Plastic surgery',
        'Microsurgery'
      ],
      benefits: [
        'Enhanced visualization',
        'Improved surgical precision',
        'Reduced eye strain',
        'Better documentation',
        'Training capabilities'
      ]
    }
    // Add more products as needed
  }

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const productData = mockProducts[id] || null
      setProduct(productData)
      setLoading(false)
    }, 1000)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading product details...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>

        {/* Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div>
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <Package className="h-24 w-24 text-primary" />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <Badge variant="secondary" className="mb-4">
              {product.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {product.description}
            </p>
            
            <div className="space-y-4 mb-8">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Manufacturer:</span>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-lg font-semibold">{product.manufacturer}</span>
                  <Button asChild variant="ghost" size="sm">
                    <a href={product.manufacturerWebsite} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Price:</span>
                <p className="text-lg font-semibold text-primary">{product.price}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1">
                <Mail className="mr-2 h-5 w-5" />
                Request Quote
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                <Phone className="mr-2 h-5 w-5" />
                Call for Info
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
                <CardDescription>
                  Advanced features that make this product stand out
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
                <CardDescription>
                  Detailed technical information and requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="border-b border-border pb-2">
                      <dt className="text-sm font-medium text-muted-foreground">{key}</dt>
                      <dd className="text-sm text-foreground mt-1">{value}</dd>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Clinical Applications</CardTitle>
                <CardDescription>
                  Medical procedures and use cases for this equipment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.applications.map((application, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-accent rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-accent-foreground">{application}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Benefits & Advantages</CardTitle>
                <CardDescription>
                  How this product improves healthcare outcomes and efficiency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-card border border-border rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-card-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Contact CTA */}
        <div className="mt-12">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Interested in This Product?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Contact our team for detailed information, pricing, and availability
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">
                    Get Quote
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link to="/products">
                    View More Products
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

