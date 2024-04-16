import Layout from "../components/layout.jsx";
import TextField from "../components/TextField";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <Layout>
        <div className="p-36 z-50 absolute">
          <h1 className="font-poppins font-bold text-5xl">Hi there,</h1>
          <h2 className="text-white font-medium text-3xl">
            Welcome to our <br />
            contact portal
          </h2>
          <div className="flex flex-col pt-6">
            <TextField placeholder="e-mail" type="text" />
            <br />
            <TextField placeholder="password" type="password" />
          </div>
          <br />
          <div className="flex justify-between">
            <Button text="Login" />
            <p>or</p>
            <Link to="/login">
              <h3 className="text-white underline">
                &lt; Click here to Register
              </h3>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Login;
