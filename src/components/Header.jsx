import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '../lib/utils'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'EMDR', href: '/emdr' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-soft'
          : 'bg-transparent'
      )}
    >
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-xl md:text-2xl font-medium text-charcoal-dark hover:text-charcoal transition-colors"
        >
          Tracy Adams, LCSW
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'text-sm font-medium transition-colors',
                location.pathname === item.href
                  ? 'text-sage-dark'
                  : 'text-charcoal hover:text-sage-dark'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary text-sm">
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-charcoal hover:text-sage-dark transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-cream border-t border-cream-dark"
          >
            <div className="container py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'block py-3 text-lg font-medium transition-colors',
                    location.pathname === item.href
                      ? 'text-sage-dark'
                      : 'text-charcoal hover:text-sage-dark'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Link
                  to="/contact"
                  className="btn btn-primary w-full justify-center"
                >
                  Book Consultation
                </Link>
                <a
                  href="tel:+1XXXXXXXXXX"
                  className="flex items-center justify-center gap-2 py-3 text-charcoal hover:text-sage-dark transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>(XXX) XXX-XXXX</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
