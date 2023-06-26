import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container shadow p-5 mb-3 mt-3 card">
      <div>
        <h2 className="title text-warning">About Us</h2>
        <hr />
      </div>

      <p>
        <i>That's Savage</i> specialize in high quality, custom print garments and logo design. With
        over 10 years experience in design and garment printing, we are confident that we can supply
        a tailor made print to your liking. There are no minimum order requirements meaning that we
        can print special one off garments while also catering for much larger orders.
      </p>

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
        <b className="text-warning">DTG:</b> The beauty of DTG printing is that you have unlimited
        colour options for prints on 80-100% cotton blend clothing. Photographs, blended and
        gradient colours are easily printed onto cotton t-shirts using DTG printing. Max print size
        340mm wide x 400mm high.
      </p>

      <p>
        A wealth of experience allows us to design a product, produce a model and manufacture a high
        quality garment with the most suitable print method.
      </p>

      <p>
        <Link className="text-warning" to="/contact-us">
          <b>
            <u>Get in touch</u>
          </b>
        </Link>{" "}
        today for more details, a visual and a quote.
      </p>
    </div>
  );
}
