import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Brain,
  Check,
  ArrowRight,
  ChevronDown,
  MapPin,
  Clock,
  Shield,
} from 'lucide-react'
import { Disclosure, Transition } from '@headlessui/react'
import { SEO, AnimatedSection, Layout } from '../components'
import { cn } from '../lib/utils'

const emdrBenefits = [
  'Have experienced trauma (recent or from childhood)',
  "Struggle with anxiety that doesn't respond to other approaches",
  'Have persistent negative beliefs about yourself ("I\'m not good enough," "I\'m unlovable")',
  'Experience flashbacks, nightmares, or intrusive memories',
  "Feel stuck in patterns you can't seem to change",
  "Have tried talk therapy but haven't seen the results you wanted",
]

const emdrPhases = [
  {
    number: 1,
    title: 'History & Planning',
    description: 'We identify the memories and beliefs to work on',
  },
  {
    number: 2,
    title: 'Preparation',
    description: 'I teach you skills to manage distress between sessions',
  },
  {
    number: 3,
    title: 'Assessment',
    description:
      'We identify the specific memory, emotions, and body sensations',
  },
  {
    number: 4,
    title: 'Desensitization',
    description:
      'Using bilateral stimulation (eye movements, tapping, or sounds), we process the memory',
  },
  {
    number: 5,
    title: 'Installation',
    description: 'We strengthen positive beliefs to replace negative ones',
  },
  {
    number: 6,
    title: 'Body Scan',
    description: 'We check for any remaining physical tension',
  },
  {
    number: 7,
    title: 'Closure',
    description: "We ensure you're stable before leaving session",
  },
  {
    number: 8,
    title: 'Reevaluation',
    description: 'We check progress and plan next steps',
  },
]

