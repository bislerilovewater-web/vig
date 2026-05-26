import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-primary/5" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight"
        >
          The Future of Law <br />
          <span className="text-primary italic">Is Here</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link to="/login">
            <button className="bg-primary text-primary-foreground px-12 py-5 rounded-sm font-bold text-xl transition-all duration-500 hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/40 relative overflow-hidden group mb-8">
              <span className="relative z-10 flex items-center gap-2">
                Join the Vanguard
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-foreground/60 font-medium tracking-wide uppercase text-sm"
        >
          Join 50,000+ legal professionals already using Gavel &amp; Brief
        </motion.p>
      </div>

      <footer className="absolute bottom-6 w-full text-center text-xs text-foreground/40 font-light">
        © {new Date().getFullYear()} Gavel &amp; Brief. All rights reserved.
      </footer>
    </section>
  );
}
