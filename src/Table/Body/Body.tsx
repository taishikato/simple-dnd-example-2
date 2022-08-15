import { useContext } from "react";
import { DraggableStatusContext } from "../context/DraggableStatusContext";
import DraggableRows from "./DraggableRows/DraggableRows";
import NonDraggableRows from "./NonDraggableRows/NonDraggableRows";
import type { ColumnProps, DataProps } from "../types";

const Body = <T extends string>({
  data,
  columns,
  isFirstColumnSticky,
}: {
  data: DataProps<T>[];
  columns: ColumnProps[];
  isFirstColumnSticky: boolean;
}) => {
  const isDraggable = useContext(DraggableStatusContext);

  return (
    <tbody>
      {isDraggable ? (
        <DraggableRows
          data={data}
          columns={columns}
          isFirstColumnSticky={isFirstColumnSticky}
        />
      ) : (
        <NonDraggableRows<T>
          data={data}
          isFirstColumnSticky={isFirstColumnSticky}
          columns={columns}
        />
      )}
    </tbody>
  );
};

export default Body;
