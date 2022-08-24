import { css } from "@emotion/css";

const Rows = ({ columns, item }: any) => {
  return (
    <div className={css({ height: 100, display: "flex" })}>
      {columns.map((c: any, i: number) => {
        if (i !== 0)
          return (
            <div
              key={c.key}
              className={css({
                width: "100px",
                border: "1px solid red",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              })}
            >
              {item.values[c.dataIndex]}
            </div>
          );
      })}
    </div>
  );
};

export default Rows;
