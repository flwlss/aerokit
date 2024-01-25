import { Outlet, useLocation } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import { useEffect, useRef } from "react";
import bg from "./assets/bg.png";

function App() {
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    let bgImage = window.getComputedStyle(ref.current).backgroundImage;
    if (location.pathname !== "/") {
      if (bgImage !== "none") {
        ref.current.style.backgroundImage = "none";
      }
    } else {
      ref.current.style.backgroundImage = `url(${bg})`;
    }
  }, [location]);

  return (
    <div className="container" ref={ref}>

      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
