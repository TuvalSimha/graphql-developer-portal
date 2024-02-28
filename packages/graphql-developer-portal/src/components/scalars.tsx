import { Kind, IntrospectionScalarType } from "graphql";

type ScalarsInSchemaResponse = {
  scalars:
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

export function scalarsInSchema(graphqlSchema: any): ScalarsInSchemaResponse {
  // Filter out the scalars from the Schema
  const scalars = graphqlSchema.__schema.types.filter(
    (type: any) => type.kind === "SCALAR"
  ) as IntrospectionScalarType[];

  if (scalars.length === 0) {
    return {
      scalars: {
        count: 0,
        items: [],
        path: [],
      },
    };
  }

  // Count the numbers of the scalars in the schema
  let scalarCount = 0;
  scalars.forEach((scalar) => {
    if (scalar.kind === "SCALAR") {
      scalarCount++;
    }
  });

  // Build the scalar item
  const buildScalarItem = scalars.map((scalar) => {
    return {
      name: scalar.name,
      description: scalar.description ?? "Missing description",
      kind: scalar.kind as Kind,
    };
  });
  console.log(buildScalarItem);

  return {
    scalars: {
      count: scalarCount,
      items: buildScalarItem,
      path: ["/scalars", "/scalars/[name]"],
    },
  };
}
