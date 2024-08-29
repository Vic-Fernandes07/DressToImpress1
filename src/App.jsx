import { Outlet } from "react-router-dom";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div>
        <Outlet />
        <div><button>Home</button></div>
        <div><button onClick={"./components/SobreNos.jsx"}>SobreNos</button></div>
        <div><button>Ajuda</button></div>
      </div>
    </>
  );
}
export default App;
