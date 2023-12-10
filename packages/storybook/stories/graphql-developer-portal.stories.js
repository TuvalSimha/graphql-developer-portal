import { GraphQLDeveloperPortal } from "./graphql-developer-portal";

export default {
  title: "GraphQLDeveloperPortal",
  component: GraphQLDeveloperPortal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    introspection,
  },
};

export const GraphQLDeveloperPortal = (args) => (
  <GraphQLDeveloperPortal {...args} />
);
