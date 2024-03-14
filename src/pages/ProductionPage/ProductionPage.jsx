import styles from "./style.module.scss";
import { useEffect, useRef } from "react";

const products = [
  "раскладные кресельные столики и замки",
  "пластиковые накладки кресельных подлокотников",
  "заглушки пластиковых панелей салона ВС",
  "корпуса пультов управления и систем IFE",
  "металлические и пластиковые компоненты кресел",
  "кресельные мягкости и чехлы из кожи и ткани",
  "ковровые покрытия и портьеры пассажирской кабины",
  "ремни пассажирских кресел и багажные сетки",
  "антимакассары и литературные карманы",
  "заглушки и чехлы для двигателей, ВСУ, колес и ПВД",
];

export default function ProductionPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.line} />
      <h1 className={styles.mobileTitle}>Интерьерный цех</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.playerWrapper}>
          <div className={styles.videoWrapper}>
            <video
              controls={false}
              playsInline
              loop
              muted
              ref={videoRef}
              width="0"
              height="0"
            >
              <source src="/videos/prod/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.descTitle}>Интерьерный цех</h1>
          <p className={styles.text}>
            AeroKit оказывает полный цикл услуг по производству и ремонту
            авиационных интерьерных компонентов таких как:
          </p>
          <ul className={styles.productsList}>
            {products.map((product, i) => (
              <li className={styles.item} key={i}>
                <div className={styles.itemMark}></div>
                <p>{product}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
