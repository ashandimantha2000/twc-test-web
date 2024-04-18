import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
    const { id } = useParams();
    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:5555/contacts/${id}`)
            .then(res => {
                setFullname(res.data.fullname);
                setGender(res.data.gender);
                setEmail(res.data.email);
                setPhonenumber(res.data.phonenumber);
                setLoading(false);
    });
    }, [id]);

    const handleEditContact = () => {
        const data = {
            fullname,
            gender,
            email,
            phonenumber,
    };
    setLoading(true);
    axios.put(`http://localhost:5555/contacts/${id}`, data)
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
    <div>Edit</div>
  )
}

export default Edit