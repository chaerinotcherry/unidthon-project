import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./components/Home";
import Mypage from "./components/Mypage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />{" "}
        <Route path="/detail" element={<Detail />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
