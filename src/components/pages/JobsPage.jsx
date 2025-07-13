import { motion } from 'framer-motion'
import { MapPin, Clock, Users, Briefcase, GraduationCap, Heart } from 'lucide-react'
import { Button } from '../ui/button'

const JobsPage = () => {
  const jobs = [
    {
      id: 1,
      title: "Medical Equipment Sales Representative",
      department: "Sales",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "3-5 years",
      description: "Join our dynamic sales team to promote and sell medical equipment to healthcare facilities across the UAE.",
      requirements: [
        "Bachelor's degree in Biomedical Engineering or related field",
        "3+ years experience in medical equipment sales",
        "Strong communication and presentation skills",
        "Valid UAE driving license"
      ],
      benefits: [
        "Competitive salary + commission",
        "Health insurance",
        "Company car",
        "Professional development opportunities"
      ]
    },
    {
      id: 2,
      title: "Biomedical Engineer",
      department: "Technical",
      location: "Abu Dhabi, UAE",
      type: "Full-time",
      experience: "2-4 years",
      description: "Provide technical support, installation, and maintenance services for medical equipment.",
      requirements: [
        "Bachelor's degree in Biomedical Engineering",
        "Experience with medical equipment maintenance",
        "Strong problem-solving skills",
        "Willingness to travel within UAE"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Training programs",
        "Career advancement opportunities"
      ]
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Sharjah, UAE",
      type: "Full-time",
      experience: "2-3 years",
      description: "Develop and execute digital marketing strategies to promote BASAMAA's products and services.",
      requirements: [
        "Bachelor's degree in Marketing or related field",
        "Experience with digital marketing platforms",
        "Knowledge of healthcare industry preferred",
        "Creative thinking and analytical skills"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Flexible working hours",
        "Professional development budget"
      ]
    },
    {
      id: 4,
      title: "Supply Chain Coordinator",
      department: "Operations",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "2-4 years",
      description: "Manage inventory, coordinate with suppliers, and ensure timely delivery of medical equipment.",
      requirements: [
        "Bachelor's degree in Supply Chain Management or related field",
        "Experience in inventory management",
        "Strong organizational skills",
        "Knowledge of ERP systems"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Annual bonus",
        "Training opportunities"
      ]
    },
    {
      id: 5,
      title: "Customer Service Representative",
      department: "Customer Service",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "1-2 years",
      description: "Provide excellent customer service and support to healthcare professionals and institutions.",
      requirements: [
        "Bachelor's degree preferred",
        "Excellent communication skills in English and Arabic",
        "Customer service experience",
        "Computer literacy"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Performance bonuses",
        "Career growth opportunities"
      ]
    },
    {
      id: 6,
      title: "Quality Assurance Specialist",
      department: "Quality",
      location: "Abu Dhabi, UAE",
      type: "Full-time",
      experience: "3-5 years",
      description: "Ensure all products meet quality standards and regulatory requirements.",
      requirements: [
        "Bachelor's degree in Quality Management or related field",
        "Experience in quality assurance in healthcare",
        "Knowledge of UAE regulatory requirements",
        "Attention to detail"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Professional certifications support",
        "Flexible working arrangements"
      ]
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous learning opportunities and professional development"
    },
    {
      icon: Users,
      title: "Team Environment",
      description: "Collaborative and supportive work environment"
    },
    {
      icon: Briefcase,
      title: "Career Growth",
      description: "Clear career progression paths and advancement opportunities"
    }
  ]

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join Our Team
          </motion.h1>
          <motion.p 
            className="text-xl text-orange-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build your career with the leading medical supply company in the UAE
          </motion.p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">Why Work With Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a company that values innovation, excellence, and making a difference in healthcare
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-4 bg-primary/10 rounded-xl w-fit mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">Open Positions</h2>
            <p className="text-xl text-muted-foreground">
              Discover exciting career opportunities across our organization
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{job.title}</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {job.department}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Briefcase className="h-4 w-4" />
                    <span>{job.experience}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{job.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.slice(0, 3).map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="btn-primary text-white w-full">
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default JobsPage

