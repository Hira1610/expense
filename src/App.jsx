import { Routes, Route } from "react-router-dom";
import Login from "./LoginPage";
import Register from "./Register";
import Dashboard from "./Dashboard";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
