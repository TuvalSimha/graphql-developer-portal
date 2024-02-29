import { createCatchAllMeta } from "nextra/catch-all";
import introspection from "../../example/introspection.json";

const enumsPaths = introspection.__schema.types
  .filter((type) => type.kind === "ENUM")
  .map((enumType) => `${enumType.name.toLowerCase()}`)
  .map((enumType) => enumType.replace("__", ""));

console.log("enumsPaths --->", enumsPaths);

export default () => createCatchAllMeta(enumsPaths);
