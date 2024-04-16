import { useState } from "react";
import Layout from "../components/layout.jsx";
import TextField from "./micro-components/TextField.jsx";
import Button from "../components/micro-components/Button.jsx";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Perform login validation here
    if (email === "" || password === "") {
      setError("Please enter both email and password.");
    } else {
      // Perform actual login logic here
      // e.g., make an API call to authenticate the user
      // If login is successful, redirect the user to the desired page
      // If login fails, display an error message
    }
  };

  return (
    <div>
      <Layout>
        <div className="p-36 z-50 absolute">
          <h1 className="primary">Hi there,</h1>
          <h2 className="secondary">
            Welcome to our <br />
            contact portal
          </h2>
          <div className="flex flex-col pt-6">
            <TextField
              placeholder="e-mail"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <TextField
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div className="flex justify-between">
            <Button text="Login" destination="/" onClick={handleLogin} />
            <p>or</p>
            <Link to="/register">
              <h4 className="underline">&lt; Click here to Register</h4>
            </Link>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </Layout>
    </div>
  );
}

export default Login;
