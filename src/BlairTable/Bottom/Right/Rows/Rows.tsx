import type { ColumnProps, DataItemProps } from "../../../types";
import { cx, css } from "@emotion/css";

const Rows = <T extends string>({
  columns,
  item,
  collapseName,
}: {
  columns: ColumnProps[];
  item: DataItemProps<T>;
  collapseName: string;
}) => {
  return (
    <div
      className={cx([
        css({
          height: 100,
          display: "flex",
          transition: "height 200ms, opacity 200ms",
        }),
        `collapse-${collapseName}`,
      ])}
    >
      {columns.map((c, i: number) => {
        if (i !== 0)
          return (
            <div
              key={c.key}
              className={css({
                width: c.width,
                borderBottom: "1px solid #e2e2e2",
                borderRight: "1px solid #e2e2e2",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              })}
            >
              {item.values[c.dataIndex]}
            </div>
          );
      })}
    </div>
  );
};

export default Rows;
