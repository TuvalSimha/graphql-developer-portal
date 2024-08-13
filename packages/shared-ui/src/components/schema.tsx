import { objectsInSchema } from "./objects";
import { scalarsInSchema } from "./scalars";
import { enumsInSchema } from "./enums";
import React from "react";
import { unionsInSchema } from "./unions";

type Schema = {
  __schema: {
    types: {
      name: string;
      description: string;
      kind: string;
    }[];
  };
};

export function schema(graphqlSchema: Schema) {
  const objects = objectsInSchema(graphqlSchema);
  const scalars = scalarsInSchema(graphqlSchema);
  const enums = enumsInSchema(graphqlSchema);
  const unions = unionsInSchema(graphqlSchema);

  return (
    <div>
      <h1>GraphQL Developer Portal</h1>
      {objects ? (
        <div>
          <h1>Objects in Schema</h1>
          <p>Count: {objects.objects?.count}</p>
          <ul>
            {objects.objects?.items.map((item, index) => (
              <li key={index}>
                <p>Name: {item.name}</p>
                <p>Description: {item.description}</p>
                <p>Kind: {item.kind}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {scalars ? (
        <div>
          <h1>Scalars in Schema</h1>
          <p>Count: {scalars.scalars?.count}</p>
          <ul>
            {scalars.scalars?.items.map((item, index) => (
              <li key={index}>
                <p>Name: {item.name}</p>
                <p>Description: {item.description}</p>
                <p>Kind: {item.kind}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {enums ? (
        <div>
          <h1>Enums in Schema</h1>
          <p>Count: {enums.enums?.count}</p>
          <ul>
            {enums.enums?.items.map((item, index) => (
              <li key={index}>
                <p>Name: {item.name}</p>
                <p>Description: {item.description}</p>
                <p>Kind: {item.kind}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {unions ? (
        <div>
          <h1>Unions in Schema</h1>
          <p>Count: {unions.unions?.count}</p>
          <ul>
            {unions.unions?.items.map((item, index) => (
              <li key={index}>
                <p>Name: {item.name}</p>
                <p>Description: {item.description}</p>
                <p>Kind: {item.kind}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
