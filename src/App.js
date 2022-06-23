import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import Pricing from './Pages/Pricing';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
