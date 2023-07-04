import { Link } from "react-router-dom";
import { Job } from "./Job";
import { cards } from "./cardArray";
import styles from "./PreviousJobs.module.scss";

export const PreviousJobs = () => {
  return (
    <div className="container">
      <h2 className="headerText">What We Can Do</h2>

      <div className={`row g-2 mx-auto ${styles.cardsContainer}`}>
        {cards.map((item) => (
          <Job key={item.label} front={item.img} label={item.label} />
        ))}
        <div className="col-12 col-lg-4" role="button" tabIndex={0}>
          <Link to="/prints" className={styles.viewMoreCard}>
            <div className="card h-100">
              <h2 className="m-0 py-2">VIEW MORE</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
