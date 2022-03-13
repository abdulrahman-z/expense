import PermanentDrawerLeft from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Expenses from "./components/Expenses";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PermanentDrawerLeft />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
