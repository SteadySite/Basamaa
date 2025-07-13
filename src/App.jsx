import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Products from './components/Products'
import Partners from './components/Partners'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutPage from './components/pages/AboutPage'
import ServicesPage from './components/pages/ServicesPage'
import ProductsPage from './components/pages/ProductsPage'
import ContactPage from './components/pages/ContactPage'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center hero-gradient">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white">Loading BASAMAA...</h2>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20"> {/* Add padding-top to account for fixed navbar */}
          <Routes>
            <Route path="/" element={
              <main>
              <Hero />
              <Services />
              <About />
              <Products />
              <Partners />
              <News />
              <Contact />
            </main>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </div> {/* Close padding div */}
        <Footer />
      </div>
    </Router>
  )
}

export default App


