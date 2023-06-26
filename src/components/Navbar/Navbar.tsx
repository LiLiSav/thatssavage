import { useState } from "react";
import { Link } from "react-router-dom";
import Name from "images/Name.png";
import styles from "./Navbar.module.scss";
import { NavItem } from "./NavItem";
import { navArray } from "./navArray";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className={styles.navbarTop}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo} rel="logo" onClick={closeMobileMenu}>
          <img src={Name} style={{ width: "100%" }} alt="Website Logo" />
        </Link>
        <div
          className={styles.menuIcon}
          onClick={handleClick}
          onKeyDown={handleClick}
          role="button"
          tabIndex={0}
        >
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
          {navArray.map((navItem) => {
            return <NavItem key={navItem.name} closeMobileMenu={closeMobileMenu} item={navItem} />;
          })}
        </ul>
      </div>
    </nav>
  );
};