const faqs = [
  {
    question: 'Is EMDR evidence-based?',
    answer:
      'Yes. EMDR is recognized by the World Health Organization, the American Psychological Association, and the VA as an effective treatment for trauma and PTSD.',
  },
  {
    question: 'How is EMDR different from talk therapy?',
    answer:
      "Traditional talk therapy helps you understand your problems. EMDR helps your brain actually reprocess them. Many clients find they can resolve issues in months that they'd spent years talking about.",
  },
  {
    question: 'Does EMDR work for anxiety, not just trauma?',
    answer:
      'Yes. EMDR can be effective for anxiety, phobias, performance anxiety, and persistent negative beliefs — even if you don\'t have a "big T" trauma.',
  },
  {
    question: 'Will I have to talk about my trauma in detail?',
    answer:
      "No. EMDR doesn't require you to describe traumatic events in detail. You can process memories without verbalizing everything.",
  },
  {
    question: 'How many sessions will I need?',
    answer:
      "It varies. Some issues resolve in 6-8 sessions; others take longer. We'll discuss expectations in your consultation.",
  },
  {
    question: 'Is EMDR done in-person or can I do it virtually?',
    answer:
      "Both. I offer EMDR in-person in Denver and via telehealth (I'm licensed in CA, CO, and FL). Virtual EMDR is effective — we adapt the bilateral stimulation for video sessions.",
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

export function EMDR() {
  return (
    <Layout>
      <SEO
        title="EMDR Therapist Denver | EMDR Therapy Colorado | Tracy Adams, LCSW"
        description="Looking for an EMDR therapist in Denver? Tracy Adams provides EMDR therapy for trauma, anxiety, and PTSD. Heal faster than talk therapy alone. Book a free consultation."
        keywords="EMDR therapist, EMDR therapist Denver, EMDR therapist Colorado, EMDR therapy Denver, EMDR therapy Colorado, trauma therapist Denver, trauma therapist near me, PTSD therapist Denver, eye movement therapy, EMDR telehealth Colorado California Florida"
        path="/emdr"
      />

      {/* FAQ Schema */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="section relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/nature-6.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/90 to-cream/75" />
        <div className="container relative z-10">
          <AnimatedSection className="max-w-3xl">
            <p className="text-sage-dark font-medium uppercase tracking-wide mb-4">
              EMDR Therapy
            </p>
            <h1 className="font-serif text-charcoal-dark mb-6">
              EMDR Therapy in Denver, Colorado
            </h1>
            <p className="text-2xl text-charcoal-light font-serif italic">
              Heal trauma faster than talk therapy alone
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What is EMDR */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-serif text-charcoal-dark mb-8">
                What is EMDR?
              </h2>

              <div className="text-lg text-charcoal leading-relaxed space-y-6">
                <p>
                  <strong>
                    EMDR (Eye Movement Desensitization and Reprocessing)
                  </strong>{' '}
                  is a therapy approach that helps your brain process traumatic
                  and distressing memories.
                </p>

                <div className="bg-cream rounded-xl p-6 my-8">
                  <p className="font-serif text-xl text-charcoal-dark">
                    Think of it this way: when something overwhelming happens,
                    your brain sometimes stores that memory "wrong" — with all
                    the emotions, sensations, and beliefs still attached.
                    That's why certain things can trigger you years later as if
                    they're happening now.
                  </p>
                </div>

                <p>
                  EMDR helps your brain reprocess these memories so they become
                  just memories — things that happened in the past, not things
                  that control your present.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Is EMDR Right for You */}
      <section className="section bg-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-serif text-charcoal-dark mb-8">
                Is EMDR Right for You?
              </h2>

              <p className="text-lg text-charcoal mb-8">
                EMDR may be helpful if you:
              </p>

              <ul className="space-y-4">
                {emdrBenefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-lg text-charcoal"
                  >
                    <Check className="w-6 h-6 text-sage mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How EMDR Works */}
      <section className="section bg-white">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-charcoal-dark">How EMDR Works</h2>
            <p className="text-lg text-charcoal-light mt-4">
              EMDR therapy follows 8 phases:
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {emdrPhases.map((phase, index) => (
                <AnimatedSection key={phase.number} delay={index * 0.05}>
                  <div className="bg-cream rounded-xl p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-medium">
                          {phase.number}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-charcoal-dark mb-2">
                          {phase.title}
                        </h3>
                        <p className="text-charcoal-light">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="mt-8 text-center">
              <p className="text-charcoal-light italic">
                Most clients notice significant changes within 6-12 sessions,
                though everyone's timeline is different.
              </p>
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
                  In our work together, I combine EMDR with IFS (Internal Family
                  Systems) to help you understand <em>why</em> you developed
                  certain patterns and to heal the wounds underneath them.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 my-8">
                  <div className="bg-white rounded-xl p-5 text-center">
                    <Shield className="w-8 h-8 text-sage mx-auto mb-3" />
                    <h4 className="font-medium text-charcoal-dark mb-2">
                      Collaborative
                    </h4>
                    <p className="text-sm text-charcoal-light">
                      You're in control of the pace
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 text-center">
                    <Brain className="w-8 h-8 text-sage mx-auto mb-3" />
                    <h4 className="font-medium text-charcoal-dark mb-2">
                      Trauma-Informed
                    </h4>
                    <p className="text-sm text-charcoal-light">
                      I won't push you faster than you're ready
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-5 text-center">
                    <ArrowRight className="w-8 h-8 text-sage mx-auto mb-3" />
                    <h4 className="font-medium text-charcoal-dark mb-2">
                      Results-Focused
                    </h4>
                    <p className="text-sm text-charcoal-light">
                      We're here to create change, not just talk
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
      <section className="section bg-sage text-white">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-serif text-white mb-6">
              Curious if EMDR could help you?
            </h2>
            <Link
              to="/contact"
              className="btn bg-white text-sage-dark hover:bg-cream"
            >
              Book a Free 15-Minute Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  )
}

export default EMDR
