import { useContext } from "react";
import { css } from "@emotion/css";
import { DraggableStatusContext } from "../../context/DraggableStatusContext";

type Props = {
  children: string | number | JSX.Element;
  width?: string;
  cellCSS?: Record<string, string | number>;
};

const getStyle = (
  width: Props["width"],
  cellCSS: Props["cellCSS"],
  isDraggable: boolean
) =>
  css([
    {
      wordBreak: "break-all",
      padding: "10px",
      textAlign: "center",
      verticalAlign: "middle",
      backgroundColor: "#ffffff",
      fontWeight: 600,
      boxSizing: "border-box",
      borderBottom: "1px solid rgb(203 213 225)",
      "&:not(:last-child)": {
        borderRight: "1px solid rgb(203 213 225)",
      },
    },
    width && { minWidth: width },
    cellCSS && cellCSS,
    isDraggable && { userSelect: "none" },
  ]);

const Cell = ({ children, width, cellCSS }: Props) => {
  const draggableStatus = useContext(DraggableStatusContext);
  const styleToUse = getStyle(width, cellCSS, draggableStatus);

  return <td className={styleToUse}>{children}</td>;
};

export default Cell;
