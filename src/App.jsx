import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UberUns from "./pages/UberUns";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/uberuns" element={<UberUns />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
