import React from "react";
import Background from "./Background";
import TextField from "./micro-components/TextField.jsx";

function NewContact() {
  return (
    <Background>
      <h2 className="title pt-10">
        New
        <br />
        contact
      </h2>
      <br />
      <div className="flex justify-between pr-72">
        <TextField placeholder="full name" type="text" />
        <TextField placeholder="e-mail" type="email" />
      </div>
      <br />
      <br />

      <div className="flex justify-between pr-80">
        <TextField placeholder="phone number" type="tel" />
        <h4>Gender</h4>
        <label className="block mb-2 text-white">
          <input type="radio" name="gender" value="male" className="mr-2" />
          Male
        </label>
        <label className="block mb-2 text-white">
          <input type="radio" name="gender" value="female" className="mr-2" />
          Female
        </label>
      </div>
    </Background>
  );
}

export default NewContact;
