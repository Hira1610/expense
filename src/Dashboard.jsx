import {
  LayoutDashboard,
  Wallet,
  PlusCircle,
  BarChart3,
  Settings,
  User
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";

import { useState } from "react";
import "./App.css";

export default function Dashboard() {
  const [active, setActive] = useState("Dashboard");

  const sidebarItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Expenses", icon: <Wallet size={18} /> },
    { name: "Add Expense", icon: <PlusCircle size={18} /> },
    { name: "Reports", icon: <BarChart3 size={18} /> },
    { name: "Settings", icon: <Settings size={18} /> }
  ];

  const barData = [
    { name: "Food", value: 400 },
    { name: "Transport", value: 300 },
    { name: "Shopping", value: 200 },
    { name: "Bills", value: 278 }
  ];

  const lineData = [
    { day: "Mon", expense: 120 },
    { day: "Tue", expense: 210 },
    { day: "Wed", expense: 150 },
    { day: "Thu", expense: 300 },
    { day: "Fri", expense: 250 }
  ];

  return (
    <div className="dashboard-wrapper">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Expense Tracker</h2>

        <ul className="sidebar-menu">
          {sidebarItems.map(item => (
            <li
              key={item.name}
              className={active === item.name ? "active" : ""}
              onClick={() => setActive(item.name)}
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main */}
      <div className="dashboard-content">

        {/* Topbar */}
        <div className="dashboard-topbar">
          <input placeholder="Search expenses..." />
          <User size={20} />
        </div>

        {/* Cards */}
        <div className="summary-cards">
          <Card title="Total Spent" value="$4,250" />
          <Card title="Top Category" value="Food" />
          <Card title="Budget Used" value="68%" />
          <Card title="Transactions" value="142" />
        </div>

        {/* Charts */}
        <div className="chart-section">

          <div className="chart-card">
            <h4>Spending by Category</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h4>Expenses Over Time</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line dataKey="expense" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* Table */}
        <div className="expense-table">
          <h4>Recent Expenses</h4>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15 Dec</td>
                <td>Grocery</td>
                <td>Food</td>
                <td>$85.50</td>
              </tr>
              <tr>
                <td>14 Dec</td>
                <td>Uber</td>
                <td>Transport</td>
                <td>$18.00</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="summary-card">
      <span>{title}</span>
      <h3>{value}</h3>
    </div>
  );
}
