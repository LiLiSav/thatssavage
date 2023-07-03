import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container card shadow p-5 mb-3 mt-3">
      <h1 className="title text-warning">About Us</h1>
      <hr />

      <p className="m-0">
        <i>That's Savage</i> specialize in high quality, custom print garments and logo design. With
        over 10 years experience in design and garment printing, we are confident that we can supply
        a tailor made print to your liking. There are no minimum order requirements meaning that we
        can print special one off garments while also catering for much larger orders.
      </p>
      <h2 className="headerText">FAQs</h2>
      <p>
        <b className="text-warning">How much does a t-shirt/ jumper/ hoodie cost?</b> As a really
        rough estimate, T-shirts start from €20-25 upwards while jumpers and hoodies from €35
        upwards. The prices depends on many factors like how many items you want, what size of
        clothing, the amount of colours and type of printing you want, and how fast you need the job
        done among other things. Bulk orders apply and the more items you buy the lower the price
        will be per item of clothing. This is why it is best to get in contact for a quote.
      </p>

      <p>
        <b className="text-warning">How long does a print job take?</b> If the garment you require
        is in stock, it may only take 1-2 days. If your order needs to be specifically ordered in,
        it may take up to two weeks for an order to be completed. During busy periods like Christmas
        shipping times can vary to That's Savage.
      </p>

      <p>
        <b className="text-warning">Do you supply clothes for print?</b> Of course! Discuss with us
        what sort of color and size clothing you want and we can order in the vast majority of
        garments for printing for you. If you have a football jersey required for printing, its best
        that is supplied by the customer.
      </p>

      <p className="m-0">
        <b className="text-warning">Can I bring my own clothes to get printed?</b> Absolutely, if
        you want to supply garments that you'd prefer printed, that's not a problem.
      </p>

      <h2 className="headerText">The Nitty Gritty</h2>

      <p>
        The perfect print can be made especially for you using different methods for printing like
        Vinyl Transfer and DTG (direct to garment).
      </p>

      <p>
        <b className="text-warning">Vinyl Transfer:</b> Using our Silhouette Cameo cutting machine,
        we can cut vinyl as small as 3mm. The vinyl that we use can be layered to create images that
        have multiple colours (up to 5) and this process works on the vast majority of garment
        material. We carry vinyl in dozens of various colours which include; gold, silver, glitter
        gold and rose gold. Should you have any specific colour requirements that we don&apos;t
        stock, we can source for you. Max print size 300mm wide x 500mm high.
      </p>

      <p>
        <b className="text-warning">Direct To Garment:</b> The beauty of DTG printing is that you
        have unlimited colour options for prints on 80-100% cotton blend clothing. Photographs,
        blended and gradient colours are easily printed onto cotton t-shirts using DTG printing. Max
        print size 340mm wide x 400mm high.
      </p>

      <p>
        A wealth of experience allows us to design a product, produce a model and manufacture a high
        quality garment with the most suitable print method.
      </p>

      <p>
        For more details, a visual and a quote{" "}
        <Link className="yellowLink" to="/contact-us">
          <b>
            <u>Get in touch</u>
          </b>
        </Link>
      </p>
    </div>
  );
}
