import Dictionary from "./dictionary";
import "./App.css";
import logo from "./dic.png";


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>

        <footer className="App-footer">
          <small>
            Coded by ME on{" "}
            <a href="https://github.com/CookieCutter13/dictionary1/tree/main/my-app/src">
              Github
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
