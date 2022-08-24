import { cx, css } from "@emotion/css";
import {
  cols,
  rowLabelWidth,
  totalColLabelsWidth,
  baseZIndex,
  rows,
} from "../consts";
import { useState } from "react";
import Rows from "./Right/Rows/Rows";
import CollapseLabel from "./Left/CollapseLabel/CollapseLabel";
import CollapseRows from "./Right/CollapseRows/CollapseRows";

const Bottom = ({ columns, data }: any) => {
  return (
    <div
      className={css({
        clear: "both",
        width: rowLabelWidth + totalColLabelsWidth,
      })}
    >
      {/*region BOTTOM LEFT*/}
      <div
        className={css({
          position: "sticky",
          left: "0",
          width: rowLabelWidth,
          float: "left",
          zIndex: baseZIndex,
        })}
      >
        {/* Left */}
        {data.map((d: any) => {
          return (
            <div key={d.key}>
              <CollapseLabel name={d.name} />
              {d.items.map((item: any) => {
                return (
                  <div
                    className={cx([
                      css({
                        height: "100px",
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

        {rows.map((row, i) => (
          <div
            key={i}
            className={css({
              height: row.height,
              borderLeft: "1px solid #e2e2e2",
              borderBottom: "1px solid #e2e2e2",
              backgroundColor: "#ffffff",
              boxShadow: "3px 0px 2px rgba(0, 0, 0, 0.1)",
              boxSizing: "border-box",
              padding: "0 15px",
              display: "flex",
              alignItems: "center",
              transition: "height 200ms, opacity 200ms",
            })}
          >
            Label {row.text}
          </div>
        ))}
      </div>
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
              {/* Right */}
              {data.map((d: any) => {
                return (
                  <>
                    <CollapseRows columns={columns} collapseName={d.name} />
                    {d.items.map((item: any) => {
                      return (
                        <Rows
                          key={item.valueName}
                          columns={columns}
                          item={item}
                          collapseName={d.name}
                        />
                      );
                    })}
                  </>
                );
              })}
              {rows.map((row, i) => (
                <div
                  key={i}
                  className={css({ height: row.height, display: "flex" })}
                >
                  {cols.map((col, j) => (
                    <div
                      className={css({
                        width: col.width,
                        border: "1px solid red",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      })}
                      key={j}
                    >{`${row.text} / ${col.text}`}</div>
                  ))}
                </div>
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
