import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

interface NavItemProps {
  closeMobileMenu: () => void;
  name: string;
}

export const NavItem = ({ closeMobileMenu, name }: NavItemProps) => {
  return (
    <li className={styles.navItem}>
      <Link to="/" className={styles.navLinks} onClick={closeMobileMenu}>
        <span className={styles.NoTextBreak}>{name}</span>
      </Link>
    </li>
  );
};
