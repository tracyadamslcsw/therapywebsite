import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar } from 'lucide-react'

export function MobileBookingCTA() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  // Don't show on contact page
  const isContactPage = location.pathname === '/contact'

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isContactPage) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur-sm border-t border-cream-dark p-4"
        >
          <Link
            to="/contact"
            className="btn btn-primary w-full justify-center gap-2"
          >
            <Calendar className="h-5 w-5" />
            Book Free Consultation
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileBookingCTA
