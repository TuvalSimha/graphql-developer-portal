import { createCatchAllMeta } from "nextra/catch-all";
import introspection from "../../../example/introspection.json";

const enumsPaths = introspection.__schema.types
  .filter((type) => type.kind === "OBJECT")
  .map((objectType) => `${objectType.name.toLowerCase()}`)
  .map((objectType) => objectType.replace("__", "") + ".mdx");

export default () => createCatchAllMeta(enumsPaths);
