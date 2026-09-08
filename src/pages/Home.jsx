import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Brain,
  Heart,
  Sparkles,
  Check,
  MapPin,
  Award,
  Cloud,
} from 'lucide-react'
import { SEO, AnimatedSection, Layout } from '../components'
import { cn } from '../lib/utils'

export function Home() {
  return (
    <Layout>
      <SEO
        title="Therapist in Denver | EMDR Therapist & Grief Therapist | Tracy Adams, LCSW"
        description="Looking for a therapist in Denver? Tracy Adams offers EMDR therapy for trauma, grief, anxiety, and people-pleasing. Specializing in traumatic loss. Licensed in CO, CA, FL."
        keywords="therapist in Denver, therapist near me Denver, therapist Denver, EMDR therapist, grief therapist Denver, grief counseling Denver, traumatic loss therapist, EMDR therapy Denver, IFS therapy Denver, anxiety therapist Denver, trauma therapist Denver, telehealth therapist Colorado California Florida, high functioning anxiety therapist, therapist for high achievers Denver, therapist accepting new clients Denver"
        path="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/path-trees.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/70" />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-charcoal-dark mb-6"
            >
              Stop people-pleasing.
              <br />
              <span className="text-sage-dark">Start living.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-charcoal-light mb-10 leading-relaxed"
            >
              EMDR therapy for trauma, grief, anxiety, and the patterns that keep
              you stuck.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="btn btn-primary">
                Book a Free Consultation
              </Link>
              <Link to="/emdr" className="btn btn-secondary">
                Learn About EMDR
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Empathy Hook Section */}
      <section className="section bg-white">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-charcoal-dark mb-8">
              Did you grow up as "the responsible one"?
            </h2>

            <div className="text-lg text-charcoal leading-relaxed space-y-6 text-left md:text-center">
              <p>
                You were the kid who held it together when things fell apart.
                The one who managed other people's emotions before you were old
                enough to understand your own.
              </p>
              <p>
                Now you're successful by every external measure — but inside,
                you're <em>exhausted</em>. You can say no in the office but not
                in relationships. You feel like a fraud. And traditional therapy
                hasn't really changed anything.
              </p>
              <p className="font-serif text-2xl text-sage-dark italic pt-4">
                There's a different way forward.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Approach Section */}
      <section className="section bg-cream">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-charcoal-dark">The Approach</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: EMDR */}
            <AnimatedSection delay={0.1}>
              <div className="card h-full">
                <div className="w-14 h-14 rounded-xl bg-sage/10 flex items-center justify-center mb-6">
                  <Brain className="w-7 h-7 text-sage-dark" />
                </div>
                <h3 className="font-serif text-xl text-charcoal-dark mb-4">
                  EMDR Therapy
                </h3>
                <p className="text-charcoal-light mb-6">
                  Heal trauma faster than talk therapy alone. EMDR helps your
                  brain process stuck memories so they stop running your life.
                </p>
                <Link
                  to="/emdr"
                  className="inline-flex items-center gap-2 text-sage-dark font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Card 2: IFS */}
            <AnimatedSection delay={0.2}>
              <div className="card h-full">
                <div className="w-14 h-14 rounded-xl bg-terracotta/10 flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-terracotta-dark" />
                </div>
                <h3 className="font-serif text-xl text-charcoal-dark mb-4">
                  IFS (Parts Work)
                </h3>
                <p className="text-charcoal-light mb-6">
                  Understand why you people-please, perfectionism, and
                  self-criticize — and learn to lead from your authentic Self.
                </p>
                <Link
                  to="/ifs"
                  className="inline-flex items-center gap-2 text-sage-dark font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Card 3: Grief */}
            <AnimatedSection delay={0.3}>
              <div className="card h-full">
                <div className="w-14 h-14 rounded-xl bg-blush flex items-center justify-center mb-6">
                  <Cloud className="w-7 h-7 text-terracotta-dark" />
                </div>
                <h3 className="font-serif text-xl text-charcoal-dark mb-4">
                  Grief & Loss
                </h3>
                <p className="text-charcoal-light mb-6">
                  Specialized support for anticipatory grief, sudden loss, and
                  the death of a child. You don't have to carry this alone.
                </p>
                <Link
                  to="/grief"
                  className="inline-flex items-center gap-2 text-sage-dark font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Card 4: Tracy */}
            <AnimatedSection delay={0.4}>
              <div className="card h-full bg-blush-light border-0">
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-terracotta" />
                </div>
                <h3 className="font-serif text-xl text-charcoal-dark mb-4">
                  A Therapist Who Gets It
                </h3>
                <p className="text-charcoal-light mb-6 italic">
                  "I don't just understand this clinically — I've lived it."
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sage-dark font-medium hover:gap-3 transition-all"
                >
                  Meet Tracy <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Who I Help Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <h2 className="font-serif text-charcoal-dark mb-8">
                I work with people who are...
              </h2>
              <ul className="space-y-4">
                {[
                  'Grieving the loss of someone they love',
                  'Exhausted from people-pleasing and perfectionism',
                  "Carrying anxiety that won't respond to traditional approaches",
                  'Processing trauma from the past or present',
                  'Navigating a terminal diagnosis (their own or a loved one\'s)',
                  'Ready for therapy that actually changes things',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-lg text-charcoal"
                  >
                    <Check className="w-5 h-5 text-sage mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-medium">
                <img
                  src="/tracyphoto1.jpg"
                  alt="Tracy Adams, LCSW - Therapist in Denver"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="py-12 bg-chocolate text-charcoal-dark">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <AnimatedSection delay={0.1}>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-sage-dark mb-3" />
                <p className="text-sm text-charcoal-dark uppercase tracking-wide mb-1">
                  Licensed In
                </p>
                <p className="font-medium text-charcoal-dark">Colorado | California | Florida</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col items-center">
                <Brain className="w-6 h-6 text-sage-dark mb-3" />
                <p className="text-sm text-charcoal-dark uppercase tracking-wide mb-1">
                  Trained In
                </p>
                <p className="font-medium text-charcoal-dark">EMDR | IFS (Internal Family Systems)</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col items-center">
                <Award className="w-6 h-6 text-sage-dark mb-3" />
                <p className="text-sm text-charcoal-dark uppercase tracking-wide mb-1">
                  Featured
                </p>
                <p className="font-medium text-charcoal-dark">The Rise Journey Speaker & Expert</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="section bg-sage text-white">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-serif text-white mb-6">
              Ready to start healing?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              Book a free 15-minute consultation. We'll talk about what's
              happening and whether we're a good fit.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-sage-dark hover:bg-cream hover:text-sage-dark"
            >
              Book Your Free Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  )
}

export default Home
