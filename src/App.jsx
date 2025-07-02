import { Outlet } from "react-router";
import Header from "./components/Header";

function App() {
  return (
    <div className="main-layout">
      <Header />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
