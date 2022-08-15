import { useContext } from "react";
import { css } from "@emotion/css";
import FirstCell from "../../BodyCells/FirstCell/FirstCell";
import Cell from "../../BodyCells/Cell/Cell";
import type { ColumnProps, DataProps } from "../../types";
import { DraggableStatusContext } from "../../context/DraggableStatusContext";

// This function creates style for <tr> and <th> inside the <tr>
const getStyle = (
  width: ColumnProps["width"],
  cellCSS: ColumnProps["cellCSS"],
  isFirstColumnSticky: boolean,
  isDraggable: boolean
) =>
  css([
    {
      position: "relative",
      th: {
        verticalAlign: "middle",
        padding: "10px 10px 10px 0",
        textAlign: "left",
        fontWeight: 600,
        boxSizing: "border-box",
        borderBottom: "1px solid rgb(203 213 225)",
        backgroundColor: "#ffffff",
        ...(isFirstColumnSticky && {
          position: "sticky",
          left: 0,
          boxShadow: "3px 0px 2px rgba(0, 0, 0, 0.1)",
        }),
        ...(width && { minWidth: width }),
        ...(cellCSS && cellCSS),
        ...(isDraggable && { userSelect: "none" }),
      },
    },
  ]);

const Row = <T extends string>({
  data,
  columns,
  isFirstColumnSticky,
}: {
  data: DataProps<T>;
  columns: ColumnProps[];
  isFirstColumnSticky: boolean;
}) => {
  const draggableStatus = useContext(DraggableStatusContext);

  return (
    <tr
      className={getStyle(
        columns[0].width,
        columns[0].cellCSS,
        isFirstColumnSticky,
        draggableStatus
      )}
    >
      {columns.map((column, index) => {
        if (column.renderCell)
          return column.renderCell(column.key, column.width, column.cellCSS);

        if (index === 0)
          return <FirstCell key={column.key}>{data.name}</FirstCell>;

        if (column.dataIndex == null) return;

        return (
          <Cell key={column.key} width={column.width} cellCSS={column.cellCSS}>
            {data.values[column.dataIndex]}
          </Cell>
        );
      })}
    </tr>
  );
};

export default Row;
