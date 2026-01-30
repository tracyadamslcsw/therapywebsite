import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Heart,
  Check,
  ArrowRight,
  ChevronDown,
  MapPin,
  Clock,
  Shield,
  Users,
  Sparkles,
} from 'lucide-react'
import { Disclosure, Transition } from '@headlessui/react'
import { SEO, AnimatedSection, Layout } from '../components'
import { cn } from '../lib/utils'

const ifsBenefits = [
  'Struggle with people-pleasing or perfectionism',
  'Have a harsh inner critic that never lets up',
  'Feel like different "parts" of you are at war',
  'Experience anxiety, shame, or self-doubt',
  'Want to understand why you repeat certain patterns',
  'Have tried other approaches but still feel stuck',
]

const ifsConcepts = [
  {
    title: 'Parts',
    description:
      'We all have different "parts" — the perfectionist, the people-pleaser, the inner critic, the anxious part. These aren\'t flaws; they\'re protective strategies that developed for good reasons.',
  },
  {
    title: 'Protectors',
    description:
      'Some parts work hard to protect you from pain — by pushing you to achieve, avoid conflict, or stay in control. They mean well, even when their methods cause problems.',
  },
  {
    title: 'Exiles',
    description:
      'Beneath the protectors are wounded parts (exiles) that carry pain from the past — feelings of worthlessness, shame, or fear that got pushed away.',
  },
  {
    title: 'Self',
    description:
      'At your core is the Self — a calm, compassionate, curious presence that can heal your wounded parts and lead your internal system with wisdom.',
  },
]

