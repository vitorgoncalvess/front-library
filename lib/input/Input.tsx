import { tv } from "tailwind-variants";

type Props = {
  label?: string;
  value?: string | number;
  name?: string;
  labelPlacement?: "top" | "left" | "inside";
  labelIcon?: React.ReactNode;
  type?: "password" | "email" | "text";
  placeholder?: string;
  endContent?: React.ReactNode;
  onChange?: (e: unknown) => void;
};

const InputVariants = tv({
  slots: {
    base: "flex flex-col-reverse gap-1 max-w-[400px]",
    label: "flex text-xs font-medium text-zinc-600 flex gap-1",
    input:
      "border-2 border-zinc-200 h-14 rounded-lg p-2 text-sm bg-zinc-200 max-w-[400px] outline-none hover:bg-zinc-300 hover:border-zinc-300 focus:border-zinc-300  focus:bg-zinc-300 transition peer",
    end: "absolute right-4",
  },
  variants: {
    labelPlacement: {
      inside: {
        label:
          "absolute left-4 group-hover:-translate-y-3 group-hover:-translate-x-1.5 transition duration-300 peer-focus:-translate-y-3 peer-focus:-translate-x-1.5 peer-[&:not(:placeholder-shown)]:-translate-y-3 peer-[&:not(:placeholder-shown)]:-translate-x-1.5",
        base: "relative flex justify-center group",
        input: "pt-5",
      },
      top: {
        label: "pl-0.5",
        input: "",
      },
      left: {},
    },
    placeholder: {
      true: {
        label: "-translate-y-3 -translate-x-1.5",
      },
    },
  },
});

export const Input = ({
  label,
  name,
  value,
  labelPlacement = "inside",
  labelIcon,
  type = "text",
  placeholder = "",
  endContent,
  onChange,
}: Props) => {
  const {
    base,
    label: labelClass,
    input,
    end,
  } = InputVariants({ labelPlacement, placeholder: Boolean(placeholder) });

  return (
    <div className={base()}>
      <input
        placeholder={placeholder}
        id={name || label}
        value={value}
        onChange={onChange}
        className={input()}
        name={name || label}
        type={type}
      />
      <label className={labelClass()} htmlFor={name || label}>
        {labelIcon}
        <span>{label}</span>
      </label>
      {endContent && <div className={end()}>{endContent}</div>}
    </div>
  );
};

export default Input;
