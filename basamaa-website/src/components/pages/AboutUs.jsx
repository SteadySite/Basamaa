import { Users, Target, Eye, Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To bridge the gap between medical equipment manufacturers and healthcare providers, ensuring quality medical supplies reach those who need them most.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become the leading medical supply company in the region, known for reliability, quality, and exceptional service to healthcare providers.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Quality, integrity, innovation, and commitment to improving healthcare outcomes through reliable medical supply solutions.'
    }
  ]

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Basamaa was established with a vision to revolutionize medical supply distribution in the region.'
    },
    {
      year: '2020',
      title: 'First Major Partnership',
      description: 'Secured partnerships with leading international medical equipment manufacturers.'
    },
    {
      year: '2022',
      title: 'Regional Expansion',
      description: 'Expanded operations to serve healthcare providers across multiple regions.'
    },
    {
      year: '2024',
      title: 'Digital Innovation',
      description: 'Launched our digital platform to streamline ordering and delivery processes.'
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Basamaa
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the way in medical supply solutions, connecting manufacturers with healthcare providers 
            to ensure quality care reaches every patient.
          </p>
        </div>

        {/* Company Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2018, Basamaa emerged from a simple yet powerful vision: to create a seamless 
                  connection between medical equipment manufacturers and healthcare providers. Our founders 
                  recognized the critical need for reliable, high-quality medical supplies in healthcare 
                  facilities across the region.
                </p>
                <p>
                  What started as a small distribution company has grown into a comprehensive medical supply 
                  solution provider, serving hospitals, clinics, and healthcare centers with a wide range 
                  of medical equipment and supplies. Our commitment to quality and service has made us a 
                  trusted partner in the healthcare industry.
                </p>
                <p>
                  Today, Basamaa continues to innovate and expand, leveraging technology and strategic 
                  partnerships to deliver exceptional value to our clients while maintaining the highest 
                  standards of quality and reliability.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <Users className="h-24 w-24 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">500+</h3>
                <p className="text-muted-foreground">Healthcare Partners</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Foundation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth and development
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-border">
                      <CardHeader>
                        <CardTitle className="text-lg">{milestone.title}</CardTitle>
                        <CardDescription className="text-primary font-semibold">
                          {milestone.year}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Commitment
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Basamaa, we are committed to excellence in every aspect of our business. From sourcing 
              the highest quality medical equipment to providing exceptional customer service, we strive 
              to exceed expectations and contribute to better healthcare outcomes for all.
            </p>
          </div>
          <div className="bg-card rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Partner with Us?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the growing network of healthcare providers who trust Basamaa for their medical supply needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Contact Us Today
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-md hover:bg-accent transition-colors"
              >
                Learn About Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutUs

