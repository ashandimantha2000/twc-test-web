import { useState } from "react";
import Layout from "../components/layout.jsx";
import Button from "../components/micro-components/Button.jsx";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    // Perform validation here
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Perform registration logic here
    // ...

    // Clear form fields and error message
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  return (
    <div>
      <Layout>
        <div className="p-36 z-50 absolute">
          <h1 className="primary">Register Now</h1>
          <div className="flex flex-col pt-6">
            <input
              className="textfield"
              placeholder="e-mail"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />
            <input
              className="textfield"
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <br />
            <input
              className="textfield"
              placeholder="confirm password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <br />
            {error && <p className="text-red-500">{error}</p>}
            <Button
              text="Register"
              destination="/login"
              onClick={handleRegister}
            />
            <br />
            <Link to="/login">
              <h4 className="underline">&lt; Back to login</h4>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Register;
