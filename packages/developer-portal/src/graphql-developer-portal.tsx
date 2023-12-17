interface GraphQLDeveloperPortalProps {
  config?: {
    introspection: IntrospectionSchema;
    showQueries?: boolean;
    showMutations?: boolean;
    showSubscriptions?: boolean;
    // Add more configuration options as needed
  };
}

export function GraphQLDeveloperPortal({
  config = {
    introspection: null,
    showQueries: true,
    showMutations: true,
    showSubscriptions: true,
    // Initialize other configuration options with default values
  },
}: GraphQLDeveloperPortalProps) {
  const { introspection, showQueries, showMutations, showSubscriptions } =
    config;

  return (
    <div>
      <h1>GraphQL Developer Portal</h1>
      <div>{JSON.stringify(introspection, null, 2)}</div>

      {showQueries && (
        <div>
          <h2>Queries</h2>
          {JSON.stringify(
            introspection.__schema.types.map(
              (type: any) => type.name === "Query" && type.fields
            )
          )}
        </div>
      )}

      {showMutations && (
        <div>
          <h2>Mutations</h2>
          {JSON.stringify(
            introspection.__schema.types.map(
              (type: any) => type.name === "mutationType" && type.fields
            )
          )}
        </div>
      )}

      {showSubscriptions && (
        <div>
          <h2>Subscriptions</h2>
          {/* Add your code to display subscriptions here */}
        </div>
      )}

      {/* Add similar blocks for other GraphQL entities based on your configuration */}
    </div>
  );
}
