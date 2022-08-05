import { css } from "@emotion/css";
import Table from "./Table/Table";

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

function App() {
  return (
    <div
      className={css`
        width: 600px;
        margin: 0 auto;
      `}
    >
      <Table itemList={itemList} />
    </div>
  );
}

export default App;
