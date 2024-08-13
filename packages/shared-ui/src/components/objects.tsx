import { Kind, IntrospectionObjectType } from "graphql";

type ObjectsInSchemaResponse = {
  objects:
    | {
        count: number;
        items: {
          name: string;
          description: string;
          kind: Kind;
        }[];
        path: string[];
      }
    | null
    | undefined;
};

export function objectsInSchema(graphqlSchema: any): ObjectsInSchemaResponse {
  // Filter out the objects from the Schema
  const objects = graphqlSchema.__schema.types.filter(
    (type: any) => type.kind === "OBJECT"
  ) as IntrospectionObjectType[];

  if (objects.length === 0) {
    return {
      objects: {
        count: 0,
        items: [],
        path: [],
      },
    };
  }

  // Count the numbers of the objects in the schema
  let objectCount = 0;
  objects.forEach((object) => {
    if (object.kind === "OBJECT") {
      objectCount++;
    }
  });

  // Build the object item
  const buildObjectItem = objects.map((object) => {
    return {
      name: object.name,
      description: object.description ?? "Missing description",
      kind: object.kind as Kind,
    };
  });
  console.log(buildObjectItem);

  return {
    objects: {
      count: objectCount,
      items: buildObjectItem,
      path: ["/objects", "/objects/[name]"],
    },
  };
}
