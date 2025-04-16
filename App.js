
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [ React.createElement("h1", {}, "Hello, Nested Component!"),
      React.createElement("h2", {}, "Hello, Nested H2 Component!")
    ]
  )
)

const heading = React.createElement("h1",
  { id: "heading" },
  "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);