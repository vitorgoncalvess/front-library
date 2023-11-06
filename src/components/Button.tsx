import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const buttonVariants = tv({
  base: "rounded-xl group bg-zinc-200 px-4 py-2 box-border flex items-center gap-2 [&>img]:max-h-[30px] [&>span>img]:max-h-[30px] data-[icon=true]:p-2 transition data-[disabled=false]:data-[loading=false]:active:scale-95",
  variants: {
    color: {
      default:
        "data-[variant=ghost]:text-zinc-500 bg-zinc-400 data-[variant=ghost]:border-zinc-400",
      primary:
        "data-[variant=ghost]:text-blue-500 bg-blue-400 data-[variant=ghost]:border-blue-400 text-white",
      success:
        "data-[variant=ghost]:text-emerald-500 bg-emerald-400 data-[variant=ghost]:border-emerald-400 text-white",
      warning:
        "data-[variant=ghost]:text-yellow-400 bg-yellow-400 data-[variant=ghost]:border-yellow-400 text-white ",
      danger:
        "data-[variant=ghost]:text-red-500 bg-red-400 data-[variant=ghost]:border-red-400 text-white",
    },
    size: {
      xs: "text-sm",
      sm: "text-base",
      md: "text-lg",
      lg: "text-xl",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    variant: {
      base: "hover:opacity-80 data-[disabled=true]:opacity-50 ",
      ghost:
        "bg-opacity-0 data-[disabled=false]:hover:bg-opacity-100 data-[disabled=false]:data-[variant=ghost]:hover:text-white border-[2px] py-1.5 px-3.5 data-[disabled=true]:opacity-50",
    },
  },
});

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  color?: "default" | "primary" | "success" | "warning" | "danger";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  isDisabled?: boolean;
  isLoading?: boolean;
  showLoadingSpinner?: boolean;
  loadingMessage?: string;
  variant?: "ghost" | "base";
  startContent?: string | React.ReactNode | React.ReactElement;
  endContent?: string | React.ReactNode | React.ReactElement;
  loadingContent?: string | React.ReactNode | React.ReactElement;
  isIconOnly?: boolean;
};

const Button = ({
  children = "",
  color = "default",
  onClick,
  size = "xs",
  className = "",
  radius = "xl",
  isDisabled = false,
  isLoading = false,
  showLoadingSpinner = true,
  loadingMessage,
  variant = "base",
  startContent,
  endContent,
  loadingContent,
  isIconOnly = false,
  ...props
}: Props) => {
  return (
    <button
      disabled={isDisabled || isLoading}
      data-disabled={isDisabled || isLoading}
      data-variant={variant}
      data-loading={isLoading}
      data-icon={isIconOnly}
      onClick={onClick}
      className={twMerge(
        buttonVariants({
          color: color,
          size: size,
          radius: radius,
          variant: variant,
        }),
        className
      )}
      {...props}
    >
      {showLoadingSpinner &&
        isLoading &&
        (loadingContent ? (
          loadingContent
        ) : (
          <div className="animate-spin border-2 border-white group-data-[variant=ghost]:border-black h-4 w-4 rounded-full border-t-transparent group-data-[variant=ghost]:border-t-transparent group-data-[variant=ghost]:border-opacity-70"></div>
        ))}
      {startContent && <span>{startContent}</span>}
      {isLoading && loadingMessage ? loadingMessage : children}
      {endContent && <span>{endContent}</span>}
    </button>
  );
};

export default Button;
