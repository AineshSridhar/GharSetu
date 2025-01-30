import React from "react";
import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsBox } from "react-icons/bs";
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import { MdOutlineInventory2 } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-[#1a1a1a] text-gray-300 w-64 h-screen fixed left-0 top-0">
      <div className="p-4">
        <div className="flex items-center gap-2 text-red-500 mb-8">
          <MdOutlineInventory2 className="text-2xl" />
          <span className="text-lg font-semibold">GharSetu</span>
        </div>

        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-red-500 text-white"
            >
              <LuLayoutDashboard className="text-xl" />
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              to="/tasks"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              <BsBox className="text-xl" />
              <span>Tasks</span>
            </Link>
          </li>

          <li>
            <Link
              to="/budget"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              <FiShoppingCart className="text-xl" />
              <span>Budget</span>
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              <FiShoppingCart className="text-xl" />
              <span>Logout</span>
            </Link>
          </li>
          <li>
            <Link
              to="/members"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              <FiShoppingCart className="text-xl" />
              <span>Members</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
