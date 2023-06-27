import { Link } from "react-router-dom";
import { Job } from "./Job";
import { card } from "./cardArray";
import styles from "./PreviousJobs.module.scss";

export const PreviousJobs = () => {
  return (
    <div className="container">
      <h2 className="headerText">What We Can Do</h2>

      <div className={`row g-2 mx-auto ${styles.cardsContainer}`}>
        {card.map((item) => (
          <Job key={item.front} front={item.front} label={item.label} />
        ))}
        <div className="col-12 col-lg-4" role="button" tabIndex={0}>
          <Link to="/gallery" className={styles.viewMoreCard}>
            <div className="card h-100">
              <h2>VIEW MORE</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
