import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SkillBadge from './SkillBadge'
import { skills } from '../data/skills'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-2">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary">About Me</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.1 }}
            className="flex-1"
          >
            {/* Avatar placeholder */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-cyan flex items-center justify-center text-4xl font-bold text-white mb-6 mx-auto md:mx-0">
              RJ
            </div>

            <h3 className="text-2xl font-semibold text-textPrimary mb-4">
              Hi, I&apos;m Rodney Reese
            </h3>
            <p className="text-textMuted leading-relaxed mb-4">
              I&apos;m a young and new web developer with a growing love and appreciation for building clean, intuitive
              digital experiences. I enjoy finding and creating solutions to complex problems.
            </p>
            <p className="text-textMuted leading-relaxed mb-4">
              When I&apos;m not coding, you can find me exploring new hobbies, cooking and trying out new recipes, or binge-watching anime. I&apos;m always eager to learn and grow, whether it&apos;s through contributing
              to open-source projects, or leveling up my skills through personal projects.
            </p>
            <p className="text-textMuted leading-relaxed">
              I&apos;m currently seeking opportunities where I can contribute, grow, and continue
              to develop my skills alongside great teams.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex-1"
          >
            <h3 className="text-xl font-semibold text-textPrimary mb-6">Skills &amp; Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.div key={skill} variants={fadeUp}>
                  <SkillBadge label={skill} />
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { label: 'Projects Completed', value: '10+' },
                { label: 'Technologies Used', value: '12+' },
                { label: 'GitHub Repos', value: '15+' },
                { label: 'Coffee Cups', value: '∞' },
              ].map(({ label, value }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="bg-surface border border-white/10 rounded-xl p-4 text-center"
                >
                  <p className="text-3xl font-bold text-accent">{value}</p>
                  <p className="text-textMuted text-sm mt-1">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
