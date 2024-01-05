import { StoryObj } from "@storybook/react";
import Select from "../lib/select/Select";
import SelectOption from "../lib/select/SelectOption";
import React from "react";

const options = [
  { label: "Bom Dia", value: "bomdia" },
  { label: "Boa Tarde", value: "boatarde" },
  { label: "Boa Noite", value: "boanoite" },
];

const meta = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Base: Story = {
  args: {
    options: options,
    children: (item) => (
      <SelectOption value={item.value}>{item.label}</SelectOption>
    ),
  },
};
