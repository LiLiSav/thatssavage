import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  PinIcon,
  TelephoneIcon,
} from "components/Icons";
import styles from "./Footer.module.scss";

const PhoneNumber = () => {
  return (
    <div className={`${styles.footerRowNumber} ${styles.footerSpacing}`}>
      <a href="tel:+353872105305" className="text-light nav-link">
        <TelephoneIcon /> +353 (0)87 210 5305
      </a>
    </div>
  );
};
const SocialMediaButtons = () => {
  return (
    <div className={styles.footerSpacing}>
      <a href="https://www.facebook.com/thatssavage" target="_blank" rel="noreferrer">
        <button type="button" className={styles.btnFacebook}>
          <FacebookIcon />
        </button>
      </a>
      <a href="https://www.instagram.com/thatssavage.print" target="_blank" rel="noreferrer">
        <button type="button" className={styles.btnInsta}>
          <InstagramIcon />
        </button>
      </a>
      <a href="https://www.linkedin.com/in/declan-savage-a972b424" target="_blank" rel="noreferrer">
        <button type="button" className={styles.btnLinkedIn}>
          <LinkedInIcon />
        </button>
      </a>
    </div>
  );
};
const Address = () => {
  return (
    <a
      className={`text-light nav-link ${styles.footerSpacing}`}
      href="https://goo.gl/maps/gv5ke2gXp7STHdPe7"
      target="_blank"
      rel="noreferrer"
    >
      <PinIcon />
      Carrickaderry, Clontibret,
      <br />
      Monaghan, H18 X058
    </a>
  );
};

const Email = () => {
  return (
    <div className={`${styles.footerRowNumber} ${styles.footerSpacing}`}>
      <a href="mailto:declan.thatssavage@gmail.com" className="text-light nav-link">
        <EmailIcon /> declan.thatssavage@gmail.com
      </a>
    </div>
  );
};

export const Footer = () => (
  <nav className={styles.footerContainer}>
    <div className={styles.footerItems}>
      <div className={styles.footerRow}>
        <h5 className={styles.footerHeader}>Phone Number</h5>
        <PhoneNumber />
      </div>

      <div className={styles.footerRow}>
        <h5 className={styles.footerHeader}>Email</h5>
        <Email />
      </div>

      <div className={styles.footerRow}>
        <h5 className={styles.footerHeader}>Location</h5>
        <Address />
      </div>

      <div className={styles.footerRow}>
        <h5 className={`${styles.footerHeader} mb-0`}>Social Media</h5>
        <SocialMediaButtons />
      </div>
    </div>

    <div className={styles.footerFooter}>
      Created by{" "}
      <a
        className={styles.linkText}
        href="https://www.linkedin.com/in/liam-savage-72b532101"
        target="_blank"
        rel="noreferrer"
      >
        Liam
      </a>
    </div>
  </nav>
);
