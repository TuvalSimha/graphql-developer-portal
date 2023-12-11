import "./App.css";
import introspection from "../../developer-portal/src/examples/my-schema.introspection.json";
import { GraphQLDeveloperPortal } from "./graphql-developer-portal";

const config = {
  introspection,
  showQueries: true,
  showMutations: true,
  showSubscriptions: true,
};


function App() {
  return <GraphQLDeveloperPortal config={config} />;
}

export default App;
