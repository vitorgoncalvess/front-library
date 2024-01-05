import { twMerge } from "tailwind-merge";
import useTable from "./useTable";

type Props = {
  children?: React.ReactNode;
};

export const TableCol = ({ children }: Props) => {
  const { tableClasses, classNames } = useTable();

  const { col } = tableClasses();

  return <th className={twMerge(col(), classNames?.th)}>{children}</th>;
};

export default TableCol;
