import "./App.css";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="contentWrapper">
        <SideBar />
        <div className="contentArea">Content Area</div>
      </div>
    </div>
  );
}

export default App;
