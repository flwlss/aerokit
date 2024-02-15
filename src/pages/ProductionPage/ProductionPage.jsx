import styles from "./style.module.scss";
import bgImg from "../../assets/productionBg.jpg";

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
  return (
    <div className={styles.container}>
      <div className={styles.bgImg}>
        <img src={bgImg} alt="bg" />
      </div>
      <div className={styles.content}>
        <h2>
          AeroKit оказывает полный цикл услуг
          <br />
          по производству и ремонту авиационных
          <br />
          интерьерных компонентов таких как:
        </h2>
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
  );
}
