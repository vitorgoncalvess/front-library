// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getColumnKey = (item: any, colKey: string) => {
  return item && item[colKey];
};

export default getColumnKey;
