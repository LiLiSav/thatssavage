import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <main className="mx-auto w-full max-w-sheet px-gutter pb-12">
      <article className="ink-noise border-2 border-ink bg-blush p-gutter">
        <p className="mb-4 font-label text-sm tracking-label uppercase">
          Error 404
        </p>
        <h1 className="headline mb-4 text-royal">This page does not exist</h1>

        <Link
          to="/"
          className="inline-block bg-ink px-4 py-2 font-label text-sm font-bold tracking-label text-paper uppercase no-underline hover:bg-royal hover:text-white"
        >
          Back home
        </Link>
      </article>
    </main>
  );
}
