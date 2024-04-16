import { Routes, Route } from "react-router-dom";

import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"
import Welcome from "./components/Welcome.jsx"
import Contacts from "./components/Contacts.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  )
}

export default App