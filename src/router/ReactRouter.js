import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NOTFOUND } from "../global/RouterScreenName";
import NotFound from "./NotFound.js";
import NavBar from "../components/NavBar/NavBar.js";
import LandinPage from "../pages/LandinPage.js";
function ReactRouter() {
  return (
    <Router>
      {/* <NavBar /> */}
      <main className="main-content">
        <Routes>
          <Route exact path="/" element={<LandinPage />} />
          <Route path={NOTFOUND} element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}
export default ReactRouter;
