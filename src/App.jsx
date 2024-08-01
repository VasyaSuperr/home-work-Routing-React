import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BasePage from "./pages/BasePage";
import Home from "./pages/Home";
import BecomeSponsor from "./pages/BecomeSponsor";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import AboutFund from "./pages/AboutFund";
import FundNews from "./pages/FundNews";
import Reports from "./pages/Reports";
import Support from "./pages/Support";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-the-fund" element={<AboutFund />} />
          <Route path="/fund-news" element={<FundNews />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/become-sponsor/*" element={<BecomeSponsor />} />
          <Route path="/to-support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
