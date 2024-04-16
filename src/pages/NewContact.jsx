import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../components/Background.jsx";
import axios from "axios";
import Spinner from "../components/Spinner";
import Button from "../components/micro-components/Button";

function NewContact() {
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      fullname,
      gender,
      email,
      phonenumber,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/contacts", data)
      .then(() => {
        setLoading(false);
        navigate("/contacts");
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred. Please try again later.");
        setLoading(false);
      });
  };
  return (
    <Background>
      <h2 className="title pt-10">
        New
        <br />
        contact
      </h2>
      <br />
      {loading ? <Spinner /> : ""}
      <div className="flex justify-between pr-72">
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

      <div className="flex justify-between pr-80">
      <input
          className="textfield"
          type="text"
          placeholder="phone number"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
       
        <h4>Gender</h4>
        <label className="block mb-2 text-white">
          <input type="radio" name="gender" value="male" className="mr-2" />
          Male
        </label>
        <label className="block mb-2 text-white">
          <input type="radio" name="gender" value="female" className="mr-2" />
          Female
        </label>

        <Button text="save" onClick={handleSaveBook} />
      </div>
    </Background>
  );
}

export default NewContact;
