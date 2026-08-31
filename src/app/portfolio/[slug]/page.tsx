import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import Parallax from '@/components/Parallax';
import { projectForSlug, projects } from '@/data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://erinlesam.com';

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

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

  const path = `/portfolio/${project.slug}`;
  return {
    title: project.title,
    description: project.subtitle,
    alternates: { canonical: path },
    openGraph: {
      title: project.title,
      description: project.subtitle,
      url: path,
      type: 'article',
      images: [
        {
          url: new URL(project.heroImage, siteUrl).toString(),
          alt: project.heroAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.subtitle,
      images: [new URL(project.heroImage, siteUrl).toString()],
    },
  };
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
          <Image
            className="project-hero"
            src={project.heroImage}
            alt={project.heroAlt}
            width={1056}
            height={672}
            sizes="(min-width: 1200px) 880px, 100vw"
          />
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
        {project.liveLink && (
          <a
            className="live-link"
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
          >
            See it live
          </a>
        )}
      </Reveal>

      <div className="project-back">
        <Link className="back-link" href="/">
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
