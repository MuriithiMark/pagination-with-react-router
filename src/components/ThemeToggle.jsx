import React from "react";
import { useContext } from "react";

import ThemeContext from "../services/context/ThemeContext";
import DarkIcon from "./icons/DarkIcon";
import LightIcon from "./icons/LightIcon";
import "./theme-toggle.css";

const ThemeToggle = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  return (
    <button onClick={() => toggleTheme()}>
      {theme === "light" ? (
        <DarkIcon width={24} height={24} color="white" />
      ) : (
        <LightIcon width={24} height={24} color="white" />
      )}
    </button>
  );
};

export default ThemeToggle;
