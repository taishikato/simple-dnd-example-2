export type ColumnProps = Readonly<{
  key: string;
  title: string;
  cellCSS?: Record<string, string | number>;
  headerCellCSS?: Record<string, string | number>;
  dataIndex: string;
  renderCell?: (...params: any[]) => any;
  render?: (...params: any[]) => any;
  width: number;
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
