import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/10 py-10 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <button
          onClick={() => scrollTo('#home')}
          className="text-2xl font-bold text-textPrimary hover:text-accent transition-colors"
        >
          Reese<span className="text-accent">.</span>
        </button>

        <nav className="flex flex-wrap justify-center gap-6">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="text-sm text-textMuted hover:text-textPrimary transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>

        <p className="text-textMuted text-sm">
          &copy; {new Date().getFullYear()} Rodney Reese. Built with React, Vite &amp; Tailwind CSS.
        </p>
      </div>
    </motion.footer>
  )
}
