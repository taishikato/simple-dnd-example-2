import { cx, css } from "@emotion/css";
import { rowLabelWidth, baseZIndex } from "../../consts";
import CollapseLabel from "./CollapseLabel/CollapseLabel";

const Left = ({ data }: any) => {
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
      {data.map((d: any) => {
        return (
          <div key={d.key}>
            <CollapseLabel name={d.name} />
            {d.items.map((item: any) => {
              return (
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
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Left;
