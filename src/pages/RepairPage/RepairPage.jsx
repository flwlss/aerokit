import styles from "./style.module.scss";
import electronicBg from "../../assets/electronicBg.jpg";
import bgImg from "../../assets/repairBg.jpg";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import SlideButtons from "../../components/SlideButtons/SlideButtons";
import Electromechanics from "../../slides/Electromechanics/Electromechanics";

const mainRepairs = [
  "Boeing - B737 (CL & NG), B757, B767, B777, B747",
  "Airbus - А319/320/321/A330",
  "Bombardier - СRJ-200",
  "ATR - ATR42/72",
  "Irkut - SJ100",
];

const electonicsRepairs = [
  "микрофоны, мегафоны и гарнитуры",
  "системы освещения грузовых отсеков",
  "системы освещения салона и балласты",
  "габаритные фонари самолета",
  "фары подсветки крыла и двигателя",
  "блоки питания аварийного освещения",
  "источники питания батареи",
  "пассажирские сервисные панели",
  "взлетно-посадочные и рулежные фары",
  "кофеварки, бойлеры и печи",
  "подводные аварийные маяки",
  "дренажные патрубки",
  "остекление кабины пилотов",
  "основные никель кадмиевые батареи",
];

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
  // const { width } = useWindowSize();
  const [currentTab, setCurrentTab] = useState(
    () => swiperData.electronic.name
  );

  // useEffect(() => {
  //   const timerInterval = setTimeout(() => {
  //     const next = swiperData[currentTab].next;
  //     setCurrentTab(next);
  //   }, 10000);
  //   return () => clearTimeout(timerInterval);
  // }, [currentTab]);

  return (
    <div className={styles.container}>
      <SlideButtons currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === "electronic" && <Electromechanics />}
      {/* {width < 768 && (
        <>
          {currentTab === "electronic" && (
            <div className={`${styles.electronic} ${styles.animated}`}>
              <div className={styles.bgImg}>
                <img src={electronicBg} alt="bg" />
              </div>

              <div className={styles.loaders}>
                <div onClick={() => setCurrentTab("electronic")}>
                  <div
                    id="preloader-container"
                    className={currentTab === "electronic" ? "active" : ""}
                    // onClick={(e) => e.target.classList.add("active")}
                  >
                    <div className="dot"></div>
                    <div id="backLine">
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
                    <div id="preloader">
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
                <div onClick={() => setCurrentTab("main")}>
                  <div
                    id="preloader-container"
                    className={currentTab === "main" ? "active" : ""}
                    // onClick={(e) => e.target.classList.add("active")}
                  >
                    <div className="dot"></div>
                    <div id="backLine">
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
                    <div id="preloader">
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

              <div className={styles.content}>
                <h2>Электромеханический участок</h2>
                <ul className={styles.productsList}>
                  {electonicsRepairs.map((repair, i) => (
                    <li className={styles.item} key={i}>
                      <div className={styles.itemMark}></div>
                      <p>{repair}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {currentTab === "main" && (
            <div className={`${styles.main} ${styles.animated}`}>
              <div className={styles.bgImg}>
                <img src={bgImg} alt="bg" />
              </div>
              <div className={styles.loaders}>
                <div onClick={() => setCurrentTab("electronic")}>
                  <div
                    id="preloader-container"
                    className={currentTab === "electronic" ? "active" : ""}
                    // onClick={(e) => e.target.classList.add("active")}
                  >
                    <div className="dot"></div>
                    <div id="backLine">
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
                    <div id="preloader">
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
                <div onClick={() => setCurrentTab("main")}>
                  <div
                    id="preloader-container"
                    className={currentTab === "main" ? "active" : ""}
                    // onClick={(e) => e.target.classList.add("active")}
                  >
                    <div className="dot"></div>
                    <div id="backLine">
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
                    <div id="preloader">
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
              <div className={styles.content}>
                <h2>
                  AeroKit является ведущим поставщиком услуг по техническому
                  обслуживанию и ремонту авиационных колес и тормозных устройств
                  ведущих мировых производителей - <span>Honeywell</span>,{" "}
                  <span>Goodrich</span>, <span>MABS</span>, <span>Safran</span>.
                  <br />
                  <br /> Перечень возможностей включает более 40 компонентов,
                  используемых на различных типах ВС:
                </h2>
                <ul className={styles.productsList}>
                  {mainRepairs.map((repair, i) => (
                    <li className={styles.item} key={i}>
                      <div className={styles.itemMark}></div>
                      <p>{repair}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </>
      )}
      {width >= 768 && (
        <>
          <div className={styles.electronic}>
            <div className={styles.bgImg}>
              <img src={electronicBg} alt="bg" />
            </div>
            <div className={styles.content}>
              <h2>Электромеханический участок</h2>
              <ul className={styles.productsList}>
                {electonicsRepairs.map((repair, i) => (
                  <li className={styles.item} key={i}>
                    <div className={styles.itemMark}></div>
                    <p>{repair}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.main}>
            <div className={styles.bgImg}>
              <img src={bgImg} alt="bg" />
            </div>
            <div className={styles.content}>
              <h2>
                AeroKit является ведущим поставщиком услуг по техническому
                обслуживанию и ремонту авиационных колес и тормозных устройств
                ведущих мировых производителей - <span>Honeywell</span>,{" "}
                <span>Goodrich</span>, <span>MABS</span>, <span>Safran</span>.
                <br />
                <br /> Перечень возможностей включает более 40 компонентов,
                используемых на различных типах ВС:
              </h2>
              <ul className={styles.productsList}>
                {mainRepairs.map((repair, i) => (
                  <li className={styles.item} key={i}>
                    <div className={styles.itemMark}></div>
                    <p>{repair}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )} */}
    </div>
  );
}
