import React from "react";
import logo from "./IMG_2122.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>App List</p>
        <a className="btn" href="http://applist01.surge.sh/">
          <span role="img" aria-label="dollar">
            &#x1F4B2; Expense Tracker{" "}
          </span>
        </a>
        <a className="btn" href="http://applist02.surge.sh/">
          <span role="img" aria-label="Man with mask">
          &#128567; Covid-19 Tracker{" "}
          </span>
        </a>
      </header>
    </div>
  );
}

export default App;
