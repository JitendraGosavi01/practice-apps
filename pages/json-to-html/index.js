import React, { createElement } from "react";
const json = {
  type: "div",
  props: { id: "hello", class: "foo" },
  children: [
    { type: "h1", children: "HELLO" },
    {
      type: "p",
      children: [{ type: "span", props: { class: "bar" }, children: "World" }],
    },
  ],
};
function HtmlToJson() {
  const renderHTML = (json) => {
    const element = createElement(json.type, json.props, "json");
    return element;
  };

  return <div>{renderHTML(json)}</div>;
}

export default HtmlToJson;
