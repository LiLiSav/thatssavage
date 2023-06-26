import styles from "./Introduction.module.scss";

interface TextBoxProps {
  title: string;
  children: string;
}

export const TextBox = ({ title, children }: TextBoxProps) => {
  return (
    <li>
      <div className={styles.itemContainer}>
        <h4>
          <b>{title}</b>
        </h4>
        <p>{children}</p>
      </div>
    </li>
  );
};
