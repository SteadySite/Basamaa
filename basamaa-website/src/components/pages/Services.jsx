import { Package, Truck, Users, Headphones, Search, Shield } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Services = () => {
  const mainServices = [
    {
      icon: Search,
      title: 'Product Sourcing',
      description: 'We identify and source the best medical equipment from trusted manufacturers worldwide.',
      features: [
        'Global manufacturer network',
        'Quality verification process',
        'Competitive pricing',
        'Custom product specifications'
      ]
    },
    {
      icon: Truck,
      title: 'Logistics & Delivery',
      description: 'Reliable and secure delivery services ensuring your medical supplies arrive on time.',
      features: [
        'Nationwide delivery network',
        'Temperature-controlled transport',
        'Real-time tracking',
        'Emergency delivery options'
      ]
    },
    {
      icon: Users,
      title: 'Hospital Partnerships',
      description: 'Building long-term partnerships with healthcare providers for sustainable supply solutions.',
      features: [
        'Dedicated account management',
        'Customized supply programs',
        'Inventory management',
        'Volume discounts'
      ]
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: '24/7 technical support and consultation from our team of medical equipment experts.',
      features: [
        '24/7 support hotline',
        'On-site technical assistance',
        'Equipment training',
        'Maintenance coordination'
      ]
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Comprehensive inventory solutions to optimize your medical supply chain.',
      features: [
        'Automated reordering',
        'Stock level monitoring',
        'Expiry date tracking',
        'Custom reporting'
      ]
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes to ensure all products meet international standards.',
      features: [
        'ISO certification compliance',
        'Product authentication',
        'Quality documentation',
        'Regulatory compliance'
      ]
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We understand your specific medical supply needs and requirements.'
    },
    {
      step: '02',
      title: 'Sourcing',
      description: 'Our team identifies the best products from our network of trusted manufacturers.'
    },
    {
      step: '03',
      title: 'Quality Check',
      description: 'Every product undergoes rigorous quality assurance before delivery.'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Secure and timely delivery to your healthcare facility.'
    },
    {
      step: '05',
      title: 'Support',
      description: 'Ongoing support and maintenance for all supplied equipment.'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive medical supply solutions designed to meet the unique needs of healthcare providers
          </p>
        </div>

        {/* Main Services Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to delivering quality medical supplies
            </p>
          </div>
          <div className="relative">
            {/* Desktop Process Flow */}
            <div className="hidden lg:block">
              <div className="flex justify-between items-center mb-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center max-w-xs">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-border -z-10"></div>
            </div>

            {/* Mobile Process Flow */}
            <div className="lg:hidden space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="bg-card rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the difference with our comprehensive medical supply solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Healthcare Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">ISO</div>
                <div className="text-sm text-muted-foreground">Certified Quality</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let us help you streamline your medical supply chain with our comprehensive services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/contact">
                  Request a Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/products">
                  View Our Products
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services

