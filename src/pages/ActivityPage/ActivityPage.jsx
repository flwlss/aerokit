import { useWindowSize } from "@uidotdev/usehooks";
import styles from "./style.module.scss";
import bgImg from "../../assets/aboutMini.png";
import { useEffect, useState, useRef } from "react";

const swiperData = {
  aboutUs: {
    name: "aboutUs",
    next: "service",
  },
  service: {
    name: "service",
    next: "warranty",
  },
  warranty: {
    name: "warranty",
    next: "aboutUs",
  },
};

export default function ActivityPage() {
  const { width } = useWindowSize();
  const [currentTab, setCurrentTab] = useState(() => swiperData.aboutUs.name);
  const [isSwiperStopped, setSwiperStopped] = useState(false);
  const swiperInterval = useRef(null);
  const timeLineRef = useRef(null);
  const secondDotRef = useRef(null);
  const thirdDotRef = useRef(null);

  useEffect(() => {
    if (currentTab.name === "aboutUs") {
      secondDotRef.current.style.backgroundColor = "white";
      thirdDotRef.current.style.backgroundColor = "white";
    }
    if (!isSwiperStopped) {
      swiperInterval.current = setTimeout(() => {
        const next = swiperData[currentTab].next;
        setCurrentTab(next);
      }, 10000);
    }
    return () => clearTimeout(swiperInterval.current);
  }, [currentTab]);

  useEffect(() => {
    if (secondDotRef.current && thirdDotRef.current) {
      switch (currentTab) {
        case "aboutUs":
          secondDotRef.current.style.backgroundColor = "white";
          thirdDotRef.current.style.backgroundColor = "white";
          break;
        case "service":
          secondDotRef.current.style.backgroundColor = "#49C5B1";
          thirdDotRef.current.style.backgroundColor = "white";
          break;
        case "warranty":
          thirdDotRef.current.style.backgroundColor = "#49C5B1";
          break;
      }
    }
  }, [currentTab]);

  return (
    <div className={styles.container}>
      {width < 768 && (
        <div className={styles.loaders}>
          <div onClick={() => setCurrentTab("aboutUs")}>
            <div
              id="preloader-container"
              className={currentTab === "aboutUs" ? "active" : ""}
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
          <div onClick={() => setCurrentTab("service")}>
            <div
              id="preloader-container"
              className={currentTab === "service" ? "active" : ""}
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
          <div onClick={() => setCurrentTab("warranty")}>
            <div
              id="preloader-container"
              className={currentTab === "warranty" ? "active" : ""}
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
      )}
      {width >= 768 && (
        <div className={styles.timeLineTrack}>
          <div
            className={styles.timeLineDot}
            onClick={() => {
              setCurrentTab("aboutUs");
              setSwiperStopped(true);
              clearInterval(swiperInterval.current);
              timeLineRef.current.style.animation = "none";
              timeLineRef.current.style.height = "0px";
              secondDotRef.current.style.animation = "none";
              thirdDotRef.current.style.animation = "none";
            }}
          ></div>
          <div
            ref={secondDotRef}
            className={styles.timeLineDot}
            onClick={(e) => {
              setCurrentTab("service");
              setSwiperStopped(true);
              clearInterval(swiperInterval.current);
              timeLineRef.current.style.animation = "none";
              e.target.style.backgroundColor = "#49C5B1";
              timeLineRef.current.style.height = "300px";
            }}
          ></div>
          <div
            ref={thirdDotRef}
            className={styles.timeLineDot}
            onClick={(e) => {
              setCurrentTab("warranty");
              setSwiperStopped(true);
              clearInterval(swiperInterval.current);
              timeLineRef.current.style.animation = "none";
              e.target.style.backgroundColor = "#49C5B1";
              timeLineRef.current.style.height = "600px";
            }}
          ></div>
          <div className={styles.timeLine} ref={timeLineRef}></div>
        </div>
      )}
      <div className={styles.infoBlock}>
        {currentTab === "aboutUs" && (
          <div className={`${styles.info} ${styles.aboutUs}`}>
            <span className={styles.title}>О компании</span>
            <div className={styles.description}>
              <p>
                Компания AeroKit создана в 2018 году для осуществления полного
                цикла работ по производству и ремонту авиационных компонентов и
                является частью{" "}
                <span className={styles.focusText}>UTG GROUP</span> - первого
                независимого российского оператора наземного обслуживания
                полного цикла.
              </p>
              <br />
              <p>
                Мы не останавливаемся
                на достигнутом и всегда стремимся к большему – ежемесячно
                пополняем перечень ремонтируемых компонентов новыми позициями,
                расширяя возможности предоставляемых услуг.
              </p>
            </div>
          </div>
        )}
        {currentTab === "service" && (
          <div className={`${styles.info} ${styles.service}`}>
            <span className={styles.title}>Услуги</span>
            <div className={styles.description}>
              <p>
                Профессиональная команда AeroKit - это тщательно отобранные и
                высококвалифицированные специалисты.
              </p>
              <br />
              <p>
                Мы обслуживаем все типы воздушных судов, эксплуатируемых в РФ –{" "}
                <span className={styles.focusText}>
                  Boeing, Airbus, Bombardier, Embraer, ATR, SSJ
                </span>{" "}
                и не останавливаемся на достигнутом – ежемесячно пополняем
                перечень ремонтируемых компонентов новыми позициями, расширяя
                возможности предоставляемых услуг.
              </p>
              <br />
            </div>
          </div>
        )}
        {currentTab === "warranty" && (
          <div className={`${styles.info} ${styles.warranty}`}>
            <span className={styles.title}>Гарантии качества</span>
            <div className={styles.description}>
              <p>
                AeroKit поддерживает высокий уровень качества предоставляемых
                услуг, выпускаемой продукции и{" "}
                <span className={styles.focusText}>
                  сертифицирована по стандартам
                </span>{" "}
                ISO 9001 и ФАП-285.
              </p>
              <br />
              <p>
                Клиенты доверяют нам ремонт авиационных компонентов, и мы&nbsp;
                <span className={styles.focusText}>
                  своевременно исполняем наши обязательства
                </span>
                .
              </p>
              <br />
              <p>
                Гарантия исполнения сроков и контроль качества на всех этапах
                обеспечивают стабильность расписания наших клиентов и
                поддерживают безопасность полетов на высоком уровне.
              </p>
              <span className={styles.focusText}>
                лидирующие позиции в сфере ТОиР компонентов ВС
              </span>
            </div>
          </div>
        )}
      </div>

      {width < 768 && <img src={bgImg} className={styles.img} alt="image" />}
    </div>
  );
}
