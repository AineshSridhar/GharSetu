import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./pages/Dashboard"; // Assume you already have a Dashboard component
import Members from "./pages/Members";
import Tasks from "./pages/Tasks"; // Assume you already have a Tasks component
import Budget from "./pages/Budget"; // Assume you already have a Budget component
import Login from "./pages/Login";
import DashboardLayout from "./pages/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex">
          <div className="w-full">
            <Routes>
              <Route path="/login" element = {<Login />} />
              <Route path="/dashboard/*" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>} >
                <Route index element={<Dashboard />} />
                <Route path="tasks" element={<Tasks />} />
                <Route path="budget" element={<Budget />} />
                <Route path="members" element={<Members />} />
              </Route>
              <Route path="*" element={<Navigate to="/login"/>}/>
          </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
