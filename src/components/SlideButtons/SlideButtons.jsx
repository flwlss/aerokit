import styles from "./style.module.scss";

export default function SlideButtons({ currentTab, setCurrentTab }) {
  return (
    <div className={styles.slideButtons}>
      <div
        onClick={() => {
          setCurrentTab("electronic");
        }}
        className={styles.button}
      >
        <p
          className={
            currentTab === "electronic"
              ? styles.activeText
              : styles.inactiveText
          }
        >
          Электромеханический
          <br />
          участок
        </p>
        {currentTab === "electronic" && (
          <img src="/src/assets/svg/circleArrow.svg" alt="" />
        )}
      </div>
      <div
        onClick={() => {
          setCurrentTab("main");
        }}
        className={styles.button}
      >
        <p
          className={
            currentTab === "main" ? styles.activeText : styles.inactiveText
          }
        >
          Участок по ремонту <br />
          колес и тормозов
        </p>
        {currentTab === "main" && (
          <img src="/src/assets/svg/circleArrow.svg" alt="" />
        )}
      </div>
    </div>
  );
}
