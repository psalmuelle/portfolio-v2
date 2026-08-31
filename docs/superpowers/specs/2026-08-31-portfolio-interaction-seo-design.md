# Portfolio interaction, reveal, SEO, and performance design

## Scope

Enhance the portfolio without changing its editorial, warm-neutral visual system.

## Project-card interaction

Each project remains one semantic link. A cream, rounded square button containing a northeast arrow is positioned over the image's top-right corner. It becomes visible whenever the card is hovered or keyboard-focused, covering hover from the image, title, description, and metadata. The control is decorative because the full card is the link; it must not create nested interactive elements.

## Motion

The existing reusable `Reveal` component remains the motion boundary. Its entry state will include a small vertical offset, opacity, and blur; it will resolve to a crisp resting state. Existing section order naturally produces a top-to-bottom sequence, with a small increasing delay assigned to the home-page sections. Motion is disabled for people who prefer reduced motion.

## SEO

The root layout will define a metadata base, title template, descriptive metadata, canonical URL, Open Graph, and Twitter metadata. Portfolio detail pages will generate page-specific titles, descriptions, canonical URLs, and social images from project data. `robots.ts` and `sitemap.ts` will expose the home page and every project URL. The live domain will be read from `NEXT_PUBLIC_SITE_URL`, falling back safely to the production domain currently associated with the portfolio.

## Performance

Keep images in `next/image`, add exact responsive `sizes` values so the browser requests appropriate image widths, and preload only the avatar that appears in the initial viewport. Portfolio images remain lazy. Motion remains limited to section wrappers; no new JavaScript component is needed for card hover behavior.

## Verification

Run lint and a production build. Confirm the generated sitemap and robots routes compile and project metadata types remain valid.
