import { createContext, useContext, useState } from "react";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  function selectTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, selectTheme, sun, moon }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('useTheme cannot be used outside of the ThemeProvider');
  }
  return themeContext;
};
