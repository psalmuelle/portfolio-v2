import Link from 'next/link';
import Reveal from '@/components/Reveal';
import {
  aboutParagraphs,
  avatar,
  projects,
  socialLinks,
  tools,
  workHistory,
} from '@/data';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="page">
      <Reveal as="section" className="section hero">
        <div className="hero-row">
          <Image
            className="hero-avatar"
            src={avatar.src}
            alt={avatar.alt}
            width={96}
            height={96}
            preload
          />
          <h1 className="hero-name">Erinle Samuel</h1>
        </div>
        <p className="hero-tagline">
          I build reliable web and mobile applications across frontend and
          backend systems.
        </p>
        <p className="hero-sub">
          Software Engineer at Fieldsub. Focused on practical systems that
          scale.
        </p>
        <div className="hero-meta">
          <div className="meta-group">
            <span>Frontend & Backend</span>
            <span className="meta-sep">/</span>
            <span>Systems Design</span>
            <span className="meta-sep">/</span>
            <span>DevOps</span>
          </div>
          <div className="meta-group">
            {socialLinks.map((s, i) => (
              <span key={s.label} style={{ display: 'contents' }}>
                {i > 0 && <span className="meta-sep">/</span>}
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontWeight: 600 }}
                >
                  {s.label}
                </a>
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section" delay={0.06}>
        <h3 className="section-title">About</h3>
        <div className="about-body">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section" delay={0.12}>
        <h3 className="section-title">Tools</h3>
        <div className="tools-grid">
          {tools.map((t) => (
            <div className="tool-group" key={t.group}>
              <h4>{t.group}</h4>
              <ul>
                {t.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section" delay={0.18}>
        <h3 className="section-title">Portfolio</h3>
        <div className="portfolio-grid">
          {projects.map((p) => (
            <Link
              className="project-card"
              href={`/portfolio/${p.slug}`}
              key={p.slug}
            >
              <div className="project-image-wrap">
                <Image
                  className="project-thumb"
                  src={p.heroImage}
                  alt={p.heroAlt}
                  width={416}
                  height={264}
                  sizes="(min-width: 1200px) 416px, (min-width: 810px) calc((100vw - 96px) / 2), calc(100vw - 48px)"
                />
                <span className="project-open-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 19 19 5M8 5h11v11" />
                  </svg>
                </span>
              </div>
              <h4 className="project-title-small">{p.title}</h4>
              <p className="project-desc">{p.subtitle}</p>
              <div className="project-meta">
                <span>{p.client}</span>
                <span className="meta-sep">/</span>
                <span>{p.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section" delay={0.24}>
        <h3 className="section-title">Work History</h3>
        <div className="jobs">
          {workHistory.map((job) => (
            <div className="job" key={job.company}>
              <div className="job-head">
                <h4 className="job-company">{job.company}</h4>
                <h4 className="job-sep">/</h4>
                <h4 className="job-role">{job.role}</h4>
                <p className="job-period">
                  {job.period[0]} - {job.period[1]}
                </p>
              </div>
              <div className="job-desc">
                {job.description.map((sentence) => (
                  <p key={sentence.slice(0, 32)}>{sentence}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </main>
  );
}
