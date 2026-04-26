import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, #6c63ff44 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, #00d4ff33 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="text-accent font-medium text-lg mb-4 tracking-widest uppercase">
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-extrabold text-textPrimary mb-4 leading-tight"
          >
            Reese <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan">Rodney</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-textMuted mb-8 font-light"
          >
            Full-Stack Developer &amp; UI Enthusiast
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-textMuted max-w-xl mx-auto mb-10 leading-relaxed"
          >
            I build responsive, interactive web experiences with clean code and
            thoughtful design. Let&apos;s create something amazing together.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo('projects')}
              className="px-8 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent/80 transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-3 rounded-full border border-accent text-accent font-semibold hover:bg-accent/10 transition-all duration-200"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-textMuted rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
