import React from "react";
import ThemeContext from "./ThemeContext";
import { useState } from "react";
import { useEffect } from "react";

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      default:
        break;
    }
  };


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme])

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
