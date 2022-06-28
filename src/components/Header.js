import { useTheme } from "../contexts/ThemeContext";
import "./Header.css";

function Header() {
  const { sun, moon, theme, selectTheme } = useTheme();
  return (
    <header className="header">
      <h1 className="title">Todo</h1>

      <input
        className="theme"
        type="image"
        onClick={selectTheme}
        src={theme === "dark" ? sun : moon}
        alt="changeTheme"
        aria-label="Button to change theme"
      />
    </header>
  );
}

export default Header;
