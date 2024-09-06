import { Outlet } from "react-router-dom";
import "./App.css";
import Button from "./components/Button";
import { Header } from "./components/header/Header";
import SobreNos from "./components/SobreNos";

function App() {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </>
  );
}
export default App;
