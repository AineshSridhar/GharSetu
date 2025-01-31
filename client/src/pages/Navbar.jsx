import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaTasks, FaMoneyBillWave, FaUsers } from "react-icons/fa"; // Example icons

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // For navigating after logout

  const navLinks = [
    { path: "/dashboard", name: "Dashboard", icon: <LuLayoutDashboard className="text-xl" /> },
    { path: "/dashboard/tasks", name: "Tasks", icon: <FaTasks className="text-xl" /> },
    { path: "/dashboard/budget", name: "Budget", icon: <FaMoneyBillWave className="text-xl" /> },
    { path: "/dashboard/members", name: "Members", icon: <FaUsers className="text-xl" /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div className="w-64 h-screen bg-neutral-900 text-white p-5 fixed">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-2">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                location.pathname === link.path ? "bg-red-500 text-white" : "hover:bg-gray-700"
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="w-full px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 mt-auto cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
