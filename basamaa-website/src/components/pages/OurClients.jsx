import { Building2, MapPin, Users, Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const OurClients = () => {
  const clientCategories = [
    {
      icon: Building2,
      title: 'Major Hospitals',
      count: '150+',
      description: 'Leading hospitals and medical centers across the region'
    },
    {
      icon: Users,
      title: 'Specialty Clinics',
      count: '200+',
      description: 'Specialized medical clinics and outpatient facilities'
    },
    {
      icon: MapPin,
      title: 'Healthcare Networks',
      count: '50+',
      description: 'Multi-location healthcare systems and networks'
    },
    {
      icon: Award,
      title: 'Research Centers',
      count: '25+',
      description: 'Medical research institutions and laboratories'
    }
  ]

  const featuredClients = [
    {
      name: 'King Fahad Medical City',
      type: 'Major Hospital',
      location: 'Riyadh',
      description: 'Leading tertiary care hospital providing comprehensive medical services',
      services: ['Diagnostic Equipment', 'Surgical Instruments', 'Patient Monitoring']
    },
    {
      name: 'Prince Sultan Cardiac Center',
      type: 'Specialty Hospital',
      location: 'Riyadh',
      description: 'Specialized cardiac care facility with state-of-the-art equipment',
      services: ['Cardiac Monitoring', 'Surgical Equipment', 'Laboratory Supplies']
    },
    {
      name: 'National Guard Health Affairs',
      type: 'Healthcare Network',
      location: 'Multiple Locations',
      description: 'Comprehensive healthcare system serving multiple regions',
      services: ['Medical Supplies', 'Equipment Maintenance', 'Logistics Support']
    },
    {
      name: 'King Saud University Medical Center',
      type: 'Academic Medical Center',
      location: 'Riyadh',
      description: 'Leading academic medical center with research and teaching facilities',
      services: ['Research Equipment', 'Educational Supplies', 'Laboratory Equipment']
    },
    {
      name: 'Al-Mouwasat Hospital',
      type: 'Private Hospital',
      location: 'Riyadh',
      description: 'Premier private healthcare facility offering advanced medical care',
      services: ['Diagnostic Systems', 'Surgical Tools', 'Patient Care Equipment']
    },
    {
      name: 'Riyadh Care Hospital',
      type: 'Specialty Hospital',
      location: 'Riyadh',
      description: 'Modern healthcare facility focused on quality patient care',
      services: ['Medical Devices', 'Monitoring Systems', 'Surgical Supplies']
    }
  ]

  const testimonials = [
    {
      quote: "Basamaa has been instrumental in helping us maintain our high standards of patient care. Their reliable supply chain and quality products have made them an invaluable partner.",
      author: "Dr. Ahmed Al-Rashid",
      position: "Chief Medical Officer",
      hospital: "King Fahad Medical City"
    },
    {
      quote: "The technical support and expertise provided by Basamaa's team has been exceptional. They understand our needs and consistently deliver solutions that exceed our expectations.",
      author: "Dr. Sarah Al-Mahmoud",
      position: "Department Head",
      hospital: "Prince Sultan Cardiac Center"
    },
    {
      quote: "Working with Basamaa has streamlined our procurement process significantly. Their comprehensive service approach and attention to detail make them a trusted partner.",
      author: "Mr. Mohammed Al-Otaibi",
      position: "Procurement Manager",
      hospital: "National Guard Health Affairs"
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Clients
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading healthcare providers across the region, we're proud to support 
            institutions that make a difference in patient care every day.
          </p>
        </div>

        {/* Client Categories Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientCategories.map((category, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary mb-2">
                    {category.count}
                  </CardTitle>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Clients Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Healthcare Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Some of the prestigious healthcare institutions we're proud to serve
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredClients.map((client, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg mb-1">{client.name}</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                          {client.type}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {client.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardDescription>{client.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Services Provided:</h4>
                    <div className="flex flex-wrap gap-1">
                      {client.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from healthcare professionals who trust Basamaa for their medical supply needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-primary">{testimonial.hospital}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="mb-20">
          <div className="bg-card rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Impact
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Numbers that reflect our commitment to healthcare excellence
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">425+</div>
                <div className="text-sm text-muted-foreground">Active Healthcare Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50M+</div>
                <div className="text-sm text-muted-foreground">Patients Served Annually</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Growing Network
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Become part of our trusted network of healthcare providers and experience 
              the Basamaa difference in medical supply solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/contact">
                  Partner with Us
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/services">
                  Learn About Our Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default OurClients

