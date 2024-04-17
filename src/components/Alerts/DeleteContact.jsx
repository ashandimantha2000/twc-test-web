import { useState } from "react";
import axios from "axios";
import Spinner from "../Spinner";
import { useNavigate, useParams } from "react-router-dom";

function DeleteContact() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteContact = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/contacts/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/contacts");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">
        {loading ? <Spinner /> : ""}
        <div className="flex flex-row items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl">
            Are you sure You want to delete this book?
          </h3>
          <button
            className="p-4 bg-red-600 text-white m-8 w-full"
            onClick={handleDeleteContact}
          >
            Yes, Delete it
          </button>
        </div>
      </h1>
    </div>
  );
}

export default DeleteContact;
