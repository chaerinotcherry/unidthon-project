import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Mypage from "./Mypage/Mypage";
import Home from "./Home/Home";
import Detail from "./Detail/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
