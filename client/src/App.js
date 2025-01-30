import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./pages/Navbar";
import Dashboard from "./pages/Dashboard"; // Assume you already have a Dashboard component
import Members from "./pages/Members";
import Tasks from "./pages/Tasks"; // Assume you already have a Tasks component
import Budget from "./pages/Budget"; // Assume you already have a Budget component

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex">
          <Navbar />
          <div className="ml-64 p-8 w-full">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/members" element={<Members />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
