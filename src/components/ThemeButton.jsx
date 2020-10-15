import React from "react";
import { WithContext } from "./WithContext";
import "../sass/theme-btn.scss";

function ThemeButton(props) {
  return (
    <button onClick={props.handleChangeTheme} className="theme-btn">
      change theme
    </button>
  );
}

export default WithContext(ThemeButton);
