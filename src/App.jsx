import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Phone, Mail, MapPin } from 'lucide-react'
import { SEO } from './components/SEO'
import { cn } from './lib/utils'

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <SEO
        title="Welcome"
        description="Compassionate therapy services for individuals, couples, and families. Begin your journey to wellness today."
        keywords="therapy, counseling, mental health, therapist, psychotherapy, wellness, anxiety, depression"
      />

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heart className="mx-auto h-16 w-16 text-indigo-600 mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Journey to Wellness Starts Here
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Compassionate, professional therapy services to support your mental
            health and wellbeing.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              'bg-indigo-600 text-white px-8 py-3 rounded-lg',
              'font-semibold text-lg shadow-lg',
              'hover:bg-indigo-700 transition-colors'
            )}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </header>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Individual Therapy', 'Couples Counseling', 'Family Therapy'].map(
            (service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service}
                </h3>
                <p className="text-gray-600">
                  Professional support tailored to your unique needs and goals.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>contact@therapywebsite.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>123 Wellness Street</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Therapy Website. All rights reserved.</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App
