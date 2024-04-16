import Layout from "../components/layout.jsx";
import TextField from "../components/TextField";
import Button from "./Button.jsx";

function Register() {
  return (
    <div>
      <Layout>
        <div className="p-36 z-50 absolute">
          <h1 className="font-poppins font-bold text-4xl">
            Register Now
          </h1>
          <div className="flex flex-col pt-6">
            <TextField placeholder="e-mail" type="text" />
            <br />
            <TextField placeholder="password" type="password" />
            <br />
            <TextField placeholder="confirm password" type="password" />
            <br />
            <Button text="Register" />
            <br />
            <h1 className="underline">&lt; Back to login</h1>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Register;
