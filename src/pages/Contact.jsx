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
      <section className="section relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/window-ivy.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/95 via-cream/90 to-white/95" />
        <div className="container relative z-10">
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
                        className="text-2xl md:text-3xl font-medium text-white hover:underline transition-colors"
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

                  {/* Contact Form */}
                  <form
                    name="consultation"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value="consultation" />
                    <p className="hidden">
                      <label>
                        Don't fill this out: <input name="bot-field" />
                      </label>
                    </p>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal-dark mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal-dark mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal-dark mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-colors"
                        placeholder="(555) 555-5555"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal-dark mb-2">
                        What brings you to therapy? *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-colors resize-none"
                        placeholder="Tell me a little about what's going on..."
                      />
                    </div>

                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-charcoal-dark mb-2">
                        State of Residence *
                      </label>
                      <select
                        id="state"
                        name="state"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-charcoal/20 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-colors bg-white"
                      >
                        <option value="">Select your state</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Florida">Florida</option>
                        <option value="Other">Other (I can provide referrals)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn btn-primary justify-center mt-6"
                    >
                      Request Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </form>

                  <p className="text-sm text-charcoal-light text-center mt-6">
                    I typically respond within 24 hours
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
              <div className="bg-chocolate rounded-2xl p-8 md:p-10 text-charcoal-dark">
                <h2 className="font-serif text-charcoal-dark mb-6">For Referrers</h2>

                <p className="text-charcoal-dark mb-6">
                  If you're a therapist, physician, or other professional
                  looking to refer a client:
                </p>

                <p className="text-charcoal-dark mb-4">
                  I specialize in EMDR and IFS for adults struggling with:
                </p>

                <ul className="space-y-2 mb-8">
                  {[
                    'People-pleasing and perfectionism',
                    'Anxiety and trauma',
                    'Grief and life transitions',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-sage-dark" />
                      <span className="text-charcoal-dark">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-charcoal/10 rounded-xl p-6 mb-6">
                  <p className="text-charcoal-dark font-medium">
                    48-Hour Consultation Promise
                  </p>
                  <p className="text-charcoal-dark text-sm mt-1">
                    Your referrals will hear back within 2 business days.
                  </p>
                </div>

                <a
                  href="#"
                  className="btn bg-charcoal-dark text-white hover:bg-charcoal inline-flex items-center gap-2"
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
