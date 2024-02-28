import { schema } from "components/schema";

interface Props {
  schemaPath: any;
}

const App = ({ schemaPath }: Props) => {
  const schemaData = schema(schemaPath);
  return schemaData;
};

export default App;
