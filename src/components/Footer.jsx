import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'EMDR', href: '/emdr' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-dark text-white/90">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl font-medium text-white hover:text-sage-light transition-colors"
            >
              Tracy Adams, LCSW
            </Link>
            <p className="mt-4 text-white/70 max-w-md">
              EMDR and IFS therapy for high-achieving women ready to stop
              people-pleasing and start living authentically.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="tel:+17192039670"
                className="flex items-center gap-3 text-lg font-medium text-white hover:text-sage-light transition-colors"
              >
                <Phone className="h-5 w-5 text-sage-light" />
                (719) 203-9670
              </a>
              <a
                href="mailto:contact@tracyadamslcsw.com"
                className="flex items-center gap-3 text-white/80 hover:text-sage-light transition-colors"
              >
                <Mail className="h-5 w-5 text-sage-light" />
                contact@tracyadamslcsw.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-sage-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-sage-light flex-shrink-0" />
                <span>Denver, Colorado (In-Person)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-sage-light flex-shrink-0" />
                <span>California (Telehealth)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-sage-light flex-shrink-0" />
                <span>Colorado (Telehealth)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-sage-light flex-shrink-0" />
                <span>Florida (Telehealth)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Crisis Resources */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm text-center md:text-left">
            <strong className="text-white/80">Crisis Resources:</strong> If you
            are in crisis, please call{' '}
            <a
              href="tel:988"
              className="text-sage-light hover:text-sage font-medium"
            >
              988
            </a>{' '}
            (Suicide & Crisis Lifeline) or text HOME to 741741.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Tracy Adams, LCSW. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Licensed in Colorado, California, and Florida
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
