import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
  matchPath,
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
  const hideHeaderPaths = ["/mypage", "/detail/:gonggoId"];
  const showHeader = !hideHeaderPaths.some((path) =>
    matchPath({ path, end: true }, location.pathname)
  );

  return (
    <div>
      <div className="App">
        {showHeader && <Header />}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mypage" element={<Mypage />} />{" "}
            <Route path="/detail/:gonggoId" element={<Detail />} />{" "}
            {/* Detail 화면 */}
            <Route path="/custom" element={<Custom />} />{" "}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
