import styles from "./style.module.scss";
import pavelZ from "../../assets/managers/pavel_zagryadskiy.png";
import aleksA from "../../assets/managers/aleksandr_aleksandrov.png";
import ManagerCard from "../../components/ManagerCard/ManagerCard";

const managers = [
  {
    name: 'Павел Загрядский',
    post: 'Генеральный директор',
    bgUrl: pavelZ
  },
  {
    name: 'Александр Александров',
    post: 'Директор по качеству',
    bgUrl: aleksA
  },
  {
    name: 'Сергей Огневюк',
    post: 'Начальник производства Интерьерного цеха',
    bgUrl: pavelZ
  },
  {
    name: 'Андрей Мороз',
    post: 'Руководитель участка по ремонту колес и тормозов',
    bgUrl: aleksA
  },
  {
    name: 'Анатолий Разин',
    post: 'Ведущий инженер Электромеханического участка',
    bgUrl: pavelZ
  },
  {
    name: 'Владимир Карабан',
    post: 'Директор по МТО',
    bgUrl: aleksA
  },
]

export default function ManagementPage() {
  return (
    <>
      <header className={styles.header}>
        <span>О нас</span>
        <h1>Руководство</h1>
      </header>
      <div className={styles.managers}>
        {
          managers.map((manager, i) => <ManagerCard key={i} name={manager.name} post={manager.post} bgUrl={manager.bgUrl} />)
        }
      </div>
    </>
  )
}
