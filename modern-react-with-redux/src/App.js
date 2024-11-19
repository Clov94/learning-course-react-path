import logo from "./logo.svg";
import "./App.css";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <CarForm />
        <CarList />
        <CarSearch />
        <CarValue />
      </body>
    </div>
  );
}

export default App;
