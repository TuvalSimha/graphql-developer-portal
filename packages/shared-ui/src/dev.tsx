import ReactDOM from "react-dom";
import App from "./index";
import Introspect from "../src/example/introspection.json";
import React from "react";

ReactDOM.render(
  <App schemaPath={Introspect} />,
  document.getElementById("root")
);
