import { useDnDSort } from "./useDnDSort";

type Style<T extends HTMLElement> = React.HTMLAttributes<T>["style"];

const bodyStyle: Style<HTMLDivElement> = {
  height: "100vh",
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
};

const containerStyle: Style<HTMLDivElement> = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "350px",
  maxHeight: "500px",
};

const imageCardStyle: Style<HTMLDivElement> = {
  cursor: "grab",
  userSelect: "none",
  width: "100px",
  height: "130px",
  overflow: "hidden",
  borderRadius: "5px",
  margin: 3,
};

const imageStyle: Style<HTMLImageElement> = {
  pointerEvents: "none",
  objectFit: "cover",
  width: "100%",
  height: "100%",
};

// 並び替えしたい画像URLの配列
const imageList: string[] = [
  "https://images.pexels.com/photos/12906892/pexels-photo-12906892.jpeg",
  "https://images.pexels.com/photos/12638731/pexels-photo-12638731.jpeg",
  "https://images.pexels.com/photos/5720781/pexels-photo-5720781.jpeg",
  /* ... */
];

// ドラッグ＆ドロップ並び替えサンプルのコンポーネント
function App() {
  const results = useDnDSort(imageList);

  return (
    <div style={bodyStyle}>
      <div style={containerStyle}>
        {results.map((item) => (
          <div key={item.key} style={imageCardStyle} {...item.events}>
            <img src={item.value} alt="ソート可能な画像" style={imageStyle} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
