import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import HomeScreen from "./pages/Home/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="contentWrapper">
          <SideBar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
