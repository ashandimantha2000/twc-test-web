import Layout from "../components/layout.jsx";
import TextField from "../components/TextField";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <Layout>
        <div className="p-36 z-50 absolute">
          <h1 className="font-poppins font-bold text-4xl">Register Now</h1>
          <div className="flex flex-col pt-6">
            <TextField placeholder="e-mail" type="text" />
            <br />
            <TextField placeholder="password" type="password" />
            <br />
            <TextField placeholder="confirm password" type="password" />
            <br />
            <Button text="Register" />
            <br />
            <Link to="/login">
              <h3 className="text-white underline">&lt; Back to login</h3>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Register;
