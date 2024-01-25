import styles from "./style.module.scss";
import Button from "../../components/Button/Button";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

export default function ContactsPage() {
  return (
    <section className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2>Контакты</h2>
          <div className={styles.description}>
            <div className={styles.warehouses}>
              <p className={styles.bold}>Адреса складов:</p>
              <p>г. Серпухов, ул. Полевая 1</p>
              <p>г. Жуков, ул. Сельхозтехника, 17</p>
            </div>
            <p className={styles.phone}>+7 495 740 01 07</p>
            <p>info@aerokit.aero</p>
          </div>
        </div>
        <div className={styles.feedback}>
          <div className={styles.head}>
            <h2>Обратная связть</h2>
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
        <div className={styles.map}>
          <YMaps query={{ lang: 'ru_RU' }}>
            <Map
              className={styles.img}
              defaultState={{
                center: [55.431184, 37.544905],
                zoom: 7,
              }}
            >
              <Placemark geometry={[54.909561, 37.444898]} />
              <Placemark geometry={[55.015542, 36.776210]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </section>
  );
}
