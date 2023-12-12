import React from "react";
import { GraphQLDeveloperPortal } from "../../developer-portal/src/graphql-developer-portal";
import introspection from "../../developer-portal/src/examples/my-schema.introspection.json";

/**
 * Primary UI component for user interaction
 */
export const GraphQLDeveloperPortalDisplay = () => {
  const config = {
    introspection,
    showQueries: true,
    showMutations: true,
    showSubscriptions: true,
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        right: 0,
        justifyContent: "start",
        backgroundColor: "#f5f5f5",
        alignItems: "start",
        textAlign: "center",
      }}
    >
      <GraphQLDeveloperPortal config={config} />
    </div>
  );
};
