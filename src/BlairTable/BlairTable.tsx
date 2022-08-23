import { css } from "@emotion/css";

const BlairTable = () => {
  /**
   * Think of this component like a 2 x 2 grid:
   * - The top left is a blank space
   * - The top right is column labels which "stick" when vertical scrolling
   * - The bottom left is row labels which "stick" when horizontal scrolling
   * - The bottom right the row / col content cells
   */

  const rowLabelWidth = 180;
  const numberOfCols = 30;
  const numberOfRows = 300;

  const cols = Array.from({ length: numberOfCols }, (_, i) => ({
    text: `col ${i + 1}`,
    width: 100, // i % 2 === 0 ? 300 : 150,
  }));

  const rows = Array.from({ length: numberOfRows }, (_, i) => ({
    text: `row ${i + 1}`,
    height: i % 5 === 0 ? 30 : 100,
  }));

  const totalColLabelsWidth = cols.reduce((a, b) => a + b.width, 0);
  const baseZIndex = 1;
  const containerWidth = 500;
  const containerHeight = 300;

  return (
    <div
      className={css({
        width: containerWidth,
        height: containerHeight,
        overflow: "auto",
      })}
    >
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
              backgroundColor: "yellow", // TODO
              boxSizing: "border-box",
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
              backgroundColor: "aqua", // TODO
              boxSizing: "border-box",
            })}
          >
            <div className={css({ display: "flex" })}>
              {cols.map((c, i) => (
                <div key={i} className={css({ width: c.width })}>
                  Label {c.text}
                </div>
              ))}
            </div>
          </div>
          {/*endregion*/}
        </div>
      </div>
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
    </div>
  );
};

export default BlairTable;
