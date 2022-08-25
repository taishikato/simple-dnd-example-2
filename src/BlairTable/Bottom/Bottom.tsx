import { cx, css } from "@emotion/css";
import { cols, rowLabelWidth, totalColLabelsWidth, rows } from "../consts";
import Rows from "./Right/Rows/Rows";
import CollapseRows from "./Right/CollapseRows/CollapseRows";
import Left from "./Left/Left";
import { Fragment } from "react";

const Bottom = ({ columns, data }: any) => {
  return (
    <div
      className={cx([
        css({
          clear: "both",
          width: rowLabelWidth + totalColLabelsWidth,
        }),
        "clearfix",
      ])}
    >
      {/*region BOTTOM LEFT*/}
      <Left data={data} />
      {/*endregion*/}
      {/*region BOTTOM RIGHT*/}
      <div
        className={css({
          width: totalColLabelsWidth,
          float: "left",
          backgroundColor: "white", // TODO
        })}
      >
        {(() => {
          return (
            <div>
              {data.map((d: any) => (
                <Fragment key={d.name}>
                  <CollapseRows columns={columns} name={d.name} />
                  {d.items.map((item: any) => {
                    return (
                      <Rows
                        // width: col.width, TODO
                        key={item.valueName}
                        columns={columns}
                        item={item}
                        collapseName={d.name}
                      />
                    );
                  })}
                </Fragment>
              ))}
            </div>
          );
        })()}
      </div>
      {/*endregion*/}
    </div>
  );
};

export default Bottom;
