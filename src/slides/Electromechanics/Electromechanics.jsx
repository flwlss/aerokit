import styles from "./style.module.scss";
import { useEffect, useRef, useState } from "react";
import Arrow from "/src/assets/svg/slideArrow.svg?react";

export default function Electromechanics() {
  const videoRef = useRef(null);

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

  const videos = [
    "/src/assets/videos/electromechanics/video1.mp4",
    "/src/assets/videos/electromechanics/video2.mp4",
    "/src/assets/videos/electromechanics/video3.mp4",
    "/src/assets/videos/electromechanics/video4.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const handlePrevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [currentVideoIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.playerWrapper}>
        <div className={styles.arrows}>
          <Arrow
            onClick={handlePrevVideo}
            className={
              currentVideoIndex !== 0
                ? styles.activeArrow
                : styles.inactiveArrow
            }
            src="/src/assets/svg/slideArrow.svg"
          />
          <Arrow
            style={{ transform: "rotate(180deg)" }}
            onClick={handleNextVideo}
            className={
              currentVideoIndex !== videos.length - 1
                ? styles.activeArrow
                : styles.inactiveArrow
            }
            src="/src/assets/svg/slideArrow.svg"
          />
        </div>
        <div className={styles.videoWrapper}>
          <video
            loop
            muted
            ref={videoRef}
            width="0"
            height="0"
            src={videos[currentVideoIndex]}
          >
            <source type="video/mp4" />
          </video>
        </div>
      </div>

      <ul className={styles.productsList}>
        {electonicsRepairs.map((repair, i) => (
          <li className={styles.item} key={i}>
            <div className={styles.itemMark}></div>
            <p>{repair}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
