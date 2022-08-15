import { useContext } from "react";
import { DraggableStatusContext } from "../context/DraggableStatusContext";
import BodyWithDraggableRow from "../BodyWithDraggableRow/BodyWithDraggableRow";
import BodyWithNonDraggableRow from "../BodyWithNonDraggableRow/BodyWithNonDraggableRow";
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
        <BodyWithDraggableRow
          data={data}
          columns={columns}
          isFirstColumnSticky={isFirstColumnSticky}
        />
      ) : (
        <BodyWithNonDraggableRow<T>
          data={data}
          isFirstColumnSticky={isFirstColumnSticky}
          columns={columns}
        />
      )}
    </tbody>
  );
};

export default Body;
