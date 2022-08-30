import type { ColumnProps, DataProps } from "../../types";
import { css } from "@emotion/css";
import { Fragment, useEffect, useState } from "react";
import { baseZIndex, widthToAdd } from "../../consts";
import CollapseTriggerLabelCell from "./CollapseTriggerLabelCell/CollapseTriggerLabelCell";
import LabelCell from "./LabelCell/LabelCell";

const Left = <T extends string>({
  data,
  firstColumn,
}: {
  data: DataProps<T>[];
  firstColumn: ColumnProps;
}) => {
  const [rowLabelWidth, setRowLabelWidth] = useState(0);

  return (
    <div
      className={css({
        position: "sticky",
        left: "0",
        // width: rowLabelWidth, // TODO
        width: firstColumn.width,
        float: "left",
        zIndex: baseZIndex,
      })}
    >
      {data.map((d) => (
        <Fragment key={d.name}>
          <CollapseTriggerLabelCell name={d.name} />
          {d.items.map((item) => (
            <LabelCell key={item.valueType} name={d.name} height={item.height}>
              {item.name}
            </LabelCell>
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default Left;
