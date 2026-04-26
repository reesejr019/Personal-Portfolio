import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialForm = { name: '', email: '', message: '' }
const initialErrors = { name: '', email: '', message: '' }

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

function validate(form) {
  const errors = { name: '', email: '', message: '' }
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) errors.email = 'Email is required.'
  else if (!emailRegex.test(form.email)) errors.email = 'Enter a valid email address.'
  if (!form.message.trim()) errors.message = 'Message is required.'
  else if (form.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.'
  return errors
}

function hasErrors(errors) {
  return Object.values(errors).some(Boolean)
}

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/reesejr019',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.31 9.42 7.9 10.95.58.1.79-.25.79-.56v-2.07c-3.21.7-3.89-1.54-3.89-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.19a11.07 11.07 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.15v3.19c0 .31.2.67.8.56C20.2 21.42 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rodney-reese-64393b2b1/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.55V9H3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:reesejr019@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(err => ({ ...err, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (hasErrors(errs)) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
    setForm(initialForm)
    setErrors(initialErrors)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary">Contact Me</h2>
          <p className="text-textMuted mt-4 max-w-lg mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Social links */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="lg:w-56 flex lg:flex-col gap-4"
          >
            {socialLinks.map(({ label, href, icon }) => (
              <motion.a
                key={label}
                variants={fadeUp}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface border border-white/10 text-textMuted hover:text-accent hover:border-accent/40 transition-all duration-200"
              >
                {icon}
                <span className="text-sm font-medium">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex-1"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12 bg-surface border border-accent/30 rounded-2xl"
              >
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-textPrimary mb-2">Message Sent!</h3>
                <p className="text-textMuted mb-6">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-full border border-accent text-accent text-sm hover:bg-accent/10 transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-medium text-textMuted mb-1.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-xl bg-surface border text-textPrimary placeholder-textMuted/50 outline-none transition-colors ${
                      errors.name
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-white/10 focus:border-accent'
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </motion.div>

                {/* Email */}
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-medium text-textMuted mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-xl bg-surface border text-textPrimary placeholder-textMuted/50 outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-white/10 focus:border-accent'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </motion.div>

                {/* Message */}
                <motion.div variants={fadeUp}>
                  <label className="block text-sm font-medium text-textMuted mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-surface border text-textPrimary placeholder-textMuted/50 outline-none resize-none transition-colors ${
                      errors.message
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-white/10 focus:border-accent'
                    }`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </motion.div>

                <motion.div variants={fadeUp}>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/80 transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
                  >
                    Send Message
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
