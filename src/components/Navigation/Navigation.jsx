import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import logo from "../../assets/svg/logo.svg";
import burger from "../../assets/svg/burger.svg";
import Button from "../Button/Button";
import Overlay from "../Overlay/Overlay";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import RequestModal from "../RequestModal/RequestModal";
import { useEffect, useRef, useState } from "react";

export default function Navigation() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isReqModalOpen, setIsReqModalOpen] = useState(false);

  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    if (location.pathname !== '/') {
      if (ref.current.style.backgroundColor !== "#26282E") {
        ref.current.style.backgroundColor = "#26282E";
      } 
    } else {
      ref.current.style.backgroundColor = "";
    }
  }, [location])

  return (
    <nav className={styles.header} ref={ref}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.navigation}>
        <ul className={styles.links}>
          <NavLink to={"/about"} className={styles.link}>
            О нас
          </NavLink>
          <NavLink to={"/production"} className={styles.link}>
            Производство
          </NavLink>
          <NavLink to={"/repair"} className={styles.link}>
            Ремонт
          </NavLink>
          <NavLink to={"/rd"} className={styles.link}>
            R&D
          </NavLink>
          <NavLink to={"/contacts"} className={styles.link}>
            Контакты
          </NavLink>
        </ul>
        <Button onClick={() => {setIsReqModalOpen(true)}}>Заявка на услугу</Button>
        <img src={burger} alt="burger" onClick={() => {setIsBurgerOpen(true)}} className={styles.burger}></img>
      </div>
      {
        isBurgerOpen && <Overlay><BurgerMenu closeMenu={() => setIsBurgerOpen(false)}/></Overlay>
      }
      {
        isReqModalOpen && <Overlay><RequestModal onClose={() => setIsReqModalOpen(false)}/></Overlay>
      }
    </nav>
  );
}
