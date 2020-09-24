import React from "react";
import FunctionsContext from "../context";

export function WithContext(Component) {
  return function ContextComponent(props) {
    return (
      <FunctionsContext.Consumer>
        {(context) => <Component {...props} {...context} />}
      </FunctionsContext.Consumer>
    );
  };
}
