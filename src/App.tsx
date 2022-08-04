import { useDnDSort } from "./useDnDSort";
import { css } from "@emotion/css";

const itemList: string[] = ["Row header 1", "Row header 2", "Row header 3"];

// ドラッグ＆ドロップ並び替えサンプルのコンポーネント
function App() {
  const results = useDnDSort(itemList);

  return (
    <table
      className={css`
        border-collapse: separate;
        border-spacing: 0px 0px;
      `}
    >
      <thead>
        <tr>
          <th
            className={css`
              min-width: 150px;
              vertical-align: middle;
              padding: 10px 10px 10px 0;
              text-align: left;
              border-bottom: 1px solid #0b1424;
              position: sticky;
              top: 0px;
              left: 0;
              z-index: 20;
              background-color: #ffffff;
            `}
          >
            Th
          </th>
          <th>Th2</th>
          <th>Th3</th>
        </tr>
      </thead>
      <tbody>
        {results.map((r) => {
          return (
            <tr
              key={r.key}
              {...r.events}
              className={css`
                cursor: grab;
                touch-action: none;
              `}
            >
              <th
                className={css`
                  padding: 10px;
                  border-right: 1px solid rgb(203 213 225);
                  border-bottom: 1px solid rgb(203 213 225);
                `}
              >
                {r.value}
              </th>
              <td
                className={css`
                  padding: 10px;
                  border-bottom: 1px solid rgb(203 213 225);
                  &:not(:last-child) {
                    border-right: 1px solid rgb(203 213 225);
                  }
                `}
              >
                td 1
              </td>
              <td
                className={css`
                  padding: 10px;
                  border-bottom: 1px solid rgb(203 213 225);
                  &:not(:last-child) {
                    border-right: 1px solid rgb(203 213 225);
                  }
                `}
              >
                td 2
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default App;
