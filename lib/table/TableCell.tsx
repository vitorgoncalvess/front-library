import { twMerge } from "tailwind-merge";
import useTable from "./useTable";

type Props = {
  children: React.ReactNode;
};

export const TableCell = ({ children }: Props) => {
  const { tableClasses, classNames } = useTable();

  const { cell } = tableClasses();

  return <td className={twMerge(cell(), classNames?.td)}>{children}</td>;
};

export default TableCell;
