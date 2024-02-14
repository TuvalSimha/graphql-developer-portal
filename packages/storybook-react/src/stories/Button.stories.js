import GraphqlDeveloperPortal from "graphql-developer-portal";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "GraphQL Developer Portal",
  component: GraphqlDeveloperPortal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Default = () => <GraphqlDeveloperPortal foo="Test for Storybook!" />;
