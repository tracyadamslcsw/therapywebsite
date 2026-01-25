import { Link } from 'react-router-dom'
import {
  User,
  Brain,
  Zap,
  Users,
  Building,
  ArrowRight,
  Check,
  Clock,
  MapPin,
  CreditCard,
} from 'lucide-react'
import { SEO, AnimatedSection, Layout } from '../components'

const services = [
  {
    icon: User,
    title: 'Individual Therapy',
    description:
      'For high-achieving women ready to stop people-pleasing and start living authentically.',
    features: [
      'Process trauma and stuck memories',
      'Understand your "parts" (the perfectionist, the people-pleaser, the critic)',
      'Set boundaries without guilt',
      'Build a relationship with your authentic Self',
    ],
    format: '50-minute sessions | In-person (Denver) or Telehealth (CA, CO, FL)',
    investment: 'Starting at $350/session',
    cta: 'Book a Consultation',
    ctaLink: '/contact',
    featured: true,
  },
  {
    icon: Brain,
    title: 'EMDR Therapy',
    description:
      'Eye Movement Desensitization and Reprocessing — faster than traditional talk therapy.',
    features: [
      'Trauma and PTSD',
      "Anxiety that doesn't respond to other approaches",
      'Persistent negative beliefs about yourself',
      'Phobias and panic',
    ],
    featuresTitle: 'Particularly effective for:',
    cta: 'Learn More About EMDR',
    ctaLink: '/emdr',
    highlight: 'sage',
  },
  {
    icon: Zap,
    title: 'Therapy Intensives',
    description: 'Make significant progress in a single day.',
    longDescription:
      'For clients who want accelerated healing without months of weekly sessions.',
    features: [
      '3-4 hour extended EMDR session',
      'Pre-session preparation call',
      'Post-session integration call',
      'Personalized resources',
    ],
    format: 'Half-day intensive',
    investment: 'Starting at $1,200',
    cta: 'Inquire About Intensives',
    ctaLink: '/contact',
    highlight: 'terracotta',
  },
  {
    icon: Users,
    title: 'Group Programs',
    description: 'Healing in community.',
    longDescription:
      "Small group programs for people working on similar challenges. The power of group work is realizing you're not alone — and learning from others' journeys.",
    current: '"Breaking Free from People-Pleasing" — 8-week group intensive',
    format: '90-minute weekly sessions | Virtual',
    investment: '$1,500',
    cta: 'Join the Waitlist',
    ctaLink: '/contact',
  },
  {
    icon: Building,
    title: 'Corporate Training',
    description: 'For organizations that care about their people.',
    features: [
      'Burnout prevention',
      'Resilience training',
      'Leading through hard decisions',
      'Managing stress without sacrificing performance',
    ],
    featuresTitle: 'I work with HR leaders and management teams on:',
    workshop: '"Resilient Leadership" — half-day intensive',
    cta: 'Request Information',
    ctaLink: '/contact',
  },
]

