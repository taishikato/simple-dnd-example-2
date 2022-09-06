import type { ColumnProps, DataProps } from "../../types";
import { css } from "@emotion/css";
import { Fragment, useEffect, useState } from "react";
import { baseZIndex } from "../../consts";
import CollapseTriggerLabelCell from "./CollapseTriggerLabelCell/CollapseTriggerLabelCell";
import LabelCell from "./LabelCell/LabelCell";

const Left = <T extends string>({
  data,
  firstColumn,
  isFirstColumnSticky,
}: {
  data: DataProps<T>[];
  firstColumn: ColumnProps;
  isFirstColumnSticky: boolean;
}) => {
  const [rowLabelWidth, setRowLabelWidth] = useState(0);

  return (
    <div
      className={css([
        {
          width: firstColumn.width,
          float: "left",
          zIndex: baseZIndex,
        },
        isFirstColumnSticky && {
          position: "sticky",
          left: "0",
        },
      ])}
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
