import { Kind, IntrospectionEnumType } from "graphql";

type EnumsInSchemaResponse = {
  enums:
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

export function enumsInSchema(graphqlSchema: any): EnumsInSchemaResponse {
  // Filter out the enums from the Schema
  const enums = graphqlSchema.__schema.types.filter(
    (type: any) => type.kind === "ENUM"
  ) as IntrospectionEnumType[];

  if (enums.length === 0) {
    return {
      enums: {
        count: 0,
        items: [],
        path: [],
      },
    };
  }

  // Count the numbers of the enums in the schema
  let enumsCount = 0;
  enums.forEach((enumItem) => {
    if (enumItem.kind === "ENUM") {
      enumsCount++;
    }
  });

  // Build the enum item
  const buildEnumItem = enums.map((enumItem) => {
    return {
      name: enumItem.name,
      description: enumItem.description ?? "Missing description",
      kind: enumItem.kind as Kind,
    };
  });
  console.log(buildEnumItem);

  return {
    enums: {
      count: enumsCount,
      items: buildEnumItem,
      path: ["/enums", "/enums/[name]"],
    },
  };
}
