import { useState, useEffect } from "react";
import Background from "../components/Background";
import Button from "../components/micro-components/Button";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import axios from "axios";
import Spinner from "../components/Spinner";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/contacts")
      .then((res) => {
        setContacts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Background>
      <div className="flex justify-between pt-12">
        <h2 className="title">Contacts</h2>
        <Button text="add new contact" destination="/contacts/new" />
      </div>
      <br />
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-white relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left">
            <thead>
              <tr>
                <th className="px-6 py-3"></th>
                <th className="px-6 py-3">full name</th>
                <th className="px-6 py-3">gender</th>
                <th className="px-6 py-3">e-mail</th>
                <th className="px-6 py-3">phone</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id}>
                  <th className="px-6 py-4 font-medium ">
                    <img src="wwf" alt="image" />
                  </th>
                  <td className="px-6 py-4">{contact.fullname}</td>
                  <td className="px-6 py-4">{contact.gender}</td>
                  <td className="px-6 py-4">{contact.email}</td>
                  <td className="px-6 py-4">{contact.phonenumber}</td>
                  <td className="px-6 py-4 flex justify-around">
                    <MdModeEdit />
                    <RiDeleteBinLine />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Background>
  );
}

export default Contacts;
