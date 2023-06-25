import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.scss";

const PhoneNumber = () => {
  return (
    <div className={`${styles.footerRowNumber} ${styles.footerSpacing}`}>
      <a href="tel:+353872105305" className="text-light nav-link">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-telephone-fill text-warning"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
          />
        </svg>{" "}
        +353 (0)87 210 5305
      </a>
    </div>
  );
};
const SocialMediaButtons = () => {
  return (
    <div className={styles.footerSpacing}>
      <a href="https://www.facebook.com/thatssavage" target="_blank" rel="noreferrer">
        <button type="button" className={styles.btnFacebook}>
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </button>
      </a>
      <a href="https://www.instagram.com/thatssavage.print" target="_blank" rel="noreferrer">
        <button type="button" className={styles.btnInsta}>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </button>
      </a>
      <a href="https://www.linkedin.com/in/declan-savage-a972b424" target="_blank" rel="noreferrer">
        <button type="button" className={styles.btnLinkedIn}>
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
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
      Carrickaderry, Clontibret,
      <br />
      Monaghan, H18 X058
    </a>
  );
};

export const Footer = () => {
  return (
    <nav className={styles.footerContainer}>
      <div className={styles.footerItems}>
        <div className={`${styles.footerRow} ${styles.order1}`}>
          <h5 className={`${styles.footerHeader} text-center`}>Phone Number</h5>
          <PhoneNumber />
        </div>

        <div className={`${styles.footerRow} ${styles.order2}`}>
          <h5 className={`${styles.footerHeader} text-center`}>Social Media</h5>
          <SocialMediaButtons />
        </div>

        <div className={`${styles.footerRow} ${styles.order3}`}>
          <h5 className={`${styles.footerHeader} text-center mb-0`}>Monaghan Office</h5>
          <Address />
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
};
