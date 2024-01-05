import useTable from "./useTable";

type Props = {
  children: React.ReactNode;
};

export const TableCell = ({ children }: Props) => {
  const { tableClasses } = useTable();

  const { cell } = tableClasses();

  return <td className={cell()}>{children}</td>;
};

export default TableCell;
