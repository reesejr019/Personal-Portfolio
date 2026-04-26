import { motion } from 'framer-motion'

export default function SkillBadge({ label }) {
  return (
    <motion.span
      whileHover={{ scale: 1.08 }}
      className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium cursor-default select-none"
    >
      {label}
    </motion.span>
  )
}
