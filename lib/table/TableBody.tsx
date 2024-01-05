// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import useTable from "./useTable";

type Props<T> = {
  items?: T[];
  children?: React.ReactNode | ((item: T) => React.ReactNode);
  emptyContent?: string | React.ReactNode;
};

export const TableBody = <T extends object>({
  items,
  children,
  emptyContent,
}: Props<T>) => {
  const { columns } = useTable();

  console.log(columns);

  return (
    <tbody>
      {items
        ? items.length
          ? items.map((item, i) => children(item, i))
          : emptyContent && (
              <td
                colSpan={columns?.length}
                className="align-middle text-center h-40 font-medium opacity-30"
              >
                {emptyContent}
              </td>
            )
        : emptyContent
        ? emptyContent && (
            <td
              colSpan={columns?.length}
              className="align-middle text-center h-40 font-medium opacity-30"
            >
              {emptyContent}
            </td>
          )
        : children}
    </tbody>
  );
};

export default TableBody;
