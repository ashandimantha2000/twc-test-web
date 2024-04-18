import { useState } from "react";
import Layout from "../components/layout.jsx";
import Button from "../components/micro-components/Button.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import axios from "axios";

function Register() {
  const [data, setData] = useState({
    email: "",
    password: "",
    retypePassword: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5555/register";
      alert('Registration successful! Please login to continue.');
      navigate('/login');
      const { data: res } = await axios.post(url, data);
      
      console.log(res.message);
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
          <h1 className="primary pb-12">Register Now</h1>
          <div className="flex flex-col pt-6">
            <input
              className="textfield"
              placeholder="e-mail"
              type="text"
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

            <br />
            <input
              className="textfield"
              placeholder="confirm password"
              type="password"
              name="retypePassword"
              onChange={handleChange}
              value={data.retypePassword}
              required
            />
            <br />
            {error && <p className="text-red-500">{error}</p>}
            <br />
            <Button
              text="Register"
              onClick={handleSubmit}
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