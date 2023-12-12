import { GraphQLDeveloperPortalDisplay } from "./GraphQLDeveloperPortalDisplay";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "GraphQL Developer Portal Display",
  component: GraphQLDeveloperPortalDisplay,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  StyleSheet: {
    backgroundColor: "#446f1f",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const GraphQLDeveloperPortalDisplayMain = {
  args: {
    primary: true,
    label: "GraphQL Developer Portal Display",
  },
};
