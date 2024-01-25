import styles from "./style.module.scss";
import bgImg from "../../assets/productionBg.png"

const products = [
  "Ковровое покрытие из натуральной шерсти",
  "Чехлы из кожи и ткани для пассажирских кресел",
  "Чехлы из вафельной ткани для пилотских кресел",
  "Чехлы из кожи и ткани для кресел бортпроводников",
  "Мягкости для пассажирских кресел, кресел пилотов и бортпроводников",
  "Литературные карманы для пассажирских кресел  и антимакассары",
  "Пластиковые накладки кресельных подлокотников",
  "Защитные и декоративные элементы пассажирских кресел",
  "Шторы и разделители классов",
  "Заглушки и чехлы для двигателей, вспомогательных силовых установок, колес и приемников воздушного давления",

  "Откидные столики для пассажирских кресел",
  "Замки для столиков пассажирских кресел",
  "Технические дорожки и чехлы на кресла (для ТО ВС)",
  "Чехлы для оборудования",
  "Защитные колпаки для колес ВС",
  "Оружейные контейнеры",
  "Ремни пассажирских кресел, кресел пилотов и бортпроводников",
  "Корпус систем IFE, пультов управления, плафонов аварийных выходов",
  "Пластиковые декоративные накладки пассажирских кресел",
  "Металлические, пластиковые, неструктурные, декоративные компоненты кресел и багажных отсеков",
];

export default function ProductionPage() {
  return (
    <div className={styles.container}>
      <div className={styles.bgImg}>
        <img src={bgImg} alt="bg"/>
      </div>
      <div className={styles.content}>
        <div className={styles.line}></div>
        <h1>Перечень выпускаемой продукции</h1>
        <ul className={styles.productsList}>
          <div className={styles.column1}>
            {products.slice(0, products.length / 2).map((product, i) => (
              <li key={i}>{product}</li>
            ))}
          </div>
          <div className={styles.column2}>
            {products.slice(products.length / 2).map((product, i) => (
              <li key={i}>{product}</li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}