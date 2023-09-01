import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="4">
    Namaste React Title
  </h1>
);

//React Component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>Heading Component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
