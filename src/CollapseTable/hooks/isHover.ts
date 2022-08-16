export const isHover = (event: PointerEvent, element: HTMLElement): boolean => {
  // マウスポインターの座標を取得
  const clientY = event.clientY;

  // 重なりを判定する要素のサイズと座標を取得
  const rect = element.getBoundingClientRect();

  return clientY < rect.bottom && clientY > rect.top;
};
