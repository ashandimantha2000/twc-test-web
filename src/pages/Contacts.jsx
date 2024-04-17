import { useState, useEffect } from "react";
import Background from "../components/Background";
import Button from "../components/micro-components/Button";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import DeleteNotification from "../components/Alerts/DeleteNotification";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedId, setSelectedId] = useState(null); // Add selectedId state variable

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
    <div>
      <DeleteNotification
        id={selectedId}
        trigger={showNotification}
        setClose={setShowNotification}
        text="Yes"
        secondary="Cancel"
      >
        <h1>Do you want to delete the contact?</h1>
      </DeleteNotification>

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
                      {contact.gender === 'Male' ? (
                        <img src="../src/assets/images/Profile-Male.png" alt="male" />
                      ) : (
                        <img src="../src/assets/images/Profile-Female.png" alt="female" />
                      )}
                    </th>
                    <td className="px-6 py-4">{contact.fullname}</td>
                    <td className="px-6 py-4">{contact.gender}</td>
                    <td className="px-6 py-4">{contact.email}</td>
                    <td className="px-6 py-4">{contact.phonenumber}</td>
                    <td className="px-6 py-4 flex justify-around">
                      <MdModeEdit />

                      <button
                        onClick={() => {
                          setSelectedId(contact._id);
                          setShowNotification(true);
                        }}
                      >
                        <RiDeleteBinLine />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Background>
    </div>
  );
}

export default Contacts;
