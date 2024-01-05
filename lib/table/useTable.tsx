import { useContext } from "react";
import { TableContext } from "./Table";

const useTable = () => useContext(TableContext);

export default useTable;
