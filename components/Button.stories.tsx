import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],

  argTypes: {
    background: {
      options: ["red-500", "blue-600", "gray-50", "green-800", "orange-500"],
      control: { type: "radio" },
    },
    width: {
      options: ["full", 1 / 2, 1 / 3],
      control: { type: "radio" },
    },
    font: {
      options: ["semibold", "bold", "thin", "black", "medium", "[1100]"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Buttons: Story = {
  args: {
    width: 1 / 2,
    height: "full",
    background: "green-500",
    font: "semibold",
    children: "Red",
  },
  render: (args) => <Button {...args} />,
};

// export const Blue: Story = {
//   args: {
//     width: "full",
//     height: "full",
//     background: "blue-600",
//     font: "bold",
//     children: "Blue",
//   },
// };

// export const Red: Story = {
//   args: {
//     width: "full",
//     height: "full",
//     background: "red-500",
//     font: "semibold",
//     children: "Red",
//   },
// };

// export const option: Story = {
//   args: {
//     width: 1 / 2,
//     height: "full",
//     background: "red-500",
//     font: "thin",
//     children: "Red",
//   },
// };

// export const newOption: Story = {
//   args: {
//     width: 1 / 3,
//     height: "full",
//     background: "red-500",
//     font: "extrabold",
//     children: "new",
//   },
// };
