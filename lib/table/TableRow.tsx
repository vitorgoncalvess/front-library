import { useEffect } from "react";
import useTable from "./useTable";

type Props = {
  children?: React.ReactNode | ((colKey: string) => React.ReactNode);
  onClick?: () => void;
};

export const TableRow = ({ children, onClick, ...props }: Props) => {
  const { columns, next, classNames } = useTable();

  useEffect(() => {
    next();
  }, []); //eslint-disable-line

  return (
    <tr {...props} className={classNames?.tr} onClick={onClick}>
      {typeof children === "function"
        ? columns
          ? columns.map(({ key }) => children(key))
          : null
        : children}
    </tr>
  );
};

export default TableRow;
