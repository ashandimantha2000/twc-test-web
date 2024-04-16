import Layout from "../components/layout.jsx";
import TextField from "../components/TextField";

function Login() {
  return (
    <div>
      <Layout>
        <div className="p-40 z-50 absolute">
          <h1 className="font-poppins font-bold text-5xl">
            Hi there,
          </h1>
          <h2 className="text-white font-medium text-3xl">
            Welcome to our <br />
            contact portal
          </h2>
          <div className="flex flex-col pt-6">
            <TextField placeholder="e-mail" type="text" />
            <br />
            <TextField placeholder="password" type="password" />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Login;
