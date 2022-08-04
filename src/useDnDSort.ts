import type { Position, DnDRef, DnDSortResult } from "./types";
import React, { useRef, useState } from "react";
import { isHover } from "./isHover";

export const useDnDSort = <T>(defaultItems: T[]): DnDSortResult<T>[] => {
  // 描画内容と紐づいているのでuseStateで管理する
  const [items, setItems] = useState(defaultItems);

  // 状態をrefで管理する
  const state = useRef<DnDRef<T>>({
    dndItems: [],
    keys: new Map(),
    dragElement: null,
    canCheckHovered: true,
    pointerPosition: { x: 0, y: 0 },
  }).current;

  const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const { dndItems, dragElement, pointerPosition } = state;

    if (!dragElement) return;

    // マウスポインターの移動量を計算
    const x = clientX - pointerPosition.x;
    const y = clientY - pointerPosition.y;

    const dragStyle = dragElement.element.style;

    // ドラッグ要素の座標とスタイルを更新
    dragStyle.zIndex = "100";
    dragStyle.cursor = "grabbing";
    dragStyle.transform = `translate(${x}px,${y}px)`;

    if (!state.canCheckHovered) return;

    // 確認できないようにする
    state.canCheckHovered = false;

    // 300ms後に確認できるようにする
    setTimeout(() => (state.canCheckHovered = true), 300);

    // ドラッグしている要素の配列も位置を取得
    const dragIndex = dndItems.findIndex(({ key }) => key === dragElement.key);

    // ホバーされている要素の配列の位置を取得
    const hoveredIndex = dndItems.findIndex(
      ({ element }, index) => index !== dragIndex && isHover(event, element)
    );

    // ホバーされている要素があれば、ドラッグしている要素と入れ替える
    if (hoveredIndex !== -1) {
      // カーソルの位置を更新
      state.pointerPosition.x = clientX;
      state.pointerPosition.y = clientY;

      // 要素を入れ替える
      dndItems.splice(dragIndex, 1);
      dndItems.splice(hoveredIndex, 0, dragElement);

      const { left: x, top: y } = dragElement.element.getBoundingClientRect();

      dragElement.position = { x, y };

      // re-render
      setItems(dndItems.map((v) => v.value));
    }
  };

  const onMouseUp = (event: MouseEvent) => {
    const { dragElement } = state;

    if (!dragElement) return;

    const dragStyle = dragElement.element.style;

    // ドラッグしてる要素に適用していたCSSを削除
    dragStyle.zIndex = "";
    dragStyle.cursor = "";
    dragStyle.transform = "";

    state.dragElement = null;

    window.removeEventListener("mouseup", onMouseUp);
    window.removeEventListener("mousemove", onMouseMove);
  };

  return items.map((value: T): DnDSortResult<T> => {
    const key = state.keys.get(value) || Math.random().toString(16);

    // 生成したkey文字列を保存
    state.keys.set(value, key);

    return {
      value,

      key,

      events: {
        ref: (element: HTMLElement | null) => {
          if (!element) return;

          const { dndItems, dragElement, pointerPosition } = state;

          // 位置をリセットする
          element.style.transform = "";

          // 要素の位置を取得
          const { left: x, top: y } = element.getBoundingClientRect();
          const position: Position = { x, y };

          const itemIndex = dndItems.findIndex((item) => item.key === key);

          // 要素がなければ新しく追加して処理を終わる
          if (itemIndex === -1) {
            return dndItems.push({ key, value, position, element });
          }

          if (dragElement?.key === key) {
            // ドラッグ要素のズレを計算
            const dragX = dragElement.position.x - position.x;
            const dragY = dragElement.position.y - position.y;

            // 入れ替え時のズレを無くす
            element.style.transform = `translate(${dragX}px,${dragY}px)`;

            // マウスポインターのいちも再計算してズレを無くす
            pointerPosition.x -= dragX;
            pointerPosition.y -= dragY;
          }

          if (dragElement?.key !== key) {
            const item = dndItems[itemIndex];

            // 前回の座標を計算
            const x = item.position.x - position.x;
            const y = item.position.y - position.y;

            // 要素を前回の位置に留めておく
            element.style.transition = "";
            element.style.transform = `translate(${x}px,${y}px)`;

            // -フレーム後に要素をアニメーションさせながら元の位置に戻す
            requestAnimationFrame(() => {
              element.style.transform = "";
              element.style.transition = "all 300ms";
            });
          }

          // 要素を更新する
          state.dndItems[itemIndex] = { key, value, position, element };
        },

        onPointerDown: (event: React.PointerEvent<HTMLElement>) => {
          // ドラッグする要素
          const element = event.currentTarget;

          // マウスポインターの座標を保持しておく
          state.pointerPosition.x = event.clientX;
          state.pointerPosition.y = event.clientY;

          // ドラッグしている要素のスタイルを上書き
          element.style.transition = ""; // アニメーションを無効にする
          element.style.cursor = "grabbing"; // カーソルのデザインを変更

          const { left: x, top: y } = element.getBoundingClientRect();
          const position: Position = { x, y };

          // ドラッグする要素を保持しておく
          state.dragElement = { key, value, element, position };

          // mousemove, mouseupイベントをwindowに登録する
          window.addEventListener("pointerup", onMouseUp);
          window.addEventListener("pointermove", onMouseMove);
        },
      },
    };
  });
};
