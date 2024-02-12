import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import bg1 from "../../assets/bg.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";
import Overlay from "../../components/Overlay/Overlay";
import RequestModal from "../../components/RequestModal/RequestModal";
import { AnimatePresence, motion } from "framer-motion";

const motionItems = [
  {
    src: bg1,
    label: "bg1",
    next: 1,
  },
  {
    src: bg2,
    label: "bg2",
    next: 2,
  },
  {
    src: bg3,
    label: "bg3",
    next: 0,
  },
];

export default function MainPage() {
  const [isReqModalOpen, setIsReqModalOpen] = useState(false);
  const [currentBg, setCurrentBg] = useState(() => motionItems[0]);

  useEffect(() => {
    const timerInterval = setTimeout(() => {
      setCurrentBg(motionItems[currentBg.next]);
    }, 5000);
    return () => clearTimeout(timerInterval);
  }, [currentBg]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.intro}>
          <h1>
            Производство <span>и ремонт</span>
            <br />
            авиационных компонентов
          </h1>
          <div className={styles.takeOrder}>
            <div className={styles.line}></div>
            <p onClick={() => setIsReqModalOpen(true)}>ЗАКАЗАТЬ УСЛУГУ</p>
          </div>
        </section>
        <div className={styles.loaders}>
          <div onClick={() => setCurrentBg(motionItems[0])}>
            <div
              id="preloader-container"
              className={`main ${currentBg.label === "bg1" ? "active" : ""}`}
              // onClick={(e) =>}` e.target.classList.add("active")}
            >
              <div className="dot"></div>
              <div id="backLine" className={styles.backLine}>
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 78 78"
                >
                  <path
                    d="M75,40A35,35,0,1,1,40,5,35,35,0,0,1,75,40"
                    transform="translate(-1 -1)"
                  />
                </svg>
              </div>
              <div id="preloader" className={styles.preloader}>
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 78 78"
                >
                  <path
                    d="M75,40A35,35,0,1,1,40,5,35,35,0,0,1,75,40"
                    transform="translate(-1 -1)"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div onClick={() => setCurrentBg(motionItems[1])}>
            <div
              id="preloader-container"
              className={`main ${currentBg.label === "bg2" ? "active" : ""}`}
              // onClick={(e) => e.target.classList.add("active")}
            >
              <div className="dot"></div>
              <div id="backLine" className={styles.backLine}>
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 78 78"
                >
                  <path
                    d="M75,40A35,35,0,1,1,40,5,35,35,0,0,1,75,40"
                    transform="translate(-1 -1)"
                  />
                </svg>
              </div>
              <div id="preloader" className={styles.preloader}>
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 78 78"
                >
                  <path
                    d="M75,40A35,35,0,1,1,40,5,35,35,0,0,1,75,40"
                    transform="translate(-1 -1)"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div onClick={() => setCurrentBg(motionItems[2])}>
            <div
              id="preloader-container"
              className={`main ${currentBg.label === "bg3" ? "active" : ""}`}
            >
              <div className="dot"></div>
              <div id="backLine" className={styles.backLine}>
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 78 78"
                >
                  <path
                    d="M75,40A35,35,0,1,1,40,5,35,35,0,0,1,75,40"
                    transform="translate(-1 -1)"
                  />
                </svg>
              </div>
              <div id="preloader" className={styles.preloader}>
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 78 78"
                >
                  <path
                    d="M75,40A35,35,0,1,1,40,5,35,35,0,0,1,75,40"
                    transform="translate(-1 -1)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bgImg}>
        <AnimatePresence>
          <motion.img
            src={currentBg.src}
            key={currentBg ? currentBg.label : "empty"}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          ></motion.img>
        </AnimatePresence>
      </div>

      {isReqModalOpen && (
        <Overlay>
          <RequestModal onClose={() => setIsReqModalOpen(false)} />
        </Overlay>
      )}
    </div>
  );
}
