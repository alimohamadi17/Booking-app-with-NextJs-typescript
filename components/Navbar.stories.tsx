import type { Meta, StoryObj } from "@storybook/react";
// import { Header } from "./Header";
import Navbar from "./Navbar";

const meta = {
  title: "Header/Navbar",
  component: Navbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    variant: "blue",
  },
  render: (args) => <Navbar />,
};
