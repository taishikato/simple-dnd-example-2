import type { ColumnProps, DataProps } from "../../types";
import { css } from "@emotion/css";
import { Fragment } from "react";
import { totalColLabelsWidth } from "../../consts";
import CollapseRow from "./CollapseRow/CollapseRow";
import Cell from "./Row/Row";

const Right = <T extends string>({
  columns,
  data,
}: {
  columns: ColumnProps[];
  data: DataProps<T>[];
}) => {
  return (
    <div
      className={css({
        width: totalColLabelsWidth,
        float: "left",
        backgroundColor: "white",
      })}
    >
      {(() => {
        return (
          <div>
            {data.map((d) => (
              <Fragment key={d.name}>
                <CollapseRow columns={columns} name={d.name} />
                {d.items.map((item) => (
                  <Cell
                    // width: col.width, TODO
                    key={item.valueName}
                    columns={columns}
                    item={item}
                    collapseName={d.name}
                  />
                ))}
              </Fragment>
            ))}
          </div>
        );
      })()}
    </div>
  );
};

export default Right;
