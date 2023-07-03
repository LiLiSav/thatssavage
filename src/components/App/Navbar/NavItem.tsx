import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

interface NavItemProps {
  closeMobileMenu: () => void;
  item: {
    name: string;
    link: string;
  };
}

export const NavItem = ({ closeMobileMenu, item }: NavItemProps) => {
  return (
    <li className={styles.navItem}>
      <Link to={item.link} className={styles.navLinks} onClick={closeMobileMenu}>
        <span className={styles.NoTextBreak}>{item.name}</span>
      </Link>
    </li>
  );
};
