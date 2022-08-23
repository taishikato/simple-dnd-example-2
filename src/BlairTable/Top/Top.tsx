import { css } from "@emotion/css";
import {
  cols,
  baseZIndex,
  rowLabelWidth,
  totalColLabelsWidth,
} from "../consts";

const Top = () => {
  return (
    <div
      className={css({
        position: "sticky",
        top: 0,
        zIndex: baseZIndex + 1,
      })}
    >
      <div
        className={css({
          clear: "both",
          width: rowLabelWidth + totalColLabelsWidth,
        })}
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
            padding: "5px 0",
            border: "1px solid red",
          })}
        >
          TOP LEFT
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
            {cols.map((c, i) => (
              <div
                key={i}
                className={css({
                  width: c.width,
                  textAlign: "center",
                  boxSizing: "border-box",
                  padding: "5px 0",
                  border: "1px solid red",
                })}
              >
                Label {c.text}
              </div>
            ))}
          </div>
        </div>
        {/*endregion*/}
      </div>
    </div>
  );
};

export default Top;
