import { CardOptionsProps } from "types/card";
import styles from "./PreviousJobs.module.scss";

export const Job = (props: CardOptionsProps) => {
  const { front, label, children } = props;
  return (
    <div className="col-12 col-sm-6 col-lg-4" role="button" tabIndex={0}>
      {children ? (
        children
      ) : (
        <div className="card h-100">
          <figure className={`${styles.cardFig} rounded-1`} data-category={label}>
            <img src={front} alt={label} className={styles.cardPic} />
          </figure>
        </div>
      )}
    </div>
  );
};
