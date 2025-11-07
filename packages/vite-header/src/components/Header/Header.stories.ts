import Header from "./Header.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Example/Header",
  component: Header,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};
