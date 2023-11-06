import Button from "../components/Button";
import "../index.css";
import houseIcon from "../assets/home-icon-silhouette.png";

export default {
  component: Button,
};

export const Default = {
  args: {
    children: "Botão",
    color: "primary",
  },
};

export const Disabled = {
  args: {
    children: "Botão",
    color: "primary",
    isDisabled: true,
  },
};

export const Loading = {
  args: {
    children: "Botão",
    color: "primary",
    isLoading: true,
  },
};

export const LoadingWithCustomMessage = {
  args: {
    children: "Botão",
    color: "primary",
    isLoading: true,
    loadingMessage: "Carregando...",
  },
};

export const LoadingWithCustomSpinner = {
  args: {
    children: "Botão",
    color: "primary",
    isLoading: true,
    loadingContent: (
      <span className="animate-pulse bg-white rounded-full h-4 w-4"></span>
    ),
  },
};

export const WithStartContent = {
  args: {
    children: "Botão",
    color: "primary",
    startContent: <img className="h-4 w-4" src={houseIcon} />,
  },
};

export const WithEndContent = {
  args: {
    children: "Botão",
    color: "primary",
    endContent: <img className="h-4 w-4" src={houseIcon} />,
  },
};

export const WithStartAndEndContent = {
  args: {
    children: "Botão",
    color: "primary",
    startContent: <img className="h-4 w-4" src={houseIcon} />,
    endContent: <img className="h-4 w-4" src={houseIcon} />,
  },
};

export const IconOnly = {
  args: {
    children: <img className="h-6 w-6" src={houseIcon} />,
    isIconOnly: true,
    color: "primary",
  },
};

export const CustomStyles = {
  args: {
    children: "Botão",
    className:
      "bg-gradient-to-t from-indigo-600 to-blue-500 text-white font-medium rounded-full drop-shadow",
  },
};