const faqs = [
  {
    question: 'What does IFS stand for?',
    answer:
      'IFS stands for Internal Family Systems. It\'s called this because we all have an internal "family" of parts, each with different roles, feelings, and perspectives — similar to members of a family system.',
  },
  {
    question: 'Is IFS evidence-based?',
    answer:
      'Yes. IFS is recognized as an evidence-based practice by SAMHSA\'s National Registry of Evidence-based Programs and Practices. Research has shown its effectiveness for trauma, depression, anxiety, and other conditions. You can find more research and resources at ifs-institute.com.',
  },
  {
    question: 'How is IFS different from other therapies?',
    answer:
      'Unlike approaches that try to eliminate or control difficult thoughts and feelings, IFS helps you understand and heal the parts of you that are struggling. It\'s a compassionate, non-pathologizing approach that sees all parts as trying to help, even when they cause problems.',
  },
  {
    question: 'Do I have to have trauma to benefit from IFS?',
    answer:
      'No. While IFS is highly effective for trauma, it\'s helpful for anyone who struggles with inner conflict, self-criticism, anxiety, relationship patterns, or feeling disconnected from themselves.',
  },
  {
    question: 'What happens in an IFS session?',
    answer:
      'In a typical session, I\'ll guide you to notice what you\'re experiencing internally and help you connect with different parts with curiosity rather than judgment. We work at your pace, building a relationship with your parts and eventually helping heal the wounds they carry.',
  },
  {
    question: 'How long does IFS therapy take?',
    answer:
      'It varies depending on your goals and what you\'re working on. Some clients see significant shifts in a few months; others choose longer-term work for deeper healing. We\'ll discuss expectations in your consultation.',
  },
]

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export function IFS() {
  return (
    <Layout>
      <SEO
        title="IFS Therapy Denver, Colorado | Internal Family Systems | Tracy Adams, LCSW"
        description="IFS therapy (Internal Family Systems) in Denver, Colorado. Heal your inner critic, understand your parts, and reconnect with your authentic Self. Licensed in CO, CA, and FL."
        keywords="IFS therapy Denver, Internal Family Systems Colorado, parts work therapy, inner critic therapy, IFS therapist Denver"
      />

      {/* FAQ Schema */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="section relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/winding-path.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/90 to-cream/75" />
        <div className="container relative z-10">
          <AnimatedSection className="max-w-3xl">
            <p className="text-terracotta-dark font-medium uppercase tracking-wide mb-4">
              IFS Therapy
            </p>
            <h1 className="font-serif text-charcoal-dark mb-6">
              IFS Therapy in Denver, Colorado
            </h1>
            <p className="text-2xl text-charcoal-light font-serif italic">
              Understand your parts. Heal your wounds. Lead from your Self.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What is IFS */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-serif text-charcoal-dark mb-8">
                What is IFS?
              </h2>

              <div className="text-lg text-charcoal leading-relaxed space-y-6">
                <p>
                  <strong>IFS (Internal Family Systems)</strong> is a
                  transformative, evidence-based approach to therapy developed by
                  Dr. Richard Schwartz that helps you understand and heal by
                  working with different "parts" of yourself. I'm a trained IFS
                  practitioner listed in the{' '}
                  <a
                    href="https://ifs-institute.com/practitioners/all/186957"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terracotta-dark hover:text-terracotta underline"
                  >
                    IFS Institute Directory
                  </a>
                  .
                </p>

                <div className="bg-cream rounded-xl p-6 my-8">
                  <p className="font-serif text-xl text-charcoal-dark">
                    You know that voice that tells you you're not good enough?
                    The one that pushes you to be perfect? The part that says
                    yes when you want to say no? In IFS, we don't try to silence
                    these parts — we get curious about them.
                  </p>
                </div>

                <p>
                  IFS recognizes that these patterns aren't character flaws —
                  they're protective strategies that developed for good reasons,
                  often in childhood. By understanding and healing these parts,
                  you can finally break free from the cycles that have kept you
                  stuck.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="section bg-cream">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-charcoal-dark">
              The IFS Model
            </h2>
            <p className="text-lg text-charcoal-light mt-4">
              Understanding your internal system
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {ifsConcepts.map((concept, index) => (
                <AnimatedSection key={concept.title} delay={index * 0.1}>
                  <div className="bg-white rounded-xl p-6 h-full">
                    <h3 className="font-serif text-xl text-charcoal-dark mb-3">
                      {concept.title}
                    </h3>
                    <p className="text-charcoal-light">{concept.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Is IFS Right for You */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-serif text-charcoal-dark mb-8">
                Is IFS Right for You?
              </h2>

              <p className="text-lg text-charcoal mb-8">
                IFS may be helpful if you:
              </p>

              <ul className="space-y-4">
                {ifsBenefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-lg text-charcoal"
                  >
                    <Check className="w-6 h-6 text-terracotta mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What to Expect with Tracy */}
      <section className="section bg-blush-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-serif text-charcoal-dark mb-8">
                What to Expect with Tracy
              </h2>

              <div className="text-lg text-charcoal leading-relaxed space-y-6">
                <p>
                  I often combine IFS with EMDR to help you both understand your
                  patterns <em>and</em> heal the wounds underneath them. This
                  combination is particularly powerful for people-pleasers and
                  perfectionists.
                </p>

                <p className="font-serif text-xl text-charcoal-dark italic">
                  "I'm a people-pleaser in recovery myself. I know what it's
                  like to have a part that can't say no, a part that's terrified
                  of disappointing anyone, and a critic that's never satisfied.
                  I've done this work — and I can guide you through it."
                </p>

                <div className="grid sm:grid-cols-3 gap-4 my-8">
                  <div className="bg-white rounded-xl p-5 text-center">
                    <Heart className="w-8 h-8 text-terracotta mx-auto mb-3" />
                    <h4 className="font-medium text-charcoal-dark mb-2">
                      Compassionate
                    </h4>
                    <p className="text-sm text-charcoal-light">
                      No part of you is bad or broken
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 text-center">
                    <Shield className="w-8 h-8 text-terracotta mx-auto mb-3" />
                    <h4 className="font-medium text-charcoal-dark mb-2">
                      Safe
                    </h4>
                    <p className="text-sm text-charcoal-light">
                      We go at your pace, always
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 text-center">
                    <Sparkles className="w-8 h-8 text-terracotta mx-auto mb-3" />
                    <h4 className="font-medium text-charcoal-dark mb-2">
                      Transformative
                    </h4>
                    <p className="text-sm text-charcoal-light">
                      Real, lasting change is possible
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mt-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-terracotta mt-1" />
                    <div>
                      <p className="font-medium text-charcoal-dark">In-Person</p>
                      <p className="text-charcoal-light">
                        Denver (Mondays & Wednesdays)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-sage-dark mt-1" />
                    <div>
                      <p className="font-medium text-charcoal-dark">Telehealth</p>
                      <p className="text-charcoal-light">
                        California, Colorado, Florida
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-serif text-charcoal-dark text-center mb-12">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Disclosure key={index}>
                    {({ open }) => (
                      <div className="bg-cream rounded-xl overflow-hidden">
                        <Disclosure.Button className="flex justify-between items-center w-full px-6 py-5 text-left">
                          <span className="font-medium text-charcoal-dark pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={cn(
                              'w-5 h-5 text-charcoal-light flex-shrink-0 transition-transform',
                              open && 'rotate-180'
                            )}
                          />
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="px-6 pb-5 text-charcoal-light">
                            {faq.answer}
                          </Disclosure.Panel>
                        </Transition>
                      </div>
                    )}
                  </Disclosure>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-terracotta text-white">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-serif text-white mb-6">
              Ready to meet your parts?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Book a free 15-minute consultation to see if IFS is right for you.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-terracotta-dark hover:bg-cream"
            >
              Book a Free Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  )
}

export default IFS
