import React from "react";
import  ReactDOM  from "react-dom/client";

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child"},
            [
                React.createElement("h1",{id:"heading"},"I am the heading"),
                React.createElement("h2",{},"I am h2")
            ]
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [
                React.createElement("h1",{id:"heading"},"I am the heading2"),
                React.createElement("h2",{},"I am h2 tag from child2")
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);