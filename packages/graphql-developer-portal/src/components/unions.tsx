import { Kind, IntrospectionUnionType } from "graphql";

type UnionsInSchemaResponse = {
  unions:
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

export function unionsInSchema(graphqlSchema: any): UnionsInSchemaResponse {
  // Filter out the types from the Schema
  const unions = graphqlSchema.__schema.types.filter(
    (type: any) => type.kind === "UNION"
  ) as IntrospectionUnionType[];

  if (unions.length === 0) {
    return {
      unions: {
        count: 0,
        items: [],
        path: [],
      },
    };
  }

  // Count the numbers of the unions in the schema
  let unionsCount = 0;
  unions.forEach((union) => {
    if (union.kind === "UNION") {
      unionsCount++;
    }
  });

  // Build the union item
  const buildUnionItem = unions.map((union) => {
    return {
      name: union.name,
      description: union.description ?? "Missing description",
      kind: union.kind as Kind,
    };
  });
  console.log(buildUnionItem);

  return {
    unions: {
      count: unionsCount,
      items: buildUnionItem,
      path: ["/unions", "/unions/[name]"],
    },
  };
}
