import { Link } from 'react-router-dom'
import {
  User,
  Brain,
  Heart,
  Zap,
  Building,
  ArrowRight,
  Check,
  Clock,
  CreditCard,
} from 'lucide-react'
import { SEO, AnimatedSection, Layout } from '../components'

const services = [
  {
    icon: User,
    title: 'Individual Therapy',
    description:
      'For high-achieving men and women ready to stop people-pleasing and start living authentically.',
    features: [
      'Process trauma and stuck memories',
      'Understand your "parts" (the perfectionist, the people-pleaser, the critic)',
      'Set boundaries without guilt',
      'Build a relationship with your authentic Self',
    ],
    format: '50-minute sessions | In-person (Denver) or Telehealth (CA, CO, FL)',
    investment: 'Starting at $200/session',
    cta: 'Book a Consultation',
    ctaLink: '/contact',
    featured: true,
  },
  {
    icon: Heart,
    title: 'IFS Therapy (Internal Family Systems)',
    description:
      'Understand and heal your inner "parts" — the perfectionist, the people-pleaser, the inner critic — and reconnect with your authentic Self.',
    longDescription:
      'IFS is a transformative, evidence-based approach that helps you understand why you do what you do. Instead of fighting against your patterns, you learn to work with the different parts of yourself with curiosity and compassion.',
    features: [
      'Understand why you people-please, perfectionism, and self-criticize',
      'Heal the wounded parts that drive anxious patterns',
      'Access your calm, compassionate core Self',
      'Build internal trust and self-leadership',
      'Transform your inner critic into an inner ally',
      'Break cycles passed down through generations',
    ],
    featuresTitle: 'IFS helps you:',
    cta: 'Learn More About IFS',
    ctaLink: '/ifs',
    highlight: 'terracotta',
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
    description: 'Half-day extended EMDR or IFS sessions for accelerated healing.',
    longDescription:
      'For clients who want accelerated healing without months of weekly sessions.',
    features: [
      '3-4 hour extended EMDR or IFS session',
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
        description="EMDR therapy, IFS therapy, therapy intensives, and corporate training for high-achieving men and women. Individual therapy starting at $200/session."
        keywords="EMDR therapy services, IFS therapy, therapy intensives, group therapy, corporate wellness training Denver"
      />

      {/* Hero Section */}
      <section className="section relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: 'url(/pampas-grass.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/90 to-cream/80" />
        <div className="container relative z-10">
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
