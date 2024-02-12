import { Outlet } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="container">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
