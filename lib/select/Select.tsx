/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import arrow from "../assets/arrow.png";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

type Option = {
  value: any;
  label: any;
};

type Props = {
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode | ReactNode[] | ((opt: Option) => ReactNode);
  options?: Option[];
  classNames: {
    base?: string;
    optionWrapper?: string;
  };
};

type SelectContextType = {
  _value: string;
  setValue: Dispatch<SetStateAction<string>>;
  options: Option[];
  onChange?: (e: any) => void;
  _options: any;
  close: () => void;
  key: string;
  setKey: Dispatch<SetStateAction<string>>;
};

export const SelectContext = createContext<SelectContextType>({
  _value: "",
  setValue: () => {},
  options: [],
  _options: null,
  close: () => {},
  key: "",
  setKey: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useSelect = () => useContext(SelectContext);

const selectClasses = tv({
  slots: {
    container: "w-full min-w-[200px] max-w-[400px] relative",
    base: "border-2 border-box border-[#CBCBCB] h-12 rounded data-[open=true]:rounded-b-none flex items-center justify-between p-2 cursor-default text-lg font-medium",
    optionsContainer:
      "absolute bg-white border-[#CBCBCB] top-12 border-2 left-0 right-0 border-t-0 max-h-[250px] overflow-auto z-10",
    _options:
      "bg-white last-of-type:border-b-0 border-b-2 border-[#CBCBCB] p-2 cursor-default hover:bg-[#F5F5F5] data-[selected=true]:bg-zinc-200 data-[selected=true]:text-zinc-500",
  },
});

const Select = ({ children, value, onChange, options, classNames }: Props) => {
  const [_value, setValue] = useState(value || "");
  const [key, setKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
    document.removeEventListener("click", close);
  };

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        document.addEventListener("click", close);
      }, 100);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setValue(value || "");
  }, [value]);

  const { container, base, _options, optionsContainer } = selectClasses();

  if (options && typeof children !== "function") {
    throw new Error(
      "Se você passar a propriedade options, você precisa passar uma função como children"
    );
  }

  return (
    <SelectContext.Provider
      value={{
        _value,
        setValue,
        onChange,
        _options,
        options: options || [],
        close,
        key,
        setKey,
      }}
    >
      <div className={container()}>
        <div
          data-open={isOpen}
          onClick={handleOpen}
          className={twMerge(base(), classNames?.base)}
        >
          <h1>
            {_value || (
              <span className="opacity-50 text-sm">Selecione uma opção</span>
            )}
          </h1>
          <div className="w-4 h-4">
            <img src={arrow} className="opacity-50 rotate-90" alt="select" />
          </div>
        </div>
        {isOpen && (
          <ul
            className={twMerge(optionsContainer(), classNames?.optionWrapper)}
          >
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            {options ? options.map((opt) => children(opt)) : children}
          </ul>
        )}
      </div>
    </SelectContext.Provider>
  );
};

export default Select;
