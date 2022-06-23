import { useContext } from "react";
import AppContext from "../contexts/AppContext";

function Header() {
  const { sun, moon, theme, selectTheme } = useContext(AppContext);
  return (
    <header className="header">
      <h1 className="title">Todo</h1>
      <div className="theme">
        <img
          onClick={selectTheme}
          src={theme === "dark" ? sun : moon}
          alt="sun icon"
        />
      </div>
    </header>
  );
}

export default Header;
