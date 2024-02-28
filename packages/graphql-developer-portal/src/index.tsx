import { schema } from "components/schema";

interface Props {
  schemaPath: any;
}

const App: React.FC<Props> = ({ schemaPath }) => {
  const schemaData = schema(schemaPath);
  return schemaData;
};

export default App;
