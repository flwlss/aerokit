import styles from "./style.module.scss";

export default function ActivityPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>О нас</span>
        <h1>Деятельность</h1>
      </header>
      <div className={styles.service}>
        <p>
          AeroKit оказывает полный цикл услуг по оснащению авиационных
          интерьеров:
        </p>
        <ul className={styles.serviceList}>
          <li className={styles.serviceItem}>
            ∙ производство и ремонт авиационных интерьерных компонентов
          </li>
          <li className={styles.serviceItem}>
            ∙ инженерные и дизайнерские услуги
          </li>
          <li className={styles.serviceItem}>
            ∙ изготовление средств наземного обеспечения
          </li>
          <li className={styles.serviceItem}>
            ∙ ремонт грузового и съемного кухонного оборудования
          </li>
        </ul>
      </div>
    </div>
  );
}
