import styles from "./style.module.scss";
import bgImg from "../../assets/repairBg.png"

const repairs = [
  "Гарнитуры",
  "Габаритные фонари ВС",
  "Фары подсветки крыла и двигателя",
  "Чехлы из вафельной ткани для пилотских кресел",
  "Мегафоны",
  "Системы освещения салона ВС",
  "Микрофоны",
  "Балласты",
  "Системы освещения грузовых отсеков",
  "Рулежные фары",
  "Блоки питания аварийного освещения",

  "Источники питания батареи",
  "Пассажирские сервисные панели",
  "Взлетно-посадочные фары",
  "Кофеварки",
  "Бойлеры",
  "Подводные аварийные маяки",
  "Багажные сетки",
  "Сливные патрубки",
  "Окна кабины пилотов",
  "Никель-кадмиевые батареи",
  "Колеса стоек шасси"
];

export default function RepairPage() {
  return (
    <div className={styles.container}>
      <div className={styles.bgImg}>
        <img src={bgImg} alt="bg"/>
      </div>
      <div className={styles.content}>
        <div className={styles.line}></div>
        <h1>Перечень ремонтируемых компонентов</h1>
        <ul className={styles.productsList}>
          <div className={styles.column1}>
            {repairs.slice(0, repairs.length / 2).map((product, i) => (
              <li key={i}>{product}</li>
            ))}
          </div>
          <div className={styles.column2}>
            {repairs.slice(repairs.length / 2).map((product, i) => (
              <li key={i}>{product}</li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
