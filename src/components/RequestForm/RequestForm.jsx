import RequestButton from "../RequestButton/RequestButton";
import styles from "./style.module.scss";

export default function RequestForm() {
  return (
    <form className={styles.form}>
          <div className={styles.formField}>
            <label htmlFor="airCompany">Авиакомпания</label>
            <input type="text" id="airCompany" placeholder="Введите название" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="vsType">Тип ВС</label>
            <input type="text" id="vsType" placeholder="Введите тип ВС" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="planNums">Чертежные номера</label>
            <input type="text" id="planNums" placeholder="Введите номера" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="name">Тип продукции</label>
            <input type="text" id="name" placeholder="Введите тип" />
          </div>
          <div className={styles.formField}>
              <label htmlFor="quantity">Количество</label>
              <input type="text" id="quantity" placeholder="Введите количество" />
            </div>
            <div className={styles.formField}>
              <label htmlFor="deadLines">Желаемая дата поставки</label>
              <input type="text" id="deadLines" placeholder="Введите дату" />
            </div>
          <div className={styles.formField}>
            <label htmlFor="deliveryAddress">Адрес поставки</label>
            <input
              type="text"
              id="deliveryAddress"
              placeholder="Введите адрес"
            />
          </div>
          <div className={styles.cells}>
            <div className={styles.formField}>
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" placeholder="@" />
            </div>
            <div className={styles.formField}>
              <label htmlFor="phone">Телефон</label>
              <input type="text" id="phone" placeholder="+7" />
            </div>
          </div>
          <div className={styles.submitBtnContainer}>
            <RequestButton onClick={() => {}}>Отправить</RequestButton>
          </div>
        </form>
  )
}