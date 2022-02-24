import Header from "./components/Header"
import Login from "./components/Login";
import Register from './components/Register'
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Navigate } from "react-router-dom";

function Logout() {
  localStorage.clear()
  return (
    <Navigate to="/login" replace />
  )
}

function App() {
  const userInfo = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Header value={userInfo}> </Header>
      <Routes>
        <Route path="/" element={<ProtectedRoute auth={userInfo}> <Dashboard value={userInfo} /> </ProtectedRoute>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
