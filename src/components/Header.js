import { useTheme } from "../contexts/ThemeContext";

function Header() {
  const { sun, moon, theme, selectTheme } = useTheme();
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
