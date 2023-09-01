import React from "react";
import ReactDOM from "react-dom/client";

// JSX Transpiles before reaching JS - Parcel - Babel

// JSX -> Babel Transpiles to React.CreateElement => React Element JS Object => HTML Element(render)
const jsxHeading = (
  <h1 className="heading" tabIndex={1}>
    This is Heading using JSX
  </h1>
);

console.log(jsxHeading); // It returns React Element JS Object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
