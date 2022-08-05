import { useDnDSort } from "./hooks/useDnDSort";
import { css } from "@emotion/css";
import Header from "./Header/Header";
import Body from "./Body/Body";

// const itemList: string[] = Array.from(Array(100)).map((_, index) => {
//   return `Row header ${index}`;
// });

const itemList = [
  { header: "Header 1", value: "Hello" },
  {
    header: "header 2",
    value: (
      <img
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bbyoda-1575303784.jpeg?resize=480:*"
        className={css`
          border-radius: 10px;
        `}
      />
    ),
  },
  { header: "Header 3", value: "Hola" },
  {
    header: "Header 4",
    value: (
      <div
        className={css`
          padding: 20px;
          background-color: green;
          border-radius: 10px;
          color: white;
        `}
      >
        div element
      </div>
    ),
  },
  {
    header: "Header 5",
    value: 47247318,
  },
];

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
