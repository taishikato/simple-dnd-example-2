export type ColumnProps = Readonly<{
  key: string;
  title: string;
  dataIndex: string;
  width: number;
  cellCSS?: Record<string, string | number>;
  headerCellCSS?: Record<string, string | number>;
  renderCell?: (...params: any[]) => any;
  render?: (...params: any[]) => any;
}>;

export type DataProps<T extends string> = Readonly<{
  name: string;
  items: DataItemProps<T>[];
}>;

export type DataItemProps<VN extends string> = Readonly<{
  name: string;
  valueType: VN;
  height: number;
  values: { [index: string]: string | number | JSX.Element };
}>;
