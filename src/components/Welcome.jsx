import Button from "./micro-components/Button";
import { Link } from "react-router-dom";
import Background from "./Background";

function Welcome() {
  return (
 
      <Background>
        <div>
          <h1 className="primary pt-14">Welcome,</h1>
          <h3 className="ternary text-3xl">
            This is where your contacts will live. Click the button below
            <br />
            to add new contact.
          </h3>
          <br />
          <Link to="/contacts">
          <Button text="add your first contact" /></Link>
        </div>
      </Background>

  );
}

export default Welcome;
