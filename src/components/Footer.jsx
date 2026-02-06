import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'IFS', href: '/ifs' },
  { name: 'EMDR', href: '/emdr' },
  { name: 'Investment', href: '/investment' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-chocolate text-black">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl font-medium text-black hover:text-sage-dark transition-colors"
            >
              Tracy Adams, LCSW
            </Link>
            <p className="mt-4 text-black max-w-md">
              EMDR and IFS therapy for high-achieving men and women ready to stop
              people-pleasing and start living authentically.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="tel:+17192039670"
                className="flex items-center gap-3 text-lg font-medium text-black hover:text-sage-dark transition-colors"
              >
                <Phone className="h-5 w-5 text-sage-dark" />
                (719) 203-9670
              </a>
              <a
                href="mailto:hello@tracyadamslcsw.com"
                className="flex items-center gap-3 text-black hover:text-sage-dark transition-colors"
              >
                <Mail className="h-5 w-5 text-sage-dark" />
                hello@tracyadamslcsw.com
              </a>
              <a
                href="https://www.psychologytoday.com/profile/966823"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-black hover:text-sage-dark transition-colors"
              >
                <ExternalLink className="h-5 w-5 text-sage-dark" />
                Psychology Today Profile
              </a>
              <a
                href="https://www.therisejourney.com/team/tracy-adams"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-black hover:text-sage-dark transition-colors"
              >
                <ExternalLink className="h-5 w-5 text-sage-dark" />
                The Rise Journey
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-black mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-black hover:text-sage-dark transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-serif text-lg font-medium text-black mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2 text-black">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-sage-dark flex-shrink-0" />
                <span>1563 Gilpin St, Denver, CO 80218</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-sage-dark flex-shrink-0" />
                <span>California (Telehealth)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-sage-dark flex-shrink-0" />
                <span>Colorado (Telehealth)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-sage-dark flex-shrink-0" />
                <span>Florida (Telehealth)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Crisis Resources */}
        <div className="mt-12 pt-8 border-t border-charcoal/20">
          <p className="text-black text-sm text-center md:text-left">
            <strong>Crisis Resources:</strong> If you
            are in crisis, please call{' '}
            <a
              href="tel:988"
              className="text-sage-dark hover:text-sage font-medium"
            >
              988
            </a>{' '}
            (Suicide & Crisis Lifeline) or text HOME to 741741.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-charcoal/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-black text-sm">
            &copy; {currentYear} Tracy Adams, LCSW. All rights reserved.
          </p>
          <p className="text-black text-sm">
            Licensed in Colorado, California, and Florida
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
