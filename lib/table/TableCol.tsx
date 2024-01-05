import useTable from "./useTable";

type Props = {
  children?: React.ReactNode;
};

export const TableCol = ({ children }: Props) => {
  const { tableClasses } = useTable();

  const { col } = tableClasses();

  return <th className={col()}>{children}</th>;
};

export default TableCol;
