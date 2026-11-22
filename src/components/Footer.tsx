import { Link } from "@tanstack/react-router";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  PinIcon,
  TelephoneIcon,
  WhatsappIcon,
} from "components/Icons";

const item =
  "flex min-h-11 items-center gap-2 text-ink no-underline hover:text-ink hover:underline [&_svg]:size-6 [&_svg]:shrink-0";

export const Footer = () => (
  <footer className="overflow-hidden">
    <div className="mx-auto w-full max-w-sheet px-gutter" aria-hidden="true">
      <div className="rule-double" />
    </div>
    <div className="mx-auto w-full max-w-sheet px-gutter pt-6 pb-4">
      <div className="grid gap-8 md:grid-cols-3 md:gap-0">
        <section className="md:pr-6">
          <h2 className="kicker mb-3">Printed in Monaghan</h2>
          <a href="https://goo.gl/maps/gv5ke2gXp7STHdPe7" className={item}>
            <PinIcon /> Monaghan, H18 X058
          </a>
          <a href="tel:+353872105305" className={item}>
            <TelephoneIcon /> +353 87 210 5305
          </a>
          <a href="mailto:declansavo@hotmail.com" className={item}>
            <EmailIcon /> declansavo@hotmail.com
          </a>
          <a
            href="https://wa.me/353872105305"
            className={item}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsappIcon /> WhatsApp
          </a>
        </section>

        <section className="md:border-l md:border-ink md:px-6">
          <h2 className="kicker mb-3">Find us</h2>
          <a
            href="https://www.facebook.com/thatssavage"
            target="_blank"
            rel="noreferrer"
            className={item}
          >
            <FacebookIcon /> Facebook
          </a>
          <a
            href="https://www.instagram.com/thatssavage.print"
            target="_blank"
            rel="noreferrer"
            className={item}
          >
            <InstagramIcon /> Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/declan-savage-a972b424"
            target="_blank"
            rel="noreferrer"
            className={item}
          >
            <LinkedInIcon /> LinkedIn
          </a>
        </section>

        <section className="md:border-l md:border-ink md:pl-6">
          <h2 className="kicker mb-3">Notices</h2>
          <Link to="/terms-and-conditions" className={item}>
            Terms and conditions
          </Link>
          <p className="mt-2 mb-0">
            Created by{" "}
            <a
              className="text-ink hover:text-ink"
              href="https://www.linkedin.com/in/liam-savage-72b532101"
              target="_blank"
              rel="noreferrer"
            >
              Liam
            </a>{" "}
            · {new Date().getFullYear()}
          </p>
          <div
            aria-hidden="true"
            className="mt-5 inline-block -rotate-6 border-4 border-double border-paper bg-tomato px-4 py-2 text-center font-label leading-tight font-bold tracking-label text-paper uppercase"
          >
            Made in Ireland
          </div>
        </section>
      </div>
    </div>
  </footer>
);
