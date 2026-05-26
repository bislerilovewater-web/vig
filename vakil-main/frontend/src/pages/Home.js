import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, BrainCircuit, Clock, FileText, Scale, Shield, Users } from 'lucide-react';
import Navbar from '../components/Navbar';

const phrases = ['Justice, Connected.', 'AI-Powered Legal Ecosystem', 'Smart Legal Collaboration'];

const Home = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    if (typed.length < phrase.length) {
      const timeout = setTimeout(() => setTyped(phrase.slice(0, typed.length + 1)), 42);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setTyped('');
      setPhraseIndex((phraseIndex + 1) % phrases.length);
    }, 1800);
    return () => clearTimeout(timeout);
  }, [phraseIndex, typed]);

  const fadeUp = {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <div className="min-h-screen bg-white text-[#171717]" data-testid="home-page">
      <Navbar />

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,175,55,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(109,7,26,0.10),transparent_26%)]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10 sm:pt-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="inline-flex items-center gap-2 bg-[#6D071A]/5 border border-[#D4AF37]/40 rounded-full px-4 py-2 mb-6">
                <Scale className="w-4 h-4 text-[#6D071A]" />
                <span className="text-sm font-bold text-[#6D071A]">Premium AI legal-tech for India</span>
              </div>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]" data-testid="hero-heading">
                VakilSetu
                <span className="block text-[#6D071A] min-h-[1.15em]">
                  {typed}<span className="text-[#D4AF37]">|</span>
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-stone-600 leading-relaxed mt-6 mb-9 max-w-2xl">
                Connect clients and lawyers through AI case intelligence, transparent workflows, secure collaboration, and real-time legal progress tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" data-testid="get-started-button">
                  <button className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                    Start Legal Journey <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link to="/login" data-testid="learn-more-button">
                  <button className="btn-secondary inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                    Open Dashboard
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="relative"
            >
              <div className="premium-card p-5 sm:p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6D071A]">Live Case Console</p>
                    <h2 className="font-heading text-2xl font-extrabold mt-1">Matter Intelligence</h2>
                  </div>
                  <div className="h-11 w-11 rounded-2xl bg-[#6D071A] text-white flex items-center justify-center shadow-lg shadow-[#6D071A]/20">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    ['AI analysis', 'Relevant laws, risk, and next actions', 92],
                    ['Lawyer match', 'Specialization and location fit', 78],
                    ['Shared workspace', 'Notes, files, chat, and timeline', 86],
                  ].map(([title, copy, pct], index) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + index * 0.08 }}
                      className="rounded-2xl border border-[#EFE7D6] bg-[#FFFDF7] p-4 interactive-lift"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-bold text-[#171717]">{title}</p>
                          <p className="text-xs text-stone-500 mt-1">{copy}</p>
                        </div>
                        <span className="text-sm font-extrabold text-[#6D071A]">{pct}%</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 1, delay: 0.35 + index * 0.08 }}
                          className="h-full rounded-full bg-gradient-to-r from-[#6D071A] to-[#D4AF37]"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-[#EFE7D6] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ['500+', 'Verified Lawyers'],
            ['10K+', 'Cases Supported'],
            ['24/7', 'AI Assistance'],
            ['98%', 'Client Satisfaction'],
          ].map(([value, label]) => (
            <motion.div key={label} {...fadeUp} className="text-center rounded-2xl bg-[#FFFDF7] border border-[#EFE7D6] p-5 interactive-lift">
              <div className="text-4xl font-extrabold text-[#6D071A] mb-1">{value}</div>
              <div className="text-sm text-stone-600">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6D071A] mb-3">Why VakilSetu</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">Professional Legal Collaboration</h2>
            <p className="text-lg text-stone-600 mt-4 max-w-2xl mx-auto">A modern legal command center for clients, lawyers, documents, and AI-guided strategy.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              [Scale, 'Expert Legal Network', "Access India's verified lawyers across high-stakes legal categories."],
              [FileText, 'AI-Powered Analysis', 'Understand relevant laws, risks, complexity, and next actions faster.'],
              [Users, 'Shared Case Workspace', 'Coordinate through chat, files, live timelines, and pinned case notes.'],
            ].map(([Icon, title, copy]) => (
              <motion.div key={title} {...fadeUp} className="premium-card p-8 interactive-lift">
                <div className="w-14 h-14 bg-[#6D071A] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#6D071A]/20">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-extrabold mb-3">{title}</h3>
                <p className="text-stone-600 leading-relaxed">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6D071A] mb-3">Trust & Security</p>
            <h2 className="font-heading text-4xl font-extrabold mb-6 leading-tight">Designed for sensitive legal work</h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              VakilSetu keeps legal collaboration structured, confidential, and easy to follow from first intake to resolution.
            </p>
            <div className="space-y-4">
              {[
                [Shield, 'Protected case data', 'Authenticated access for clients and assigned lawyers only.'],
                [Clock, 'Real-time progress', 'Live case timelines and near real-time workspace updates.'],
                [Award, 'Professional experience', 'A polished SaaS workflow built for repeated daily use.'],
              ].map(([Icon, title, copy]) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white border border-[#EFE7D6] rounded-2xl flex items-center justify-center flex-shrink-0 text-[#6D071A]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{title}</h4>
                    <p className="text-sm text-stone-600">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="premium-card p-8">
            <div className="text-6xl font-extrabold text-[#6D071A] mb-4">98%</div>
            <div className="text-xl font-bold mb-2">Client Satisfaction Rate</div>
            <p className="text-stone-600 mb-6">Built around clarity, trust, and fast access to legal expertise.</p>
            <div className="border-t border-[#EFE7D6] pt-6">
              <p className="text-sm text-stone-500 italic">
                "VakilSetu helped me understand my position before speaking to a lawyer, then kept the whole case organized."
              </p>
              <p className="text-sm font-bold mt-3 text-[#6D071A]">Rajesh Kumar, Mumbai</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Resolve legal work with more clarity.
          </h2>
          <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto">
            Start with AI intelligence, then collaborate with the right legal professional inside one premium workspace.
          </p>
          <Link to="/login" data-testid="cta-button">
            <button className="btn-primary inline-flex items-center gap-2">
              Get Started Today <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
