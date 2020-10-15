import React from "react";
import { WithContext } from "./WithContext";
import "../sass/theme-btn.scss";

function ThemeButton(props) {
  return (
    <button onClick={props.handleChangeTheme} className="theme-btn">
      {props.theme === "light" ? "dark" : "light"} theme
    </button>
  );
}

export default WithContext(ThemeButton);
