import Button from "./Button";
import { Link } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";

function Welcome() {
  return (
    <div className="bg-Eclipse bg-cover bg-center bg-origin-content bg-no-repeat h-screen">
      <div>
        <div className="p-20">
          <img
            src="../src/assets/images/logo-white.png"
            className="w-20 h-7"
            alt="TWC Logo White"
          />
          <h3 className="ternary font-bold -mt-3">contacts</h3>
          <h3 className="ternary -mt-3">portal</h3>
          <h1 className="primary pt-14">Welcome,</h1>
          <h3 className="ternary text-3xl">
            This is where your contacts will live. Click the button below
            <br />
            to add new contact.
          </h3>
          <br />
          <Button text="add your first contact" />
        </div>
        <Link to="/login" className="flex float-end">
          <RiLogoutCircleLine color="white" size={25} />
          <h4 className="underline float-right pl-2 pr-20">&lt; logout</h4>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
