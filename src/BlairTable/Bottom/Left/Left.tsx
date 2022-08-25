import type { DataProps } from "../../types";
import { cx, css } from "@emotion/css";
import { useEffect, useState } from "react";
import { baseZIndex } from "../../consts";
import CollapseLabel from "./CollapseLabel/CollapseLabel";

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
      {data.map((d: any) => (
        <div key={d.name}>
          <CollapseLabel name={d.name} />
          {d.items.map((item: any) => (
            <div
              key={item.valueName}
              className={cx([
                css({
                  height: "100px", // row.height TODO
                  borderLeft: "1px solid #e2e2e2",
                  borderBottom: "1px solid #e2e2e2",
                  backgroundColor: "#ffffff",
                  boxShadow: "3px 0px 2px rgba(0, 0, 0, 0.1)",
                  boxSizing: "border-box",
                  padding: "0 15px",
                  display: "flex",
                  alignItems: "center",
                  transition: "height 200ms, opacity 200ms",
                }),
                `collapse-${d.name}`,
              ])}
            >
              {item.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Left;
