import styles from "./style.module.scss";

export default function RequestButton({ children, onClick, disabled }) {
  return (
    <button disabled={disabled} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
