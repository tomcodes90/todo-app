import { useTheme } from "../contexts/ThemeContext";
import "./Header.css";

function Header() {
  const { sun, moon, theme, selectTheme } = useTheme();
  return (
    <header className="header">
      <h1 className="title">Todo</h1>
      <label htmlFor="input" className="screen_reader_only">
        Button to toggle the theme color
      </label>
      <input
        className="theme"
        type="image"
        onClick={selectTheme}
        src={theme === "dark" ? sun : moon}
        alt="changeTheme"
      />
    </header>
  );
}

export default Header;
