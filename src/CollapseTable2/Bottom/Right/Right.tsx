import type { ColumnProps, DataProps } from "../../types";
import { css } from "@emotion/css";
import { Fragment } from "react";
import CollapseTriggerRow from "./CollapseTriggerRow/CollapseTriggerRow";
import Row from "./Row/Row";

const Right = <T extends string>({
  columns,
  data,
}: {
  columns: ColumnProps<T>[];
  data: DataProps<T>[];
}) => {
  return (
    <div
      className={css({
        float: "left",
        backgroundColor: "white",
      })}
    >
      <div>
        {data.map((d) => (
          <Fragment key={d.name}>
            <CollapseTriggerRow columns={columns} name={d.name} />
            {d.items.map((item) => (
              <Row
                key={item.valueType}
                columns={columns}
                item={item}
                collapseName={d.name}
              />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Right;
