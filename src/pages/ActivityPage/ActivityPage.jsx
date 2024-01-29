import styles from "./style.module.scss";
import listIcon from "../../assets/svg/listMark.svg";

export default function ActivityPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>О нас</span>
        <h1>Деятельность</h1>
      </header>
      <div className={styles.service}>
        <h2 className={styles.intro}>
          Компания Аэрокит создана в 2018 году для осуществления полного цикла
          работ по производству и ремонту компонентов и на данный момент
          занимает{" "}
          <span className={styles.focusText}>
            лидирующие позиции в сфере ТОиР компонентов ВС
          </span>
        </h2>
        <div className={styles.serviceList}>
          <div className={styles.group}>
            <img src={listIcon} width={32} height={32}></img>
            <div className={styles.groupItem}>
              <h3>
                AeroKit оказывает полный цикл услуг по оснащению авиационных
                интерьеров:
              </h3>
              <ul className={styles.groupItemList}>
                <li className={styles.serviceItem}>
                  ∙ производство и ремонт авиационных компонентов
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
          <div className={styles.group}>
            <img src={listIcon} width={32} height={32}></img>
            <h3>
              Компания поддерживает высокий уровень качества предоставляемых
              услуг, выпускаемой продукции и сертифицирована по стандартам ISO
              9001 и ФАП-285
            </h3>
          </div>
          <div className={styles.group}>
            <img src={listIcon} width={32} height={32}></img>
            <h3>
              Мы обслуживаем все типы воздушных судов, эксплуатируемых в РФ –
              Boeing, Airbus, Bombardier, Embraer, ATR, SSJ
            </h3>
          </div>
          <div className={styles.group}>
            <img src={listIcon} width={32} height={32}></img>
            <h3>
              Команда Аэрокит состоит из тщательно отобранных, подготовленных и
              обученных профессионалов. Персонал компании - механики, техники,
              инженеры, конструкторы, технологи, специалисты по качеству,
              менеджеры, сотрудники склада, регулярно проходят обучение в
              Авиационно-учебных центрах
            </h3>
          </div>
          <div className={styles.group}>
            <img src={listIcon} width={32} height={32}></img>
            <h3>
              Клиенты доверяют нам ремонт своих компонентов и мы исполняем
              обязательства при любых обстоятельствах. Сроки выполнения услуг и
              контроль качества обеспечивают стабильность расписания наших
              клиентов и поддерживают безопасность полетов на высоком уровне
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
