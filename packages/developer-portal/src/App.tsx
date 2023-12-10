import "./App.css";
import introspection from "../../developer-portal/src/examples/my-schema.introspection.json";
import { GraphQLDeveloperPortal } from "./graphql-developer-portal";
import React from "react";

function App() {
  return <GraphQLDeveloperPortal schema={introspection} />;
}

export default App;
