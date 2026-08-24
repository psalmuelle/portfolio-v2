import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';
import { projectForSlug, projects } from '@/data';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectForSlug(slug);
  if (!project) return {};
  return { title: project.title };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectForSlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page">
      <Link className="back-link" href="/">
        Back to Homepage
      </Link>

      <Reveal className="project-head">
        <div className="project-meta-line">
          <span>{project.client}</span>
          <span className="meta-sep">/</span>
          <span>{project.year}</span>
        </div>
        <h2 className="project-title">{project.title}</h2>
        <p className="project-subtitle">{project.subtitle}</p>
      </Reveal>

      <Reveal>
        <Parallax className="project-hero-frame" distance={44}>
          <img className="project-hero" src={project.heroImage} alt={project.heroAlt} />
        </Parallax>
      </Reveal>

      <Reveal className="project-body">
        <div>
          {project.paragraphs.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
        <div className="goal-block">
          <h4 className="goal-label">Project goal:</h4>
          <h4 className="goal-text">{project.goal}</h4>
        </div>
        <div className="project-details">
          <div className="detail">
            <h4>Client</h4>
            <p>{project.client}</p>
          </div>
          <div className="detail">
            <h4>Year</h4>
            <p>{project.year}</p>
          </div>
          <div className="detail">
            <h4>Stack</h4>
            <p>{project.stack}</p>
          </div>
        </div>
        <a
          className="live-link"
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noreferrer"
        >
          See it live
        </a>
      </Reveal>

      <Reveal className="screenshots">
        {project.screenshots.map((src) => (
          <img key={src} src={src} alt="" />
        ))}
      </Reveal>

      <div className="project-back">
        <Link className="back-link" href="/">
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
