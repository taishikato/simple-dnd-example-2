import { css, cx } from "@emotion/css";
import { baseZIndex, rowLabelWidth, totalColLabelsWidth } from "../consts";

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
            display: "flex",
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
            backgroundColor: "#ffffff",
            boxSizing: "border-box",
            padding: "5px 15px",
            border: "1px solid #e2e2e2",
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
            backgroundColor: "#ffffff",
            boxSizing: "border-box",
            display: "flex",
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
                    border: "1px solid #e2e2e2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
