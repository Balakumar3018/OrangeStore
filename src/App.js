import { Routes } from "./routes";
import { Footer } from "./components/footer/footer";
import { NavigationTop } from "./components/navigation-top/navigation-top";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
          <NavigationTop/>
            <Routes/>
          <Footer/>
    </div>
  );
}

export default App;
