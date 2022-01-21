import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./components/pages/home/Home";


function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
          <Sidebar />
          <Home />
          {/* <div className="others">
            other pages
          </div> */}
      </div>
    </div>
  );
}

export default App;
