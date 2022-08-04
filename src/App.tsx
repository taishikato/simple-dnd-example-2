import { useDnDSort } from "./hooks/useDnDSort";
import { css } from "@emotion/css";
import Header from "./Header/Header";
import Body from "./Body/Body";

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
        <Header />
        <Body items={results} />
      </table>
    </div>
  );
}

export default App;
