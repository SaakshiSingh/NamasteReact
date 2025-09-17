import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h3>this is h3, react element</h3>;

const Title = () => {
  return (
    <div>
      <h1 className="title">I am the title</h1>
      {heading}
    </div>
  );
};

const value = 90;
const HeadingComponent = () => {
  return (
    <div id="container">
      {Title()}
      <h1 className="heading">Hello this is me {value}</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
