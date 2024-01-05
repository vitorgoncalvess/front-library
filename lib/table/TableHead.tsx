// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import { useEffect } from "react";
import { Column } from "./Table";
import TableRow from "./TableRow";
import useTable from "./useTable";

type Props = {
  columns?: Column[];
  children?: React.ReactNode | ((col: Column) => React.ReactNode);
};

const TableHead = ({ columns, children }: Props) => {
  const { setColumns } = useTable();

  useEffect(() => {
    setColumns(columns);
  }, [columns, setColumns]);

  return (
    <thead>
      {columns ? (
        <TableRow>{columns.map((col) => children(col))}</TableRow>
      ) : (
        children
      )}
    </thead>
  );
};

export default TableHead;
