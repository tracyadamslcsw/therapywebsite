import { Link } from 'react-router-dom'
import {
  Award,
  MapPin,
  GraduationCap,
  Clock,
  CheckCircle,
  User,
  ExternalLink,
} from 'lucide-react'
import { SEO, AnimatedSection, Layout } from '../components'

const credentials = [
  'Licensed Clinical Social Worker (LCSW)',
  'CA LCSW #84673 | CO CSW #09928191 | FL Telehealth Provider #TPSW2018',
  'EMDR Level 1 Trained (EMDRIA Member)',
  'IFS Level 1 Trained (Internal Family Systems Institute)',
  'Speaker & Wellness Expert, The Rise Journey and Marino Wellness',
  '15+ years in the mental health field',
]

export function About() {
  return (
    <Layout>
      <SEO
        title="About Tracy Adams | EMDR Therapist & IFS Therapist Denver"
        description="Meet Tracy Adams, LCSW - EMDR therapist and IFS therapist in Denver, Colorado. Specializing in anxiety, trauma, and people-pleasing. Licensed in CO, CA, FL."
        keywords="Tracy Adams LCSW, EMDR therapist Denver, IFS therapist Denver, therapist Denver, Denver therapist, anxiety therapist Denver, trauma therapist Denver, therapist accepting new clients Denver, therapist for high achievers Denver, people pleasing therapy Denver, perfectionism therapist Denver"
        path="/about"
      />

      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-cream to-blush-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <p className="text-sage-dark font-medium uppercase tracking-wide mb-4">
                About
              </p>
              <h1 className="font-serif text-charcoal-dark mb-6">
                Meet Tracy
              </h1>
              <p className="text-2xl font-serif text-charcoal italic">
                People-pleaser and perfectionist in recovery
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              {/* Professional Photo */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-medium">
                <img
                  src="/tracy-adams.png"
                  alt="Tracy Adams, LCSW - EMDR and IFS therapist in Denver"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Decorative Image Banner */}
      <section className="h-64 md:h-80 relative overflow-hidden">
        <img
          src="/path-trees.jpg"
          alt="Peaceful tree-lined path"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blush-light/30 to-white/30" />
      </section>

      {/* Main Story Section */}
      <section className="section bg-white pt-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="prose prose-lg">
                <p className="text-xl text-charcoal leading-relaxed">
                  I spent most of my life believing that my worth came from what
                  I could do for others. If I could just be helpful enough,
                  accommodating enough, <em>perfect enough</em> — then I'd
                  finally feel okay.
                </p>

                <p className="text-2xl font-serif text-charcoal-dark italic my-8">
                  Spoiler: It didn't work.
                </p>

                <p className="text-lg text-charcoal leading-relaxed">
                  What I learned through my own therapy journey — and now
                  through years of helping others — is that people-pleasing
                  isn't a personality trait.{' '}
                  <strong>It's a survival strategy.</strong> One that served you
                  when you were young and powerless, but now it's running your
                  life.
                </p>

                <p className="text-lg text-charcoal leading-relaxed">
                  I became a therapist because I wanted to help people find what
                  I'd found: a way out of the exhausting cycle of managing
                  everyone else's emotions at the expense of your own.
                </p>
              </div>
            </AnimatedSection>

            {/* My Approach */}
            <AnimatedSection className="mt-16">
              <h2 className="font-serif text-charcoal-dark mb-6">
                My Approach
              </h2>
              <p className="text-lg text-charcoal leading-relaxed">
                I use EMDR (Eye Movement Desensitization and Reprocessing) and
                IFS (Internal Family Systems) because they actually{' '}
                <em>change</em> things — not just help you understand them. My
                clients don't spend years on my couch. They do the work, they
                heal, and they move on.
              </p>
            </AnimatedSection>

            {/* My Background */}
            <AnimatedSection className="mt-16">
              <h2 className="font-serif text-charcoal-dark mb-6">
                My Background
              </h2>
              <p className="text-lg text-charcoal leading-relaxed mb-6">
                I hold a Master's in Social Work from New York University with a
                specialization in geriatric and end-of-life care. I've worked on
                Skid Row in Los Angeles, supported hospice patients in Brooklyn,
                and provided trauma training in South Africa.
              </p>
              <p className="text-lg text-charcoal leading-relaxed">
                These experiences taught me that people are resilient, that
                healing is possible, and that the right support can change
                everything.
              </p>
            </AnimatedSection>

            {/* Credentials */}
            <AnimatedSection className="mt-16">
              <h2 className="font-serif text-charcoal-dark mb-8">
                Credentials
              </h2>
              <div className="bg-cream rounded-2xl p-8">
                <ul className="space-y-4">
                  {credentials.map((credential, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-charcoal"
                    >
                      <CheckCircle className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                      {credential}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-x-6 gap-y-3 mt-6">
                  <a
                    href="https://www.psychologytoday.com/profile/966823"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sage-dark font-medium hover:text-sage transition-colors"
                  >
                    Psychology Today
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.therisejourney.com/team/tracy-adams"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sage-dark font-medium hover:text-sage transition-colors"
                  >
                    The Rise Journey
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.emdria.org/directory/people/tracy-adams/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sage-dark font-medium hover:text-sage transition-colors"
                  >
                    EMDRIA Directory
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://ifs-institute.com/practitioners/all/186957"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sage-dark font-medium hover:text-sage transition-colors"
                  >
                    IFS Institute
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* How We Work Together */}
            <AnimatedSection className="mt-16">
              <h2 className="font-serif text-charcoal-dark mb-6">
                How We'd Work Together
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-blush-light rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-terracotta" />
                    <h4 className="font-medium text-charcoal-dark">In-Person</h4>
                  </div>
                  <p className="text-charcoal-light">
                    Denver, Colorado
                    <br />
                    Mondays and Wednesdays
                  </p>
                </div>
                <div className="bg-sage/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-sage-dark" />
                    <h4 className="font-medium text-charcoal-dark">Telehealth</h4>
                  </div>
                  <p className="text-charcoal-light">
                    California, Colorado, Florida
                    <br />
                    Flexible scheduling
                  </p>
                </div>
              </div>
              <p className="text-charcoal-light mt-6 italic">
                My practice is intentionally small so I can be fully present
                with each person I work with.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-sage text-white">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="font-serif text-white mb-6">
              Curious if we'd be a good fit?
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

export default About
