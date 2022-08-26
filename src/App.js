import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/marija-trzic-rastija-711009175/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Marija Tržić Rastija{" "}
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/MarijaTRastija/react-weather-again"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
