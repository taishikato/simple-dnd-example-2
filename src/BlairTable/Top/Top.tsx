import { css, cx } from "@emotion/css";
import {
  cols,
  baseZIndex,
  rowLabelWidth,
  totalColLabelsWidth,
} from "../consts";

const Top = ({ columns }: any) => {
  return (
    <div
      className={cx([
        css({
          position: "sticky",
          top: 0,
          zIndex: baseZIndex + 1,
        }),
        "clearfix",
      ])}
    >
      <div
        className={cx([
          css({
            clear: "both",
            width: rowLabelWidth + totalColLabelsWidth,
          }),
          "clearfix",
        ])}
      >
        {/*region TOP LEFT*/}
        <div
          className={css({
            left: "0",
            top: "0",
            position: "sticky",
            width: rowLabelWidth,
            float: "left",
            zIndex: baseZIndex,
            backgroundColor: "rgb(232 121 249)", // TODO
            boxSizing: "border-box",
            padding: "5px 15px",
            border: "1px solid red",
          })}
        >
          {/* TOP LEFT */}
          {columns[0].title}
        </div>
        {/*endregion*/}
        {/*region TOP RIGHT*/}
        <div
          className={css({
            width: totalColLabelsWidth,
            float: "left",
            backgroundColor: "rgb(245 208 254)", // TODO
            boxSizing: "border-box",
          })}
        >
          <div className={css({ display: "flex" })}>
            {columns.map((c: any, i: number) => {
              if (i === 0) return;

              return (
                <div
                  key={c.key}
                  className={css({
                    width: c.width,
                    textAlign: "center",
                    boxSizing: "border-box",
                    padding: "5px 0",
                    border: "1px solid red",
                  })}
                >
                  {/* Label {c.text} */}
                  {c.title}
                </div>
              );
            })}
          </div>
        </div>
        {/*endregion*/}
      </div>
    </div>
  );
};

export default Top;
