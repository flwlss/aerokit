import styles from "./style.module.scss";
import { useState } from "react";
import Overlay from "../../components/Overlay/Overlay";
import RequestModal from "../../components/RequestModal/RequestModal";

export default function MainPage() {
  const [isReqModalOpen, setIsReqModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.intro}>
          <h1>
            Производство <span>и ремонт</span>
            <br />
            авиационных компонентов
          </h1>
          <div
            className={styles.takeOrder}
          >
            <div className={styles.line}></div>
            <p onClick={() => setIsReqModalOpen(true)}>ЗАКАЗАТЬ УСЛУГУ</p>
          </div>
        </section>
      </div>
      {isReqModalOpen && (
        <Overlay>
          <RequestModal onClose={() => setIsReqModalOpen(false)} />
        </Overlay>
      )}
    </div>
  );
}
