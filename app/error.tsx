"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section className="page-hero"><div className="container">
    <p className="eyebrow">Something went wrong</p><h1>We couldn’t load this page.</h1>
    <p className="hero-description">Please try again. If the problem continues, you can return to the homepage.</p>
    <div className="actions"><button className="button button-primary" onClick={reset}>Try again</button><Link className="button button-secondary" href="/">Return home</Link></div>
  </div></section>;
}
