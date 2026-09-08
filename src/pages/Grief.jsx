import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Heart,
  Check,
  ArrowRight,
  ChevronDown,
  MapPin,
  Clock,
} from 'lucide-react'
import { Disclosure, Transition } from '@headlessui/react'
import { SEO, AnimatedSection, Layout } from '../components'
import { cn } from '../lib/utils'

const griefTypes = [
  {
    title: 'Anticipatory Grief',
    description:
      'When you or someone you love receives a terminal diagnosis, grief begins before the loss. I help you navigate the complex emotions of loving someone while preparing to lose them.',
  },
  {
    title: 'Sudden Loss',
    description:
      'When death comes without warning, the shock can be overwhelming. There was no time to prepare, no chance to say goodbye. I help you process the trauma alongside the grief.',
  },
  {
    title: 'Loss of a Child',
    description:
      'There is no loss like losing a child. Whether through miscarriage, stillbirth, or the death of a child at any age, this grief requires specialized, compassionate support.',
  },
]

const griefSigns = [
  'Feeling numb or disconnected',
  'Overwhelming waves of emotion',
  'Difficulty functioning in daily life',
  'Guilt, anger, or regret',
  'Physical symptoms (exhaustion, chest pain, difficulty breathing)',
  'Feeling like you should be "over it" by now',
  'Avoiding reminders of your loss',
  'Difficulty imagining a future',
]

const faqs = [
  {
    question: 'How is grief therapy different from regular therapy?',
    answer:
      'Grief therapy is specifically focused on helping you process loss and find a way forward. I use EMDR and IFS to help you work through traumatic aspects of your loss, not just talk about it. We also focus on rebuilding meaning and connection in your life.',
  },
  {
    question: 'How long does grief therapy take?',
    answer:
      "Grief doesn't follow a timeline, and neither does grief therapy. Some clients find significant relief in a few months; others benefit from longer-term support. We'll work at your pace and check in regularly about your goals.",
  },
  {
    question: "Is it normal to still be grieving after a year? Two years?",
    answer:
      "Yes. The idea that grief has a timeline or that you should 'move on' after a certain period is a myth. Grief changes over time, but it doesn't disappear. I help you learn to carry your grief in a way that allows you to also live your life.",
  },
  {
    question: 'Can EMDR help with grief?',
    answer:
      "Yes. EMDR can be particularly helpful when grief is complicated by trauma — such as sudden or violent death, being present at the death, or unresolved issues with the person who died. It can help process the traumatic aspects so you can access the love and memories underneath.",
  },
  {
    question: 'I feel guilty for moving forward. Is that normal?',
    answer:
      "Very normal. Many people feel that moving forward with their life somehow betrays the person they lost. Part of grief work is understanding that living your life fully doesn't mean forgetting or loving less.",
  },
  {
    question: 'Do you work with families or just individuals?',
    answer:
      'I work primarily with individuals, though I understand that grief affects the whole family system. I can help you navigate family dynamics around grief and communicate your needs to loved ones.',
  },
]

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

export function Grief() {
  return (
    <Layout>
      <SEO
        title="Grief Therapist Denver | Traumatic Loss Therapy | Tracy Adams, LCSW"
        description="Grief therapy for anticipatory grief, sudden loss, and loss of a child. Specialized support for traumatic loss in Denver. EMDR and IFS trained. Book a free consultation."
        keywords="grief therapist Denver, grief counseling Denver, traumatic loss therapy, child loss therapist, anticipatory grief therapy, bereavement counseling Denver, grief therapy Colorado, grief therapy for parents, sudden loss counseling Denver, bereavement therapy Denver, grief therapist near me, therapist for loss of a child"
        path="/grief"
      />

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
            <p className="text-terracotta-dark font-medium uppercase tracking-wide mb-4">
              Grief & Traumatic Loss
            </p>
            <h1 className="font-serif text-charcoal-dark mb-6">
              Grief Therapy in Denver
            </h1>
            <p className="text-2xl text-charcoal-light font-serif italic">
              You don't have to carry this alone
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="text-lg text-charcoal leading-relaxed space-y-6">
                <p>
                  Grief is not a problem to be solved. It's the natural response
                  to losing someone or something you love deeply. But when grief
                  becomes overwhelming — when it interferes with your ability to
                  function, connect, or find any moments of peace — you deserve
                  support.
                </p>

                <div className="bg-cream rounded-xl p-6 my-8">
                  <p className="font-serif text-xl text-charcoal-dark">
                    I specialize in helping people navigate the most painful
                    losses: anticipatory grief, sudden death, and the loss of a
                    child. These losses often carry trauma alongside the grief,
                    and both need to be addressed.
                  </p>
                </div>

                <p>
                  Using EMDR and IFS, I help you process not just the loss
                  itself, but the traumatic aspects that may be keeping you
                  stuck — the images you can't unsee, the guilt you can't shake,
                  the future you can no longer imagine.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Types of Grief */}
      <section className="section bg-cream">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-charcoal-dark">
              Types of Loss I Specialize In
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {griefTypes.map((type, index) => (
                <AnimatedSection key={type.title} delay={index * 0.1}>
                  <div className="bg-white rounded-xl p-6 h-full">
                    <h3 className="font-serif text-xl text-charcoal-dark mb-3">
                      {type.title}
                    </h3>
                    <p className="text-charcoal-light">{type.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signs You May Need Support */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-serif text-charcoal-dark mb-8">
                Signs You May Benefit from Grief Therapy
              </h2>

              <p className="text-lg text-charcoal mb-8">
                Grief therapy may help if you're experiencing:
              </p>

              <ul className="grid sm:grid-cols-2 gap-4">
                {griefSigns.map((sign, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-charcoal"
                  >
                    <Check className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                    {sign}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="section bg-blush-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="font-serif text-charcoal-dark mb-8">
                My Approach to Grief Therapy
              </h2>

              <div className="text-lg text-charcoal leading-relaxed space-y-6">
                <p>
                  I don't believe in "stages" of grief or timelines for healing.
                  Grief is not linear, and there's no right way to do it. What I
                  offer is a space where all of your feelings are welcome — the
                  sadness, the anger, the guilt, the relief, the love.
                </p>

                <p>
                  I combine <strong>EMDR</strong> to help process traumatic
                  aspects of your loss with <strong>IFS</strong> to understand
                  and work with the different parts of you that are struggling.
                  This approach helps you:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-terracotta mt-1 flex-shrink-0" />
                    <span>Process traumatic memories and images</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-terracotta mt-1 flex-shrink-0" />
                    <span>Work through guilt, regret, and unfinished business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-terracotta mt-1 flex-shrink-0" />
                    <span>Find ways to maintain connection with who you've lost</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-terracotta mt-1 flex-shrink-0" />
                    <span>Rebuild meaning and hope for your future</span>
                  </li>
                </ul>
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
              You don't have to grieve alone
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Book a free 15-minute consultation to talk about what you're going
              through and how I might help.
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

export default Grief
