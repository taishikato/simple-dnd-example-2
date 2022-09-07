export type ColumnProps<T extends string> = Readonly<{
  key: string;
  title: string;
  dataIndex: string;
  width: number;
  cellCSS?: Record<string, string | number>;
  headerCellCSS?: Record<string, string | number>;
  renderCell?: (
    val: DataValue,
    rowData: DataItemProps<T>["values"]
  ) => JSX.Element;
}>;

export type DataProps<T extends string> = Readonly<{
  name: string;
  items: DataItemProps<T>[];
}>;

export type DataItemProps<VT extends string> = Readonly<{
  name: string;
  valueType: VT;
  height: number;
  values: { [index: string]: DataValue };
}>;

export type DataValue = string | number | JSX.Element;
