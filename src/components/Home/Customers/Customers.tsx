import styles from "./Customers.module.scss";
import { customers } from "./customerArray";

export const Customers = () => {
  return (
    <div className="container pt-3 pb-5 px-0">
      <h2 className="headerText">Some Of Our Happy Customers</h2>

      <div className={`row g-2 mx-auto ${styles.widthBox}`}>
        <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-between">
          <img
            className={`${styles.imageBlock} mb-2`}
            src={customers[0].img}
            alt={customers[0].label}
          />
          <img className={styles.imageBlock} src={customers[1].img} alt={customers[1].label} />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className={styles.imageBlock} src={customers[4].img} alt={customers[4].label} />
        </div>
        <div className="d-none col-md-12 col-lg-4 d-md-flex flex-column justify-content-between">
          <img
            className={`${styles.imageBlock} mb-2`}
            src={customers[2].img}
            alt={customers[2].label}
          />
          <img className={styles.imageBlock} src={customers[3].img} alt={customers[3].label} />
        </div>
      </div>
    </div>
  );
};
