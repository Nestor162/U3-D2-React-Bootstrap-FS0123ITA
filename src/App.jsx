import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
import MyNav from "./components/MyNav";

function App() {
  return (
    <div className="App">
      <MyNav />
      <MyJumbotron />
      <MyFooter />
    </div>
  );
}

export default App;
