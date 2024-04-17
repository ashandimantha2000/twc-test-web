import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../components/Background.jsx";
import axios from "axios";
import Spinner from "../components/Spinner";
import Button from "../components/micro-components/Button";
import Notification from "../components/Alerts/Notification.jsx";

function NewContact() {
  const [showNotification, setShowNotification] = useState(false);
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveContact = () => {
    const data = {
      fullname,
      gender,
      email,
      phonenumber,
    };

    setLoading(true);
    axios
      .post("http://localhost:5555/contacts/new", data)   
      .then(() => {
        setLoading(false);
        // navigate("/contacts");  
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred. Please try again later.");
        setLoading(false);
      });
  };
  return (
    <div>
      <Notification text="Close" trigger={showNotification} setClose={setShowNotification}>
        Your contact has been saved successfully!
      </Notification>
      <Background>
        <h2 className="title pt-10">
          New
          <br />
          contact
        </h2>
        <br />
        {loading ? <Spinner /> : ""}
        <div className="flex justify-between pr-96">
          <input
            className="textfield"
            type="text"
            placeholder="full name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            className="textfield"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />

        <div className="flex justify-between pr-96">
          <input
            className="textfield"
            type="text"
            placeholder="phone number"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />

          <h4>Gender</h4>
          <label className="block mb-2 text-white">
            <input
              type="radio"
              name="gender"
              value="Male"
              className="mr-2"
              onClick={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label className="block mb-2 text-white">
            <input
              type="radio"
              name="gender"
              value="Female"
              className="mr-2"
              onClick={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>
        <br />
        <Button text="add your first contact" onClick={() => { handleSaveContact(); setShowNotification(true); }} />
      </Background>
    </div>
  );
}

export default NewContact;
