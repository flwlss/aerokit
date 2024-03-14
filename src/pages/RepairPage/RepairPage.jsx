import styles from "./style.module.scss";
import { useState } from "react";
import SlideButtons from "../../components/SlideButtons/SlideButtons";
import Electromechanics from "../../slides/Electromechanics/Electromechanics";
import Wheels from "../../slides/Wheels/Wheels";

const swiperData = {
  main: {
    name: "main",
    next: "electronic",
  },
  electronic: {
    name: "electronic",
    next: "main",
  },
};

export default function RepairPage() {
  const [currentTab, setCurrentTab] = useState(
    () => swiperData.electronic.name
  );

  return (
    <>
      <div className={styles.container}>
        <SlideButtons currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </div>
      {currentTab === "electronic" && <Electromechanics />}
      {currentTab === "main" && <Wheels />}
    </>
  );
}
