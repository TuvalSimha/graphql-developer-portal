export function GraphQLDeveloperPortal(introspection: any) {
  return (
    <div>
      <h1>GraphQL Developer Portal</h1>
      <pre>{JSON.stringify(introspection, null, 2)}</pre>
    </div>
  );
}
