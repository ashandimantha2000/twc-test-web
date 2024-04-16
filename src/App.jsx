import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Welcome from "./pages/Welcome.jsx"
import Contacts from "./pages/Contacts.jsx"
import NewContact from "./pages/NewContact.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/contacts/new" element={<NewContact />} />
    </Routes>
  )
}

export default App