import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stockholm" />
        <footer>
          <a
            href="https://github.com/jihcoding/weather-react/tree/master/src"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{" "}
          </a>
          by Argielyn Lapid
        </footer>
      </div>
    </div>
  );
}

export default App;
