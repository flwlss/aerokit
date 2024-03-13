import styles from "./style.module.scss";
import { useEffect, useRef, useState } from "react";
import Arrow from "/src/assets/svg/slideArrow.svg?react";

export default function Wheels() {
  const videoRef = useRef(null);

  const mainRepairs = [
    "Boeing - B737 (CL & NG), B757, B767, B777, B747",
    "Airbus - А319/320/321/A330",
    "Bombardier - СRJ-200",
    "ATR - ATR42/72",
    "Irkut - SJ100",
  ];

  const videos = [
    "/videos/wheels/video1.MOV",
    "/videos/wheels/video2.MOV",
    "/videos/wheels/video3.MOV",
    "/videos/wheels/video4.MOV",
    "/videos/wheels/video5.MOV",
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
      <div className={styles.content}>
        <h2>
          AeroKit является ведущим поставщиком услуг по техническому
          обслуживанию и ремонту авиационных колес и тормозных устройств ведущих
          мировых производителей - <span>Honeywell</span>, <span>Goodrich</span>
          , <span>MABS</span>, <span>Safran</span>.
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
  );
}
