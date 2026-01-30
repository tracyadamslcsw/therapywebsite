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
} from 'lucide-react'
import { SEO, AnimatedSection, Layout } from '../components'
import { cn } from '../lib/utils'

export function Home() {
  return (
    <Layout>
      <SEO
        title="Tracy Adams, LCSW | EMDR Therapist Denver"
        description="EMDR and IFS therapy for high-achieving men and women in Denver, Colorado, California, and Florida. Stop people-pleasing. Start living. Book a free consultation."
        keywords="EMDR therapy Denver, EMDR therapist Colorado, IFS therapy, people pleasing therapy, anxiety therapist Denver, trauma therapy, perfectionism therapy"
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
              EMDR & IFS therapy for high-achieving men and women who are successful
              on paper but exhausted inside.
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
                you're <em>exhausted</em>. You can't say no. You feel like a
                fraud. And traditional therapy hasn't really changed anything.
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

          <div className="grid md:grid-cols-3 gap-8">
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
                  to="/services"
                  className="inline-flex items-center gap-2 text-sage-dark font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Card 3: Tracy */}
            <AnimatedSection delay={0.3}>
              <div className="card h-full bg-blush-light border-0">
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-terracotta" />
                </div>
                <h3 className="font-serif text-xl text-charcoal-dark mb-4">
                  A Therapist Who Gets It
                </h3>
                <p className="text-charcoal-light mb-6 italic">
                  "I'm a people-pleaser and perfectionist in recovery. I don't
                  just understand this clinically — I've lived it."
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
                I work with high-achieving men and women who are tired of...
              </h2>
              <ul className="space-y-4">
                {[
                  'Saying yes when they mean no',
                  "Feeling responsible for everyone else's emotions",
                  'Never feeling "good enough" despite their success',
                  "Anxiety that won't respond to traditional approaches",
                  "Knowing what to do but not being able to change",
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
              <div className="bg-cream-dark rounded-2xl p-8 md:p-12">
                <p className="text-xl text-charcoal leading-relaxed">
                  You've done the self-help books. You've tried talk therapy.
                </p>
                <p className="text-2xl font-serif text-charcoal-dark mt-4 italic">
                  You're ready for something that actually works.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="py-12 bg-charcoal-dark text-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <AnimatedSection delay={0.1}>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-sage-light mb-3" />
                <p className="text-sm text-white/60 uppercase tracking-wide mb-1">
                  Licensed In
                </p>
                <p className="font-medium">Colorado | California | Florida</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col items-center">
                <Brain className="w-6 h-6 text-sage-light mb-3" />
                <p className="text-sm text-white/60 uppercase tracking-wide mb-1">
                  Trained In
                </p>
                <p className="font-medium">EMDR | IFS (Internal Family Systems)</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col items-center">
                <Award className="w-6 h-6 text-sage-light mb-3" />
                <p className="text-sm text-white/60 uppercase tracking-wide mb-1">
                  Featured
                </p>
                <p className="font-medium">The Rise Journey Speaker & Expert</p>
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
              Ready to stop managing everyone else's life?
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
