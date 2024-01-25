import styles from "./style.module.scss";

export default function ManagerCard({name, post, bgUrl}) {
  return (
    <div className={styles.cardContainer}>
      <img src={bgUrl} alt="avatar" />
      <div className={styles.description}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.post}>{post}</p>
      </div>
    </div>
  )
}
