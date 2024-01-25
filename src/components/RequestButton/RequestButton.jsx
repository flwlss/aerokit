import styles from './style.module.scss';

export default function RequestButton({children, onClick}) {
  return (
    <button className={styles.button} onClick={onClick}>{children}</button>
  )
}
