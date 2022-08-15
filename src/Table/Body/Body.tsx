import { useContext } from "react";
import { DraggableStatusContext } from "../context/DraggableStatusContext";
import DraggableRows from "./DraggableRows/DraggableRows";
import NonDraggableRows from "./NonDraggableRows/NonDraggableRows";
import type { ColumnProps, DataProps } from "../types";

const Body = <T extends string>({
  data,
  columns,
}: {
  data: DataProps<T>[];
  columns: ColumnProps[];
}) => {
  const isDraggable = useContext(DraggableStatusContext);

  return (
    <tbody>
      {isDraggable ? (
        <DraggableRows data={data} columns={columns} />
      ) : (
        <NonDraggableRows<T> data={data} columns={columns} />
      )}
    </tbody>
  );
};

export default Body;
