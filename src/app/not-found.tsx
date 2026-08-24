import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="notfound">
      <h3>This page doesn&apos;t exist.</h3>
      <p>
        You might have followed a broken link or mistyped the address. Either way, there&apos;s
        nothing here.
      </p>
      <Link href="/">Back to home</Link>
    </main>
  );
}
