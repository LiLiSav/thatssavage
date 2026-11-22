import { createFileRoute, Link } from "@tanstack/react-router";
import bride from "assets/customers/bride.jpg";
import clonmany from "assets/customers/clonmany.jpg";
import country from "assets/customers/country-fit.jpg";
import disney from "assets/customers/disney.jpg";
import keren from "assets/customers/keren-hen.jpg";
import { cards } from "content/card-array";

const customers = [
  { img: bride, label: "Bride in white on steps" },
  { img: country, label: "Country fit dancers" },
  { img: disney, label: "Hen do with disney character" },
  { img: clonmany, label: "Clonmany green and red tops" },
  { img: keren, label: "Hen tops with cocktail glasses" },
];

const inks = [
  "ink-royal",
  "ink-plum",
  "ink-pine",
  "ink-cobalt",
  "ink-grape",
  "ink-denim",
  "ink-lagoon",
];

const pageRef =
  "inline-block bg-ink px-2 font-label text-sm font-bold tracking-label text-paper uppercase no-underline hover:bg-royal hover:text-white";

const plateSpan = [
  "col-span-2 lg:col-span-6",
  "lg:col-span-3",
  "lg:col-span-3",
];

export const Route = createFileRoute("/")({
  component: HomeRoute,
});

function HomeRoute() {
  return (
    <main className="mx-auto w-full max-w-sheet px-gutter pb-12 mt-4">
      <article className="ink-noise relative grid gap-x-8 gap-y-6 overflow-hidden border-2 border-ink bg-blush p-gutter lg:grid-cols-12">
        <div
          aria-hidden="true"
          className="rough-edges ink-overlap absolute -top-8 right-8 size-40 rounded-full bg-tangerine lg:size-64"
        />
        <div
          aria-hidden="true"
          className="motif-lines rough-edges absolute right-0 bottom-0 hidden h-48 w-32 text-denim lg:block"
        />

        <figure className="relative m-0 lg:col-span-5">
          <div className="ink-royal border-2 border-ink">
            <div>
              <img
                src="/self-portrait.png"
                alt="Self portrait"
                fetchPriority="high"
                className="aspect-square w-full object-fit"
              />
            </div>
          </div>
          <figcaption className="mt-2 font-label text-sm tracking-label uppercase">
            Fig. 1 — Mr. Savage
          </figcaption>
        </figure>

        <div className="relative z-10 flex gap-6 lg:col-span-7">
          <div className="flex-1">
            <p className="outline-title mb-4 text-royal">
              No minimum
              <br />
              order
            </p>
            <h1 className="headline misregister ink-flamingo mb-4 text-royal">
              There are <span className="text-flamingo">enough</span>{" "}
              <span className="highlight">rules</span> in life.
            </h1>
            <p className="mb-6 max-w-prose text-xl italic">
              One hoodie or a hundred,the answer is yes. This is showbiz baby!
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/prints" className={pageRef}>
                See the prints, P.2
              </Link>

              <Link to="/contact" className="press-button">
                Get a quote →
              </Link>
            </div>
          </div>
          <p
            aria-hidden="true"
            className="vertical-text hidden shrink-0 border-l border-ink pl-4 font-label text-sm tracking-label uppercase sm:block"
          >
            Hens · Stags · Clubs · Crews
          </p>
        </div>
      </article>

      <section className="grid border-x-2 border-b-2 border-ink lg:grid-cols-12">
        <article className="ink-noise bg-lemon p-6 lg:col-span-6">
          <h2 className="mb-3 text-3xl">From sketch to sleeve</h2>
          <p className="dropcap sm:columns-2 sm:gap-8">
            Over 10 years of design and garment printing means we can draw the
            logo, make a sample, and print the finished garment using whichever
            method suits it best.
          </p>
          <Link to="/about" className={pageRef}>
            How we print, P.3
          </Link>
        </article>
        <article className="ink-noise border-t-2 border-ink bg-royal p-6 text-white lg:col-span-3 lg:border-t-0 lg:border-l-2">
          <h2 className="mb-3 text-2xl">Irish Owned</h2>
          <p>
            We take pride in where we are from and what we do. By supporting us
            you are supporting local. We guarantee that what we produce is at
            the very highest standard and you know exactly where it comes from.
          </p>
          <Link to="/about" className={pageRef}>
            About us, P.3
          </Link>
        </article>
        <article className="ink-noise border-t-2 border-ink bg-salmon p-6 lg:col-span-3 lg:border-t-0 lg:border-l-2">
          <h2 className="mb-3 text-2xl">Highest Quality &amp; Service</h2>
          <p>
            We promise to work with you to provide the perfect solution for you
            or your business. From the apparel to the design, we got your back.
          </p>
          <Link to="/about" className={pageRef}>
            FAQs, P.3
          </Link>
        </article>
      </section>

      <section className="py-8">
        <h2 className="headline misregister ink-bubblegum mb-6 text-denim">
          What We Can Do
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-12">
          {cards.map(({ img, label }, index) => (
            <figure
              key={label}
              className={`m-0 ${plateSpan[index] ?? "lg:col-span-3"} ${index % 2 === 0 ? "lg:-rotate-1" : "lg:rotate-1"}`}
            >
              <div
                className={`border-2 border-ink ${inks[index % inks.length]}`}
              >
                <div>
                  <img
                    src={img}
                    alt={label}
                    width={720}
                    height={720}
                    loading="lazy"
                    className={`w-full object-cover ${index === 0 ? "aspect-3/2" : "aspect-square"}`}
                  />
                </div>
              </div>
              <figcaption className="mt-1 font-label text-sm tracking-label uppercase">
                Fig. {index + 2} — {label}
              </figcaption>
            </figure>
          ))}
        </div>
        <Link
          to="/prints"
          className="mt-6 flex min-h-11 items-center justify-center border-2 border-ink bg-lemon p-4 text-center font-label tracking-label text-ink uppercase no-underline hover:bg-ink hover:text-paper"
        >
          View more, P.2
        </Link>
      </section>

      <section className="grid border-2 border-ink md:grid-cols-2">
        <article className="ink-noise bg-chartreuse p-6">
          <h2 className="mb-3 text-2xl">Vinyl Transfer</h2>
          <p className="mb-0">
            Cut vinyl as small as 3mm, layered up to 5 colours. Max print size
            300mm wide x 500mm high.
          </p>
        </article>
        <article className="ink-noise border-t-2 border-ink bg-lilac p-6 md:border-t-0 md:border-l-2">
          <h2 className="mb-3 text-2xl">Direct To Garment</h2>
          <p className="mb-0">
            Unlimited colours on 80-100% cotton blend clothing. Max print size
            340mm wide x 400mm high.
          </p>
        </article>
      </section>

      <section className="py-8">
        <h2 className="headline misregister ink-lemon mb-6 text-kelly">
          Some Of Our Happy Customers
        </h2>
        <div className="grid grid-cols-2 items-start gap-4 lg:grid-cols-5">
          {customers.map(({ img, label }, index) => (
            <figure
              key={label}
              className={`m-0 ${index % 2 === 1 ? "lg:mt-8" : ""}`}
            >
              <div
                className={`halftone border border-ink ${inks[(index + 3) % inks.length]}`}
              >
                <div>
                  <img
                    src={img}
                    alt={label}
                    loading="lazy"
                    className="aspect-4/5 w-full object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-1 text-sm italic">{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <aside className="ink-noise misregister-panel ink-lemon mx-auto max-w-2xl border-2 border-ink bg-aqua p-8 text-center">
        <p className="mb-2 font-display text-2xl font-black">
          T-shirts from €20-25 · Jumpers &amp; hoodies from €35
        </p>
        <p className="mb-4">
          Rough starting prices. Tell us what you need and we&apos;ll work out
          the rest.
        </p>
        <Link to="/contact" className="press-button">
          Contact us →
        </Link>
      </aside>
    </main>
  );
}
