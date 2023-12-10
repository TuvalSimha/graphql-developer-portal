import "./App.css";
import introspection from "../../developer-portal/src/examples/my-schema.introspection.json";
import { GraphQLDeveloperPortal } from "./graphql-developer-portal";

function App() {
  return <GraphQLDeveloperPortal schema={introspection} />;
}

export default App;
