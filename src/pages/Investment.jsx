import { Link } from 'react-router-dom'
import {
  CreditCard,
  Clock,
  FileText,
  Check,
  ArrowRight,
} from 'lucide-react'
import { SEO, AnimatedSection, Layout } from '../components'

const services = [
  {
    name: 'Individual Therapy',
    price: '$275',
    unit: 'per session',
    description: '50-minute sessions, in-person or telehealth',
    featured: true,
  },
  {
    name: 'Therapy Intensives',
    price: 'Starting at',
    unit: '$1,200',
    description: 'Half-day extended EMDR or IFS sessions for accelerated healing',
  },
  {
    name: 'Corporate Training',
    price: 'Custom',
    unit: 'pricing',
    description: 'Workshops and training for organizations',
  },
]

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer:
      'I am an out-of-network provider, which means I do not bill insurance directly. However, I can provide a superbill (detailed receipt) that you can submit to your insurance company for potential reimbursement. Many PPO plans offer out-of-network benefits.',
  },
  {
    question: 'What is a superbill?',
    answer:
      'A superbill is a detailed receipt that includes all the information your insurance company needs to process a claim. It includes my credentials, your diagnosis, the services provided, and the fees paid. I provide these automatically after each session.',
  },
  {
    question: 'How do I find out my out-of-network benefits?',
    answer:
      'Call the member services number on your insurance card and ask: "What are my out-of-network benefits for outpatient mental health services?" Ask about your deductible, reimbursement rate, and any session limits.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'I require 48 hours notice for cancellations. Sessions cancelled with less than 48 hours notice or no-shows are charged the full session fee. I understand life happens — if you have an emergency, please reach out.',
  },
  {
    question: 'What forms of payment do you accept?',
    answer:
      'I accept credit cards, debit cards, and HSA/FSA cards. Payment is due at the time of service.',
  },
]

export function Investment() {
  return (
    <Layout>
      <SEO
        title="Investment & Fees | Tracy Adams, LCSW"
        description="Therapy investment and fees for Tracy Adams, LCSW. Individual therapy starting at $275/session. Information about insurance, superbills, and payment options."
        keywords="therapy cost Denver, EMDR therapy fees, IFS therapy cost, therapy investment, out of network therapy"
      />

      {/* Hero Section */}
      <section className="section relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/investment-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/90 to-cream/75" />
        <div className="container relative z-10">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sage-dark font-medium uppercase tracking-wide mb-4">
              Investment
            </p>
            <h1 className="font-serif text-charcoal-dark mb-6">
              Investment in Your Healing
            </h1>
            <p className="text-xl text-charcoal-light">
              Therapy is an investment in yourself — in your peace, your
              relationships, and your future. Here's what to expect.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section bg-white pt-0">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <AnimatedSection key={service.name} delay={index * 0.1}>
                  <div
                    className={`rounded-2xl p-8 h-full ${
                      service.featured
                        ? 'bg-sage text-white'
                        : 'bg-cream'
                    }`}
                  >
                    {service.featured && (
                      <span className="inline-block mb-4 px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                        Most Common
                      </span>
                    )}
                    <h3
                      className={`font-serif text-xl mb-2 ${
                        service.featured ? 'text-white' : 'text-charcoal-dark'
                      }`}
                    >
                      {service.name}
                    </h3>
                    <div className="mb-4">
                      <span
                        className={`text-4xl font-serif ${
                          service.featured ? 'text-white' : 'text-charcoal-dark'
                        }`}
                      >
                        {service.price}
                      </span>
                      <span
                        className={`text-sm ml-2 ${
                          service.featured ? 'text-white/70' : 'text-charcoal-light'
                        }`}
                      >
                        {service.unit}
                      </span>
                    </div>
                    <p
                      className={
                        service.featured ? 'text-white/80' : 'text-charcoal-light'
                      }
                    >
                      {service.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment Info */}
      <section className="section bg-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-serif text-charcoal-dark text-center mb-12">
                Insurance & Payment
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-sage/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-sage-dark" />
                    </div>
                    <h3 className="font-serif text-lg text-charcoal-dark">
                      Out-of-Network
                    </h3>
                  </div>
                  <p className="text-charcoal-light">
                    I'm an out-of-network provider. I provide superbills for
                    potential insurance reimbursement.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-terracotta/10 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-terracotta-dark" />
                    </div>
                    <h3 className="font-serif text-lg text-charcoal-dark">
                      Payment Options
                    </h3>
                  </div>
                  <p className="text-charcoal-light">
                    Credit cards, debit cards, and HSA/FSA cards accepted.
                    Payment due at time of service.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blush flex items-center justify-center">
                      <Clock className="w-5 h-5 text-terracotta-dark" />
                    </div>
                    <h3 className="font-serif text-lg text-charcoal-dark">
                      Cancellation Policy
                    </h3>
                  </div>
                  <p className="text-charcoal-light">
                    48 hours notice required. Late cancellations and no-shows
                    are charged the full session fee.
                  </p>
                </div>

              </div>
            </AnimatedSection>

            {/* FAQ Section */}
            <AnimatedSection>
              <h2 className="font-serif text-charcoal-dark text-center mb-8">
                Common Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl p-6">
                    <h4 className="font-medium text-charcoal-dark mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-charcoal-light">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Good Fit Callout */}
      <section className="section bg-white">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="bg-blush-light rounded-2xl p-8 md:p-10">
              <h2 className="font-serif text-charcoal-dark mb-6">
                Is This Investment Right for You?
              </h2>
              <p className="text-lg text-charcoal mb-6">
                Therapy is a significant investment of both time and money. It
                works best when you're:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Ready to prioritize your mental health',
                  'Willing to do the work between sessions',
                  'Open to trying new approaches',
                  'Committed to showing up consistently',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-charcoal"
                  >
                    <Check className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-charcoal-light italic">
                Not sure if now is the right time? Let's talk about it. The
                consultation is free and there's no pressure.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-sage text-white">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-serif text-white mb-6">
              Ready to invest in yourself?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Book a free 15-minute consultation. We'll talk about what's going
              on and whether we're a good fit.
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

export default Investment
