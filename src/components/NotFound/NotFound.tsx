import styles from "./NotFound.module.scss";

export function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>This page does not exist</h1>
    </div>
  );
}
