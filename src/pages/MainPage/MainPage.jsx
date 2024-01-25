import styles from "./style.module.scss";
import rdBg from "../../assets/rd.png";
import repairBg from "../../assets/repair.png";
import productionBg from "../../assets/production.png";
import NavCard from "../../components/NavCard/NavCard";
// import telegramIcon from "../../assets/svg/tg.svg";
// import vkIcon from "../../assets/svg/vk.svg";
import bgImg from "../../assets/mainImg.png";
import { useState } from "react";
import Overlay from "../../components/Overlay/Overlay";
import RequestModal from "../../components/RequestModal/RequestModal";


const cardLinks = [
  {
    text: "Производство",
    linkTo: "/production",
    bg: productionBg,
  },
  {
    text: "R/D",
    linkTo: "/rd",
    bg: rdBg,
  },
  {
    text: "Ремонт",
    linkTo: "/repair",
    bg: repairBg,
  },
];

export default function MainPage() {
  const [isReqModalOpen, setIsReqModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.bgImg}>
        <img src={bgImg} alt="bg" />
      </div>
      <div className={styles.content}>
        <div className={styles.line}></div>
        <section className={styles.intro}>
          <h1>Производство и ремонт авиационных интерьерных компонентов</h1>
          <div className={styles.takeOrder} onClick={() => setIsReqModalOpen(true)}>
            <p>ЗАКАЗАТЬ УСЛУГУ</p>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="15.5"
                stroke="#FFF"
              />
              <path
                d="M9 15.5C8.72386 15.5 8.5 15.7239 8.5 16C8.5 16.2761 8.72386 16.5 9 16.5L9 15.5ZM22.3536 16.3536C22.5488 16.1583 22.5488 15.8417 22.3536 15.6464L19.1716 12.4645C18.9763 12.2692 18.6597 12.2692 18.4645 12.4645C18.2692 12.6597 18.2692 12.9763 18.4645 13.1716L21.2929 16L18.4645 18.8284C18.2692 19.0237 18.2692 19.3403 18.4645 19.5355C18.6597 19.7308 18.9763 19.7308 19.1716 19.5355L22.3536 16.3536ZM9 16.5L22 16.5L22 15.5L9 15.5L9 16.5Z"
                fill="#FFF"
              />
            </svg>
          </div>
        </section>
      </div>
      <div className={styles.cardLinks}>
        {cardLinks.map((card, i) => (
          <NavCard key={i} to={card.linkTo} bgUrl={card.bg}>
            {card.text}
          </NavCard>
        ))}
      </div>
      {
        isReqModalOpen && <Overlay><RequestModal onClose={() => setIsReqModalOpen(false)}/></Overlay>
      }
    </div>
  );
}
