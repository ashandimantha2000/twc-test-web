import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Welcome from "./pages/Welcome.jsx";
import Contacts from "./pages/Contacts.jsx";
import NewContact from "./pages/NewContact.jsx";
import Test from "./pages/Test.jsx";
import DeleteContact from "./components/Alerts/DeleteContact.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/contacts/new" element={<NewContact />} />
      <Route path="/test" element={<Test />} />
      <Route path="/contacts/delete/:id" element={<DeleteContact />} />
    </Routes>
  );
}

export default App;