export function Services() {
  return (
    <Layout>
      <SEO
        title="Services | Tracy Adams, LCSW"
        description="EMDR therapy, IFS therapy, therapy intensives, and group programs for high-achieving women. Individual therapy starting at $350/session."
        keywords="EMDR therapy services, IFS therapy, therapy intensives, group therapy, corporate wellness training Denver"
      />

      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-cream to-white">
        <div className="container">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sage-dark font-medium uppercase tracking-wide mb-4">
              Services
            </p>
            <h1 className="font-serif text-charcoal-dark mb-6">
              Therapy that actually changes things
            </h1>
            <p className="text-xl text-charcoal-light">
              I offer several ways to work together, all focused on helping you
              break free from people-pleasing and build a life that feels
              authentically yours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white pt-0">
        <div className="container">
          <div className="space-y-12">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div
                  className={`rounded-2xl p-8 md:p-10 ${
                    service.featured
                      ? 'bg-blush-light border-2 border-blush'
                      : service.highlight === 'sage'
                      ? 'bg-sage/5 border border-sage/20'
                      : service.highlight === 'terracotta'
                      ? 'bg-terracotta/5 border border-terracotta/20'
                      : 'bg-cream'
                  }`}
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            service.featured
                              ? 'bg-terracotta/20'
                              : service.highlight === 'sage'
                              ? 'bg-sage/20'
                              : service.highlight === 'terracotta'
                              ? 'bg-terracotta/20'
                              : 'bg-white'
                          }`}
                        >
                          <service.icon
                            className={`w-6 h-6 ${
                              service.featured || service.highlight === 'terracotta'
                                ? 'text-terracotta-dark'
                                : service.highlight === 'sage'
                                ? 'text-sage-dark'
                                : 'text-charcoal'
                            }`}
                          />
                        </div>
                        <div>
                          <h2 className="font-serif text-2xl text-charcoal-dark">
                            {service.title}
                          </h2>
                          {service.featured && (
                            <span className="inline-block mt-2 px-3 py-1 bg-terracotta/20 text-terracotta-dark text-sm rounded-full">
                              Most Popular
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-lg text-charcoal mb-6">
                        {service.description}
                      </p>

                      {service.longDescription && (
                        <p className="text-charcoal-light mb-6">
                          {service.longDescription}
                        </p>
                      )}

                      {service.features && (
                        <div className="mb-6">
                          {service.featuresTitle && (
                            <p className="font-medium text-charcoal-dark mb-3">
                              {service.featuresTitle}
                            </p>
                          )}
                          <ul className="grid sm:grid-cols-2 gap-3">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-charcoal-light"
                              >
                                <Check className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {service.current && (
                        <p className="text-charcoal mb-4">
                          <strong>Current offering:</strong> {service.current}
                        </p>
                      )}

                      {service.workshop && (
                        <p className="text-charcoal mb-4">
                          <strong>Featured workshop:</strong> {service.workshop}
                        </p>
                      )}
                    </div>

                    {/* Right Column */}
                    <div className="lg:border-l lg:border-charcoal/10 lg:pl-8 space-y-4">
                      {service.format && (
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-charcoal-light mt-0.5" />
                          <div>
                            <p className="text-sm text-charcoal-light uppercase tracking-wide">
                              Format
                            </p>
                            <p className="text-charcoal">{service.format}</p>
                          </div>
                        </div>
                      )}

                      {service.investment && (
                        <div className="flex items-start gap-3">
                          <CreditCard className="w-5 h-5 text-charcoal-light mt-0.5" />
                          <div>
                            <p className="text-sm text-charcoal-light uppercase tracking-wide">
                              Investment
                            </p>
                            <p className="text-charcoal font-medium">
                              {service.investment}
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="pt-4">
                        <Link
                          to={service.ctaLink}
                          className={`btn w-full justify-center ${
                            service.featured ? 'btn-primary' : 'btn-secondary'
                          }`}
                        >
                          {service.cta}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="section bg-cream">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="font-serif text-charcoal-dark text-center mb-12">
              Investment
            </h2>

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-soft">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-cream-dark">
                  <span className="text-charcoal">Individual Therapy</span>
                  <span className="font-medium text-charcoal-dark">
                    Starting at $350/session
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-cream-dark">
                  <span className="text-charcoal">Therapy Intensives</span>
                  <span className="font-medium text-charcoal-dark">
                    Starting at $1,200
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-cream-dark">
                  <span className="text-charcoal">Group Programs</span>
                  <span className="font-medium text-charcoal-dark">
                    $1,500 (8 weeks)
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-cream-dark">
                  <span className="text-charcoal">Corporate Training</span>
                  <span className="font-medium text-charcoal-dark">
                    Custom pricing
                  </span>
                </div>
              </div>

              <div className="bg-cream rounded-xl p-6 space-y-3">
                <p className="text-charcoal">
                  <strong>Insurance:</strong> I am an out-of-network provider. I
                  can provide a superbill for potential reimbursement.
                </p>
                <p className="text-charcoal-light">
                  <strong>Reduced-fee spots:</strong> A limited number are
                  available — if one opens, you can join the waitlist.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-sage text-white">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-serif text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Book a free 15-minute consultation to discuss which service might
              be the best fit for you.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-sage-dark hover:bg-cream"
            >
              Book Your Free Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  )
}

export default Services
