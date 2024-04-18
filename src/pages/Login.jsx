import { useState } from "react";
import Layout from "../components/layout.jsx";
import Button from "../components/micro-components/Button.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5555/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      console.log(res);
      if (res === 'OK') {
        window.location.href = "/contacts/new";
      }
      // window.location = "//contacts/new";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
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
            <input
              className="textfield"
              type="text"
              placeholder="email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
            />

            <br />
            <input
              className="textfield"
              placeholder="password"
              type="password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
            />
          </div>

          <div className="pt-12 flex justify-between align-middle">
            <Button
              text="Login"
              destination="/contacts/new"
              onClick={handleSubmit}
            />
            <p className="text-xl px-4">or</p>
            <Link to="/register">
              <h4 className="underline text-xl">&lt; Click here to Register</h4>
            </Link>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </Layout>
    </div>
  );
}

export default Login;
