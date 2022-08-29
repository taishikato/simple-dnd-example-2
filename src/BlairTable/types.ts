export interface Position {
  x: number;
  y: number;
}

// ドラッグ＆ドロップ要素の情報をまとめた型
export interface DnDItem<T> {
  value: T;
  key: string;
  position: Position;
  element: HTMLElement;
}

// useRef()で保持するデータの型
export interface DnDRef<T> {
  keys: Map<T, string>;
  dndItems: DnDItem<T>[];
  canCheckHovered: boolean;
  pointerPosition: Position;
  dragElement: DnDItem<T> | null;
}

// 返り値の型
export interface DnDSortResult<T> {
  key: string;
  value: T;
  events: {
    ref: (element: HTMLElement | null) => void;
    onPointerDown: (event: React.PointerEvent<HTMLElement>) => void;
  };
}

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
  values: { [index: string]: string | number | JSX.Element };
}>;
