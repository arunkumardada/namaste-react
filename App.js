/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>This is h1 Tag</h1>
 *      <h1>This is h1 Tag</h1>
 *  </div>
 *  <div id="child2">
 *     <h2>This is h2 Tag</h2>
 *     <h2>This is h2 Tag</h2>
 *  </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "heading" }, "This is h1 Tag"),
      React.createElement("h1", { id: "heading" }, "This is h1 Tag"),
    ]),
  ],
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", { id: "heading" }, "This is h2 Tag"),
    React.createElement("h2", { id: "heading" }, "This is h2 Tag"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "This is From React!!!"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
