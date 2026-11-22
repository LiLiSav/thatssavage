import { createFileRoute, Link } from "@tanstack/react-router";
import { Fold } from "components/fold";

const faqs = [
  {
    question: "How much does a t-shirt/ jumper/ hoodie cost?",
    tint: "bg-lemon",
    answer:
      "As a really rough estimate, T-shirts start from €20-25 upwards while jumpers and hoodies from €35 upwards. The prices depends on many factors like how many items you want, what size of clothing, the amount of colours and type of printing you want, and how fast you need the job done among other things. Bulk orders apply and the more items you buy the lower the price will be per item of clothing. This is why it is best to get in contact for a quote.",
  },
  {
    question: "How long does a print job take?",
    tint: "bg-aqua",
    answer:
      "If the garment you require is in stock, it may only take 1-2 days. If your order needs to be specifically ordered in, it may take up to two weeks for an order to be completed. During busy periods like Christmas shipping times can vary to That's Savage.",
  },
  {
    question: "Do you supply clothes for print?",
    tint: "bg-salmon",
    answer:
      "Of course! Discuss with us what sort of color and size clothing you want and we can order in the vast majority of garments for printing for you. If you have a football jersey required for printing, its best that is supplied by the customer.",
  },
  {
    question: "Can I bring my own clothes to get printed?",
    tint: "bg-chartreuse",
    answer:
      "Absolutely, if you want to supply garments that you'd prefer printed, that's not a problem.",
  },
];

const panel = "ink-noise border-ink p-6";

export const Route = createFileRoute("/about")({
  component: AboutRoute,
});

function AboutRoute() {
  return (
    <main className="mx-auto w-full max-w-sheet px-gutter pb-12">
      <header className="ink-noise relative overflow-hidden border-2 border-ink bg-blush p-gutter">
        <div
          aria-hidden="true"
          className="rough-edges ink-overlap absolute -top-8 right-8 size-40 rounded-full bg-tangerine lg:size-64"
        />
        <div
          aria-hidden="true"
          className="motif-lines rough-edges absolute right-0 bottom-0 hidden h-32 w-32 text-denim lg:block"
        />
        <h1 className="outline-title relative mb-2 text-royal">About Us</h1>
        <p className="relative mb-6 font-display italic">
          By That&apos;s Savage · Monaghan
        </p>
        <p className="dropcap relative mb-0 max-w-4xl text-xl">
          <b>That&apos;s Savage</b> specialize in high quality, custom print
          garments and logo design. With over 10 years experience in design and
          garment printing, we are confident that we can supply a tailor made
          print to your liking. There are no minimum order requirements meaning
          that we can print special one off garments while also catering for
          much larger orders.
        </p>
      </header>

      <div className="grid gap-8 py-8 lg:grid-cols-12">
        <section className="lg:col-span-7">
          <h2 className="headline misregister ink-bubblegum mb-6 text-denim">
            FAQs
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map(({ question, tint, answer }) => (
              <Fold
                key={question}
                name="faq"
                tint={tint}
                summary={
                  <h3 className="mb-0 font-masthead text-lg">{question}</h3>
                }
              >
                <p className="mb-0 max-w-prose">{answer}</p>
              </Fold>
            ))}
          </div>
        </section>

        <aside className="grid self-start border-2 border-ink lg:col-span-5">
          <div className={`${panel} bg-paper-shade`}>
            <h2 className="mb-4 text-2xl">The Nitty Gritty</h2>
            <p className="mb-0">
              The perfect print can be made especially for you using different
              methods for printing like Vinyl Transfer and DTG (direct to
              garment).
            </p>
          </div>

          <div className={`${panel} border-t-2 bg-chartreuse`}>
            <h3 className="mb-2 text-xl">Vinyl Transfer</h3>
            <p className="mb-0">
              Using our Silhouette Cameo cutting machine, we can cut vinyl as
              small as 3mm. The vinyl that we use can be layered to create
              images that have multiple colours (up to 5) and this process works
              on the vast majority of garment material. We carry vinyl in dozens
              of various colours which include; gold, silver, glitter gold and
              rose gold. Should you have any specific colour requirements that
              we don&apos;t stock, we can source for you. Max print size 300mm
              wide x 500mm high.
            </p>
          </div>

          <div className={`${panel} border-t-2 bg-lilac`}>
            <h3 className="mb-2 text-xl">Direct To Garment</h3>
            <p className="mb-0">
              The beauty of DTG printing is that you have unlimited colour
              options for prints on 80-100% cotton blend clothing. Photographs,
              blended and gradient colours are easily printed onto cotton
              t-shirts using DTG printing. Max print size 340mm wide x 400mm
              high.
            </p>
          </div>

          <div className={`${panel} border-t-2 bg-salmon`}>
            <p>
              A wealth of experience allows us to design a product, produce a
              model and manufacture a high quality garment with the most
              suitable print method.
            </p>
            <p className="mb-0">
              For more details, a visual and a quote{" "}
              <Link to="/contact">get in touch</Link>.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
