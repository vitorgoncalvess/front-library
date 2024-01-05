import Button from "../lib/button/Button";
import { StoryObj } from "@storybook/react";

const meta = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    children: "Botão",
  },
};
