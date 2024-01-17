import Button from "../lib/button/Button";
import { StoryObj } from "@storybook/react";
import { useSuccess } from "../lib/button/successMessage";
import React from "react";

const meta = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

const BotaoComHook = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { success, message } = useSuccess(2000);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      success("Cadastro feito com sucesso!");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Button
      loadingMessage="Cadastrando..."
      isLoading={isLoading}
      onClick={handleClick}
      success={message}
    >
      Cadastrar
    </Button>
  );
};

export const Base: Story = {
  render: () => <BotaoComHook />,
};
