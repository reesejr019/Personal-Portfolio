import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary">Projects</h2>
          <p className="text-textMuted mt-4 max-w-xl mx-auto">
            A selection of things I&apos;ve built. Each project sharpened a different skill.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex flex-wrap justify-center gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeUp} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
