import { useDnDSort } from "./hooks/useDnDSort";
import { css } from "@emotion/css";

const itemList: string[] = Array.from(Array(100)).map((_, index) => {
  return `Row header ${index}`;
});

// ドラッグ＆ドロップ並び替えサンプルのコンポーネント
function App() {
  const results = useDnDSort(itemList);

  return (
    <div
      className={css`
        width: 600px;
        margin: 0 auto;
      `}
    >
      <table
        className={css`
          border-collapse: separate;
          border-spacing: 0px 0px;
          width: 100%;
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
              Th1
            </th>
            <th
              className={css`
                vertical-align: middle;
                padding: 10px;
                border-bottom: 1px solid #0b1424;
                position: sticky;
                top: 0;
                z-index: 10;
                background-color: #ffffff;
              `}
            >
              Th2
            </th>
            <th
              className={css`
                vertical-align: middle;
                padding: 10px;
                border-bottom: 1px solid #0b1424;
                position: sticky;
                top: 0;
                z-index: 10;
                background-color: #ffffff;
              `}
            >
              Th3
            </th>
            <th
              className={css`
                vertical-align: middle;
                padding: 10px;
                border-bottom: 1px solid #0b1424;
                position: sticky;
                top: 0;
                z-index: 10;
                background-color: #ffffff;
              `}
            >
              Th4
            </th>
            <th
              className={css`
                vertical-align: middle;
                padding: 10px;
                border-bottom: 1px solid #0b1424;
                position: sticky;
                top: 0;
                z-index: 10;
                background-color: #ffffff;
              `}
            >
              Th5
            </th>
            <th
              className={css`
                vertical-align: middle;
                padding: 10px;
                border-bottom: 1px solid #0b1424;
                position: sticky;
                top: 0;
                z-index: 10;
                background-color: #ffffff;
              `}
            >
              Th6
            </th>
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
                  position: relative;
                  touch-action: none;
                `}
              >
                <th
                  className={css`
                    min-width: 130px;
                    vertical-align: middle;
                    padding: 10px 10px 10px 0;
                    text-align: left;
                    font-weight: 600;
                    user-select: none;
                    box-sizing: border-box;
                    border-bottom: 1px solid rgb(203 213 225);
                    position: sticky;
                    left: 0;
                    box-shadow: 3px 0px 2px rgba(0, 0, 0, 0.1);
                    background-color: #ffffff;
                  `}
                >
                  {r.value}
                </th>
                <td
                  className={css`
                    padding: 10px;
                    vertical-align: middle;
                    background-color: #ffffff;
                    padding: 10px;
                    text-align: center;
                    font-weight: 600;
                    user-select: none;
                    box-sizing: border-box;
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
                    vertical-align: middle;
                    background-color: #ffffff;
                    padding: 10px;
                    text-align: center;
                    font-weight: 600;
                    user-select: none;
                    box-sizing: border-box;
                    border-bottom: 1px solid rgb(203 213 225);
                    &:not(:last-child) {
                      border-right: 1px solid rgb(203 213 225);
                    }
                  `}
                >
                  td 2
                </td>
                <td
                  className={css`
                    padding: 10px;
                    vertical-align: middle;
                    background-color: #ffffff;
                    padding: 10px;
                    text-align: center;
                    font-weight: 600;
                    user-select: none;
                    box-sizing: border-box;
                    border-bottom: 1px solid rgb(203 213 225);
                    &:not(:last-child) {
                      border-right: 1px solid rgb(203 213 225);
                    }
                  `}
                >
                  td 3
                </td>
                <td
                  className={css`
                    padding: 10px;
                    vertical-align: middle;
                    background-color: #ffffff;
                    padding: 10px;
                    text-align: center;
                    font-weight: 600;
                    user-select: none;
                    box-sizing: border-box;
                    border-bottom: 1px solid rgb(203 213 225);
                    &:not(:last-child) {
                      border-right: 1px solid rgb(203 213 225);
                    }
                  `}
                >
                  td 4
                </td>
                <td
                  className={css`
                    padding: 10px;
                    vertical-align: middle;
                    background-color: #ffffff;
                    padding: 10px;
                    text-align: center;
                    font-weight: 600;
                    user-select: none;
                    box-sizing: border-box;
                    border-bottom: 1px solid rgb(203 213 225);
                    &:not(:last-child) {
                      border-right: 1px solid rgb(203 213 225);
                    }
                  `}
                >
                  td 5
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
