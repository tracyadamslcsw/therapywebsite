import { Link } from 'react-router-dom'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  MessageCircle,
  ArrowRight,
  Download,
  CheckCircle,
} from 'lucide-react'
import { SEO, AnimatedSection, Layout } from '../components'

const expectationSteps = [
  "I'll respond within 24 hours (usually much faster)",
  "We'll schedule a free 15-minute consultation",
  "We'll talk about what's happening and whether I can help",
  "If we're a fit, we'll schedule your first session",
]

export function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact | Tracy Adams, LCSW | Book a Consultation"
        description="Book a free 15-minute consultation with Tracy Adams, LCSW. EMDR therapy in Denver and telehealth for California, Colorado, and Florida."
        keywords="contact Tracy Adams, book therapy consultation, EMDR consultation Denver, therapy appointment"
      />

      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-cream to-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="text-sage-dark font-medium uppercase tracking-wide mb-4">
              Contact
            </p>
            <h1 className="font-serif text-charcoal-dark mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-charcoal-light">
              Your first step is a conversation
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section bg-white pt-0">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Contact Info */}
            <div>
              <AnimatedSection>
                {/* Phone - Prominent */}
                <div className="bg-sage rounded-2xl p-8 text-white mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm uppercase tracking-wide">
                        Call or Text
                      </p>
                      <a
                        href="tel:+17192039670"
                        className="text-2xl md:text-3xl font-medium hover:text-white/90 transition-colors"
                      >
                        (719) 203-9670
                      </a>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    Tap to call on mobile
                  </p>
                </div>

                {/* Email */}
                <div className="bg-cream rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                      <Mail className="w-6 h-6 text-terracotta" />
                    </div>
                    <div>
                      <p className="text-charcoal-light text-sm">Email</p>
                      <a
                        href="mailto:hello@tracyadamslcsw.com"
                        className="text-charcoal-dark font-medium hover:text-sage-dark transition-colors"
                      >
                        hello@tracyadamslcsw.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <h3 className="font-serif text-xl text-charcoal-dark mb-4 mt-10">
                  Location
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-terracotta mt-1" />
                    <div>
                      <p className="font-medium text-charcoal-dark">
                        In-Person Sessions
                      </p>
                      <p className="text-charcoal-light">
                        1563 Gilpin St, Denver, CO 80218
                      </p>
                      <p className="text-charcoal-light text-sm">
                        Mondays & Wednesdays
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-sage-dark mt-1" />
                    <div>
                      <p className="font-medium text-charcoal-dark">
                        Telehealth Sessions
                      </p>
                      <p className="text-charcoal-light">
                        Available for California, Colorado, and Florida
                        residents
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Booking */}
            <div>
              <AnimatedSection delay={0.2}>
                <div className="bg-blush-light rounded-2xl p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-8 h-8 text-terracotta" />
                    <h2 className="font-serif text-2xl text-charcoal-dark">
                      Book a Free 15-Minute Consultation
                    </h2>
                  </div>

                  <p className="text-lg text-charcoal mb-8">
                    This is a chance for us to talk about what's going on and
                    whether we'd be a good fit. No pressure, no commitment.
                  </p>

                  {/* Booking Button */}
                  <div className="bg-white rounded-xl p-8 text-center mb-6">
                    <Calendar className="w-12 h-12 text-sage mx-auto mb-4" />
                    <p className="text-charcoal mb-6">
                      Click below to view my availability and book your free consultation.
                    </p>
                    <a
                      href="https://tracyadamslcsw.sessionshealth.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary inline-flex items-center gap-2"
                    >
                      Schedule Your Consultation
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-sm text-charcoal-light text-center">
                    Or call{' '}
                    <a
                      href="tel:+17192039670"
                      className="text-sage-dark font-medium hover:underline"
                    >
                      (719) 203-9670
                    </a>{' '}
                    to schedule
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section bg-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-serif text-charcoal-dark text-center mb-12">
                What to Expect
              </h2>

              <div className="space-y-4">
                {expectationSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white rounded-xl p-5"
                  >
                    <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-medium text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-lg text-charcoal pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* For Referrers */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="bg-charcoal-dark rounded-2xl p-8 md:p-10 text-white">
                <h2 className="font-serif text-white mb-6">For Referrers</h2>

                <p className="text-white/80 mb-6">
                  If you're a therapist, physician, or other professional
                  looking to refer a client:
                </p>

                <p className="text-white/90 mb-4">
                  I specialize in EMDR and IFS for adults struggling with:
                </p>

                <ul className="space-y-2 mb-8">
                  {[
                    'People-pleasing and perfectionism',
                    'Anxiety and trauma',
                    'Grief and life transitions',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-sage-light" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-white/10 rounded-xl p-6 mb-6">
                  <p className="text-white font-medium">
                    48-Hour Consultation Promise
                  </p>
                  <p className="text-white/70 text-sm mt-1">
                    Your referrals will hear back within 2 business days.
                  </p>
                </div>

                <a
                  href="#"
                  className="btn bg-white text-charcoal-dark hover:bg-cream inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Referral Information
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
