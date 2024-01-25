import { createPortal } from "react-dom";
import styles from "./style.module.scss";
import { useEffect } from "react";

function Portal({children}) {
  return createPortal(children, document.getElementById("overlays"))
}


export default function Overlay({children}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => document.body.style.overflow = "auto"
  }, [])
  return <Portal>
    <div className={styles.modalContainer}>
      {children}
    </div>
  </Portal>
}
