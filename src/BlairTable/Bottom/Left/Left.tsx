import type { DataProps } from "../../types";
import { css } from "@emotion/css";
import { Fragment, useEffect, useState } from "react";
import { baseZIndex } from "../../consts";
import CollapseTriggerLabelCell from "./CollapseTriggerLabelCell/CollapseTriggerLabelCell";
import LabelCell from "./LabelCell/LabelCell";

const Left = <T extends string>({ data }: { data: DataProps<T>[] }) => {
  const [rowLabelWidth, setRowLabelWidth] = useState(0);
  useEffect(() => {
    let labelLength = 0;

    data.forEach((d: any) => {
      if (d.name.length > labelLength) labelLength = d.name.length;

      d.items.forEach((item: any) => {
        if (item.name.length > labelLength) labelLength = item.name.length;
      });
    });

    setRowLabelWidth(labelLength + 150);
  }, []);

  return (
    <div
      className={css({
        position: "sticky",
        left: "0",
        width: rowLabelWidth, // TODO
        float: "left",
        zIndex: baseZIndex,
      })}
    >
      {data.map((d) => (
        <Fragment key={d.name}>
          <CollapseTriggerLabelCell name={d.name} />
          {d.items.map((item) => (
            <LabelCell key={item.valueName} name={d.name}>
              {item.name}
            </LabelCell>
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default Left;
