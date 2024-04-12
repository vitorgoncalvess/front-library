// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getColumnKey = (item: any, colKey: string) => {
  if (colKey.includes(".")) {
    const keys = colKey.split(".");
    let val = item[keys[0]];
    keys.shift();
    keys.forEach((key) => {
      val = val[key];
    });
    return val;
  }
  return item && item[colKey];
};

export default getColumnKey;
