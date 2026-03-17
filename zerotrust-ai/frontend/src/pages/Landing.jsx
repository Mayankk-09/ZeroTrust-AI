import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import GlassCard from '../components/GlassCard'

export default function Landing() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-16 pb-24 text-center"
      >
        <motion.p
          className="mb-4 text-sm font-medium tracking-wider uppercase text-cyan-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Identity Document Fraud Detection
        </motion.p>
        <motion.h1
          className="mb-6 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-slate-100 via-cyan-200 to-violet-300 bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          ZeroTrust AI
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto mb-12 text-lg text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Detect forged and manipulated identity documents with AI-powered analysis:
          deep learning, image forensics, and OCR-based checks in one pipeline.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/upload">
            <motion.span
              className="inline-block px-8 py-4 font-semibold transition-all border rounded-xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border-cyan-500/30 text-cyan-300 hover:border-cyan-400/50 hover:from-cyan-500/30 hover:to-violet-500/30"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Verify a Document
            </motion.span>
          </Link>
          <Link to="/architecture">
            <motion.span
              className="inline-block px-8 py-4 font-semibold transition-all border rounded-xl border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              How It Works
            </motion.span>
          </Link>
        </motion.div>
      </motion.section>

      <section className="grid gap-6 py-12 md:grid-cols-3">
        {[
          { title: 'CNN Classification', desc: 'EfficientNet-B0 trained to classify documents as real or fake.', icon: '🔬', delay: 0.1 },
          { title: 'Image Forensics', desc: 'ELA, edge consistency, and noise analysis to spot manipulation.', icon: '🖼️', delay: 0.2 },
          { title: 'OCR & Text', desc: 'Extract text and flag anomalies for consistency and tampering.', icon: '📄', delay: 0.3 },
        ].map(({ title, desc, icon, delay }) => (
          <Link key={title} to="/architecture">
            <GlassCard delay={delay} className="block h-full p-6">
              <span className="block mb-3 text-3xl">{icon}</span>
              <h3 className="mb-2 text-lg font-semibold text-slate-100">{title}</h3>
              <p className="text-sm text-slate-400">{desc}</p>
            </GlassCard>
          </Link>
        ))}
      </section>
      <section className="flex flex-col items-center justify-center px-6 py-16">

  <div className="w-full max-w-md p-4 bg-transparent border border-gray-200 shadow-sm rounded-2xl">

    {/* Image */}
    <div className="flex items-center justify-center w-full overflow-hidden bg-gray-100 h-128 rounded-xl">
      {/* Replace src with your image */}
      <img
        src="/img009.jpeg"
        alt="OCR / Computer Vision"
        className="object-cover w-full h-full rounded-xl"
      />
     
    </div>

    {/* Minimal Caption */}
    <p className="mt-4 text-sm text-center text-gray-500">
      Detecting what the human eye cannot see
    </p>

  </div>

</section>
    </div>
  )
}
