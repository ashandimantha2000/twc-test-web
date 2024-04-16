import Button from "./Button";
import { Link } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import Background from "./Background";

function Welcome() {
  return (
    <div>
      <Background>
        <div>
          <h1 className="primary pt-14">Welcome,</h1>
          <h3 className="ternary text-3xl">
            This is where your contacts will live. Click the button below
            <br />
            to add new contact.
          </h3>
          <br />
          <Button text="add your first contact" />
        </div>
      </Background>
    </div>
  );
}

export default Welcome;
