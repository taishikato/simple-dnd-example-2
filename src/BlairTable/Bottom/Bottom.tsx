import { css } from "@emotion/css";

const numberOfCols = 30;
const numberOfRows = 300;
const cols = Array.from({ length: numberOfCols }, (_, i) => ({
  text: `col ${i + 1}`,
  width: 100, // i % 2 === 0 ? 300 : 150,
}));
const rowLabelWidth = 180;
const totalColLabelsWidth = cols.reduce((a, b) => a + b.width, 0);
const baseZIndex = 1;
const rows = Array.from({ length: numberOfRows }, (_, i) => ({
  text: `row ${i + 1}`,
  height: i % 5 === 0 ? 30 : 100,
}));

const Bottom = () => {
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
        {rows.map((row, i) => (
          <div
            key={i}
            className={css({
              height: row.height,
              border: "1px solid black", // TODO
              backgroundColor: "rgba(134,132,41,0.5)", // TODO
              boxSizing: "border-box",
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
