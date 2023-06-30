import { CardOptionsProps } from "types/card";
import styles from "./PreviousJobs.module.scss";

export const Job = (props: CardOptionsProps) => {
  const { front, label } = props;
  return (
    <div className="col-6 col-lg-4" tabIndex={0}>
      <div className="card h-100">
        <figure className={`${styles.cardFig} rounded-1`} data-category={label}>
          <img src={front} alt={label} className={styles.cardPic} />
        </figure>
      </div>
    </div>
  );
};
