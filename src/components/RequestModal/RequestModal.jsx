import { useState } from "react";
import styles from "./style.module.scss";
import RequestForm from "../RequestForm/RequestForm";
import RepairForm from "../RepairForm/RepairForm";
import cross from "../../assets/svg/cross.svg"

const formTypes = {
  PRODUCTION: "production",
  REPAIR: "repair",
};

export default function RequestModal({ onClose }) {
  const [currentForm, setCurrentForm] = useState(formTypes.PRODUCTION);

  return (
    <div className={styles.requestModalContainer}>
      <div className={styles.content}>
        <header>
          <h2>Заказать услугу</h2>
          <div className={styles.formToggle}>
            <span
              className={
                currentForm === formTypes.PRODUCTION ? styles.active : ""
              }
              onClick={() => setCurrentForm(formTypes.PRODUCTION)}
            >
              Производство
            </span>
            <span
              className={currentForm === formTypes.REPAIR ? styles.active : ""}
              onClick={() => setCurrentForm(formTypes.REPAIR)}
            >
              Ремонт
            </span>
          </div>
        </header>
        {
          currentForm === formTypes.PRODUCTION ? <RequestForm/> : <RepairForm/>
        }
      <img src={cross} alt="exit" className={styles.exit} onClick={onClose}/>
      </div>
    </div>
  );
}
