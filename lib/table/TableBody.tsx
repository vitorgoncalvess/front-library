// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import useTable from "./useTable";
import React from "react";

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

  return (
    <tbody>
      {items && children
        ? items.length
          ? items.map((item, i) => children(item, i))
          : emptyContent && (
              <tr>
                <td
                  colSpan={columns?.length}
                  className="align-middle text-center h-40 font-medium opacity-30"
                >
                  {emptyContent}
                </td>
              </tr>
            )
        : emptyContent
        ? emptyContent && (
            <tr>
              <td
                colSpan={columns?.length}
                className="align-middle text-center h-40 font-medium opacity-30"
              >
                {emptyContent}
              </td>
            </tr>
          )
        : children}
    </tbody>
  );
};

export default TableBody;
