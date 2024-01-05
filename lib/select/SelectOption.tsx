/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ReactNode } from "react";
import { useSelect } from "./Select";

type Props = {
  value: any;
  children: ReactNode;
};

const SelectOption = ({ value, children }: Props) => {
  const { setValue, setKey, key, onChange, _options, options, close } =
    useSelect();

  const handleChange = (e: any, value: string) => {
    setKey(value);
    setValue(options.find((opt: any) => opt.value == value)?.label || "");
    if (onChange) onChange(e);
    close();
  };

  return (
    <option
      data-selected={key === value}
      onClick={(e) => handleChange(e, value)}
      className={_options()}
    >
      {children}
    </option>
  );
};

export default SelectOption;
