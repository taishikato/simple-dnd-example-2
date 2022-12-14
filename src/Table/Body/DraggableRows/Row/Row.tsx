import { useContext } from "react";
import { css } from "@emotion/css";
import { StickyStatusContext } from "../../../context/StickyStatusContext";
import FirstCell from "../../Cells/FirstCell";
import Cell from "../../Cells/Cell";
import type { ColumnProps, DataProps, DnDSortResult } from "../../../types";

// This function creates style for <tr> and <th> inside the <tr>
const getStyle = (
  width: ColumnProps["width"],
  cellCSS: ColumnProps["cellCSS"],
  isFirstColumnSticky: boolean
) =>
  css([
    {
      cursor: "grab",
      position: "relative",
      touchAction: "none",
      th: {
        verticalAlign: "middle",
        padding: "10px 10px 10px 0",
        textAlign: "left",
        fontWeight: 600,
        userSelect: "none",
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
      },
    },
  ]);

const Row = <T extends string>({
  data,
  columns,
}: {
  data: DnDSortResult<DataProps<T>>;
  columns: ColumnProps[];
}) => {
  const { isFirstColumnSticky } = useContext(StickyStatusContext);

  return (
    <tr
      {...data.events}
      className={getStyle(
        columns[0].width,
        columns[0].cellCSS,
        isFirstColumnSticky
      )}
    >
      {columns.map((column, index) => {
        if (column.renderCell)
          return column.renderCell(column.key, column.width, column.cellCSS);

        if (index === 0)
          // The width and cellCSS for the FirstCell component are not passed to the FirstCell component, since they are used in the getStyle function described above.
          return <FirstCell key={column.key}>{data.value.name}</FirstCell>;

        if (column.dataIndex == null) return;

        return (
          <Cell key={column.key} width={column.width} cellCSS={column.cellCSS}>
            {data.value.values[column.dataIndex]}
          </Cell>
        );
      })}
    </tr>
  );
};

export default Row;
