import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Detail from "./detail/Detail";
import Home from "./home/Home";
import Mypage from "./mypage/Mypage";
import Header from "./home/components/Header";
import Custom from "./home/Custom";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const showHeader = !["/mypage", "/detail/:id"].includes(location.pathname);

  return (
    <div>
      <div className="App">
        {showHeader && <Header />}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mypage" element={<Mypage />} />{" "}
            <Route path="/detail/:id" element={<Detail />} />{" "}
            <Route path="/custom" element={<Custom />} />{" "}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
