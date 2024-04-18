import Button from "../components/micro-components/Button";
import Background from "../components/Background";

function Welcome() {
  const user= sessionStorage.getItem('token');
if (user=== null) {
    window.location.href = "/login";
}
  return (
 
      <Background>
        <div>
          <h1 className="primary pt-16">Welcome,</h1>
          <h3 className="ternary text-3xl pb-24">
            This is where your contacts will live. Click the button below
            <br />
            to add new contact.
          </h3>         
          <Button text="add your first contact" destination="/contacts/new" />
        </div>
      </Background>

  );
}

export default Welcome;
