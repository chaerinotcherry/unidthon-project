import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Detail from "./detail/Detail";
import Home from "./home/Home";
import Mypage from "./mypage/Mypage";

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
