import styles from "./style.module.scss";
import Button from "../../components/Button/Button";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import lotosOffice from "../../assets/lotos.jpg";

export default function ContactsPage() {
  return (
    <section className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.content}>
        <div className={styles.mainInfo}>
          <h2 className={styles.sectionTitle}>Контакты</h2>
          <h2 className={styles.addressMain}>
            <p>Бизнес-центр Лотос, г. Москва, ул. Одесская, 2</p>
            <span>info@aerokit.aero</span>
          </h2>
          <div className={styles.info}>
            <p className={styles.subTitle}>Отдел продаж</p>
            <div className={styles.text}>
              <p>+7 (916) 450-04-89</p>
              <p>sales@aerokit.aero</p>
            </div>
          </div>
        </div>
        <div className={styles.additionalInfo}>
          <div className={styles.info}>
            <p className={styles.subTitle}>Адреса складов:</p>
            <div className={styles.text}>
              <p>г. Серпухов, ул. Полевая 1</p>
              <p>г. Жуков, ул. Сельхозтехника, 17</p>
            </div>
          </div>
          <div className={styles.emailBlock}>
            <p className={styles.emailTitle}>Почта</p>
            <p className={styles.email}>logistics@aerokit.aero</p>
          </div>
        </div>
        <div className={styles.officeImg}>
          <img src={lotosOffice} alt="office" className={styles.img} />
        </div>
        <div className={styles.map}>
          <YMaps query={{ lang: "ru_RU" }}>
            <Map
              className={styles.img}
              defaultState={{
                center: [55.431184, 37.544905],
                zoom: 7,
              }}
            >
              <Placemark geometry={[54.909561, 37.444898]} />
              <Placemark geometry={[55.015542, 36.77621]} />
            </Map>
          </YMaps>
        </div>
        <div className={styles.feedback}>
          <div className={styles.head}>
            <div className={styles.line}></div>
            <h2>Обратная связь</h2>
            <p>
              Будем рады, если вы поделитесь впечатлениями об оказанной услуге.
              Оставьте свое сообщение, и мы обязательно ответим.
            </p>
          </div>
          <form>
            <div className={styles.contacts}>
              <div className={styles.formField}>
                <label htmlFor="name">Имя</label>
                <input type="text" id="name" placeholder="Введите имя" />
              </div>
              <div className={styles.formField}>
                <label htmlFor="email">Эл.почта</label>
                <input type="email" id="email" placeholder="@" />
              </div>
              <div className={styles.formField}>
                <label htmlFor="phone">Телефон</label>
                <input type="text" id="phone" placeholder="+7" />
              </div>
            </div>
            <div className={styles.feedbackText}>
              <label htmlFor="feedbackText">Сообщение</label>
              <textarea
                name="feedback"
                id="feedbackText"
                placeholder="Добавьте сообщение"
              ></textarea>
            </div>
          </form>
          <Button onClick={() => {}}>Отправить</Button>
        </div>
      </div>
    </section>
  );
}
