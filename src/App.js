import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./components/pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import UserList from "./components/pages/userLIst/UserList";


function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
          <Sidebar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="users" element={<UserList />} />
            </Routes>
          </BrowserRouter>
          {/* <div className="others">
            other pages
          </div> */}
      </div>
    </div>
  );
}

export default App;
