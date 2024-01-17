import { StoryObj } from "@storybook/react";
import Input from "../lib/input/Input";

const meta = {
  component: Input,
};

type Story = StoryObj<typeof Input>;

export const Base: Story = {
  args: {
    label: "E-mail",
    labelPlacement: "inside",
  },
};

export const LabelOutside: Story = {
  args: {
    label: "E-mail",
    labelPlacement: "top",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
  },
};

export default meta;
