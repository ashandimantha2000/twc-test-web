import { Routes, Route } from "react-router-dom";

import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"
import Welcome from "./components/Welcome.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App