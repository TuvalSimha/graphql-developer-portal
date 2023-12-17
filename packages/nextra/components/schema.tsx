import React from "react";
import { IntrospectionSchema } from "graphql";

type Props = {
  schema: IntrospectionSchema;
  typeFilter?:
    | "ENUM"
    | "INPUT_OBJECT"
    | "INTERFACE"
    | "OBJECT"
    | "SCALAR"
    | "UNION"
    | "TYPES"
    | "FIELDS"
    | "ENUM_VALUES";
};

export default function SchemaDisplay({ schema, typeFilter }: Props) {
  const getTypes = schema.types.filter((t) => !t.name.startsWith("__"));
  if (typeFilter === "ENUM") {
    const allEnums = getTypes.filter((type) => type.kind === "ENUM");
    if (!allEnums.length) {
      return <p>No enums found</p>;
    }
    return (
      <>
        <p>{JSON.stringify(allEnums, null, 2)}</p>
      </>
    );
  }
  if (typeFilter === "ENUM_VALUES") {
    const allEnumValues = getTypes
      .filter((type) => type.kind === "ENUM")
      .map((type) => type)
      .flat();
    if (!allEnumValues.length) {
      return <p>No enum values found</p>;
    }
    return (
      <>
        <p>{JSON.stringify(allEnumValues, null, 2)}</p>
      </>
    );
  }
  if (typeFilter === "FIELDS") {
    const allFields = getTypes
      .filter(
        (type) =>
          type.kind === "INPUT_OBJECT" ||
          type.kind === "INTERFACE" ||
          type.kind === "OBJECT" ||
          type.kind === "UNION"
      )
      .map((type) => type)
      .flat();
    if (!allFields.length) {
      return <p>No fields found</p>;
    }
    return (
      <>
        <p>{JSON.stringify(allFields, null, 2)}</p>
      </>
    );
  }
  if (typeFilter === "INPUT_OBJECT") {
    const allInputObjects = getTypes.filter(
      (type) => type.kind === "INPUT_OBJECT"
    );
    if (!allInputObjects.length) {
      return <p>No input objects found</p>;
    }
    return (
      <>
        <p>{JSON.stringify(allInputObjects, null, 2)}</p>
      </>
    );
  }
  if (typeFilter === "TYPES") {
    const allTypes = getTypes.filter(
      (type) =>
        type.kind === "ENUM" ||
        type.kind === "INPUT_OBJECT" ||
        type.kind === "INTERFACE" ||
        type.kind === "OBJECT" ||
        type.kind === "SCALAR" ||
        type.kind === "UNION"
    );
    if (!allTypes.length) {
      return <p>No types found</p>;
    }
    return (
      <>
        <p>{JSON.stringify(allTypes, null, 2)}</p>
      </>
    );
  }
  if (typeFilter === "INTERFACE") {
    const allInterfaces = getTypes.filter((type) => type.kind === "INTERFACE");
    if (!allInterfaces.length) {
      return <p>No interfaces found</p>;
    }
    return (
      <>
        <p>{JSON.stringify(allInterfaces, null, 2)}</p>
      </>
    );
  }
  if (typeFilter === "OBJECT") {
    const allObjects = getTypes.filter((type) => type.kind === "OBJECT");
    if (!allObjects.length) {
      return <p>No objects found</p>;
    }
    return (
      <>
        <p>{JSON.stringify(allObjects, null, 2)}</p>
      </>
    );
  }
  if (typeFilter === "SCALAR") {
    const allScalars = getTypes.filter((type) => type.kind === "SCALAR");
    if (!allScalars.length) {
      return <p>No scalars found</p>;
    }
    return (
      <>
        <p>{JSON.stringify(allScalars, null, 2)}</p>
      </>
    );
  }
  if (typeFilter === "UNION") {
    const allUnions = getTypes.filter((type) => type.kind === "UNION");
    if (!allUnions.length) {
      return <p>No unions found</p>;
    }
    return (
      <>
        <p>{JSON.stringify(allUnions, null, 2)}</p>
      </>
    );
  }
  return (
    <>
      <p>{JSON.stringify(schema, null, 2)}</p>
    </>
  );
}
