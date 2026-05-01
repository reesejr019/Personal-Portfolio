import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, techStack, liveUrl, repoUrl }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="bg-surface border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-[border-color,box-shadow] duration-300"
    >
      {/* Image / placeholder */}
      <div className="h-44 bg-gradient-to-br from-accent/20 to-cyan/10 flex items-center justify-center flex-shrink-0">
        <div className="text-6xl opacity-40">{'</>'}</div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-textPrimary mb-2">{title}</h3>
        <p className="text-textMuted text-sm leading-relaxed mb-4 flex-1">{description}</p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-md bg-navy border border-white/10 text-textMuted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-lg bg-accent text-navy text-sm font-medium hover:bg-accent/80 transition-colors"
          >
            Live Demo
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-lg border border-white/20 text-textMuted text-sm font-medium hover:border-accent/50 hover:text-textPrimary transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}
