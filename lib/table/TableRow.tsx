import { useEffect } from "react";
import useTable from "./useTable";

type Props = {
  children?: React.ReactNode | ((colKey: string) => React.ReactNode);
};

const TableRow = ({ children }: Props) => {
  const { columns, next } = useTable();

  useEffect(() => {
    next();
  }, []); //eslint-disable-line

  return (
    <tr>
      {typeof children === "function"
        ? columns
          ? columns.map(({ key }) => children(key))
          : null
        : children}
    </tr>
  );
};

export default TableRow;
