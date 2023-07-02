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
        rough estimate, T-shirts start from €12-15 upwards while jumpers and hoodies from €15-18
        upwards. The prices depends on many factors like how many items you want, what size of
        clothing, the amount of colours and type of printing you want, and how fast you need the job
        done among other things. This is why it is best to get in contact for a quote.
      </p>

      <p>
        <b className="text-warning">How long does a print job take?</b> We strive to have your order
        printed in a week. If orders are quite large or the order is in a busy periods like
        Christmas, it can take up to 10 days to get clothes and printing supplies shipped to That's
        Savage.
      </p>

      <p>
        <b className="text-warning">Do you supply clothes for print?</b> Of course! Discuss with us
        what sort of color and size clothing you want and we can order it in for you.
      </p>

      <p className="m-0">
        <b className="text-warning">Can I bring my own clothes to get printed?</b> Absolutely, check
        out some of the prints for ideas of what people have brought to us.
      </p>

      <h2 className="headerText">The Nitty Gritty</h2>

      <p>
        Using three different methods for printing; Sublimation Print, Vinyl Transfer and DTG
        (direct to garment), the perfect print can be made especially for you.
      </p>

      <p>
        <b className="text-warning">Sublimation Print:</b> Heat pressed at 190 degrees, these
        transfers are suited for polyester jersey type material. Our sublimation process works best
        on light colours allowing your design to really stand out. Max print size, A4.
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
