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
  dataIndex?: string;
  title: string;
  render?: (...params: any[]) => any;
  customClass?: string;
  width?: string;
}>;

export type DataProps<VN> = Readonly<{
  name: string;
  valueName: VN;
  values: { [index: string]: string | number | JSX.Element };
}>;
