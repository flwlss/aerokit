import { NavLink, Link } from "react-router-dom";
import styles from "./style.module.scss";
import logo from "../../assets/svg/logo_black.svg";
import cross from "../../assets/svg/cross.svg";

export default function BurgerMenu({ closeMenu }) {
  return (
    <div className={styles.burgerMenu}>
      <img src={cross} alt="exit" className={styles.exitBtn} onClick={closeMenu}/>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.navigation}>
        <ul className={styles.links}>
          <NavLink to={"/about"} className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`} onClick={closeMenu}>
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
            <span>О нас</span>
          </NavLink>
          <NavLink to={"/production"} className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`} onClick={closeMenu}>
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
            <span>Производство</span>
          </NavLink>
          <NavLink to={"/repair"} className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`} onClick={closeMenu}>
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
            <span>Ремонт</span>
          </NavLink>
          <NavLink to={"/rd"} className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`} onClick={closeMenu}>
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
            <span>R/D</span>
          </NavLink>
          <NavLink to={"/contacts"} className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`} onClick={closeMenu}>
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
            <span>Контакты</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
