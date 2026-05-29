import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Menu, X } from 'lucide-react';
import {
  about,
  achievements,
  contactLinks,
  experience,
  filters,
  linkIcon as LinkIcon,
  navItems,
  profile,
  projects,
  skills,
  stats,
} from './data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      variants={fadeUp}
    >
      <div className="mx-auto max-w-6xl px-5">
        {(eyebrow || title) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>}
            {title && <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Primary navigation">
        <a href="#home" className="text-base font-semibold text-white">
          {profile.name}
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={profile.resume}
          download="Md-Sohail_Ahmed_Resume.pdf"
          className="hidden items-center gap-2 rounded-full border border-cyan-300/30 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10 md:inline-flex"
        >
          <Download size={16} aria-hidden="true" />
          Download Resume
        </a>
        <button
          className="rounded-full border border-white/10 p-2 text-slate-100 md:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-sm text-slate-200 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.12),transparent_24%),linear-gradient(135deg,#020617_0%,#0f172a_48%,#111827_100%)]" />
      <div className="absolute inset-x-0 top-20 -z-10 h-80 bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-40" />
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-12 px-5 pb-16 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial="hidden" animate="visible" transition={{ duration: 0.65, ease: 'easeOut' }} variants={fadeUp}>
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
            {profile.heroBadge}
          </p><br></br>
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
            🟢 Available for Full-Time Opportunities
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
            {profile.name}
            <span className="block bg-gradient-to-r from-cyan-200 via-white to-emerald-200 bg-clip-text text-transparent">
              {profile.title}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{profile.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Explore My Work
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-slate-950/40 backdrop-blur"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="grid gap-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-slate-950/55 p-5">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow={about.eyebrow} title={about.heading}>
      <div className="grid gap-8 md:grid-cols-[1fr_0.8fr]">
        <p className="text-lg leading-8 text-slate-300">{about.body}</p>
        <div className="grid gap-3 text-sm text-slate-300">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">Available to Full-Time Opportunities</div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">MERN stack, REST APIs, GenAI APIs</div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">Built 5+ full-stack projects including AI interview preparation tools, restaurant management systems, and productivity platforms.</div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">System Design Basics, REST API Development, Database Design, Authentication & Authorization</div>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I use to build polished web products.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ name, icon: Icon, group }) => (
          <motion.div
            key={name}
            className="group rounded-xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.06]"
            whileHover={{ y: -4 }}
          >
            <Icon className="mb-4 text-cyan-200" size={24} aria-hidden="true" />
            <h3 className="font-semibold text-white">{name}</h3>
            <p className="mt-1 text-sm text-slate-400">{group}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = useMemo(
    () => projects.filter((project) => activeFilter === 'All' || project.category === activeFilter),
    [activeFilter],
  );

  return (
    <Section id="projects" eyebrow="Featured work" title="Projects built for clarity, speed, and real product value.">
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeFilter === filter
                ? 'bg-cyan-300 text-slate-950'
                : 'border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <motion.article
            key={project.title}
            layout
            className="rounded-2xl border border-white/10 bg-slate-900/55 p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-900"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                {project.badge}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{project.category}</span>
            </div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              <a href={project.live} className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 hover:text-cyan-100">
                Live demo <LinkIcon size={15} aria-hidden="true" />
              </a>
              <a href={project.repo} className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white">
                Source <LinkIcon size={15} aria-hidden="true" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Practical experience and focused learning.">
      <div className="grid gap-5">
        {experience.map(({ role, company, period, points, icon: Icon }) => (
          <article key={role} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{role}</h3>
                  <p className="text-sm text-slate-400">{company}</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">{period}</p>
            </div>
            <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-300">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="A problem-solving foundation behind the product work.">
      <div className="grid gap-5 md:grid-cols-2">
        {achievements.map((item) => (
          <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's connect for MERN stack and full-stack opportunities.">
      <div className="grid gap-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.025] p-6 sm:p-8 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="leading-8 text-slate-300">
            I am open to full-stack developer roles, MERN stack internships, and opportunities where I can build scalable web applications, REST APIs, and AI-integrated product features.
          </p>
          <a
            href={profile.resume}
            download="Md-Sohail_Ahmed_Resume.pdf"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
          >
            <Download size={17} aria-hidden="true" />
            Download Resume
          </a>
        </div>
        <div className="grid gap-3">
          {contactLinks.map(({ label, href, value, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-950/45 p-4 transition hover:border-cyan-300/30 hover:bg-slate-950/80"
            >
              <Icon className="text-cyan-200" size={21} aria-hidden="true" />
              <span>
                <span className="block text-sm font-medium text-white">{label}</span>
                <span className="break-all text-sm text-slate-400">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React, Vite, Tailwind CSS, and Framer Motion.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
