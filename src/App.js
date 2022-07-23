import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import Pricing from './Pages/Pricing';
import Explore from './Pages/Explore';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Audience from './Pages/Audience';
import Automation from './Pages/Automation';
import Campaign from './Pages/Campaign';
import Integration from './Pages/Integration';
import RvsC from './Pages/RvsC';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/audience" element={<Audience />} />
          <Route exact path="/automation" element={<Automation />} />
          <Route exact path="/campaign" element={<Campaign />} />
          <Route exact path="/integration" element={<Integration />} />
          <Route exact path="/rebrandu-vs-crm" element={<RvsC />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
