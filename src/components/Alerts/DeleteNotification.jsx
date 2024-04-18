import { useState } from "react";
import axios from "axios";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";
import FilledButton from "../micro-components/FilledButton";
import PropTypes from "prop-types";

function DeleteNotification(props) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = props;

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

    return props.trigger ? (
        <div className="bg-black bg-opacity-85 h-screen p-20 fixed w-screen flex justify-center items-center z-50">
            {loading ? <Spinner /> : ""}
            <div className="relative p-10 bg-white rounded-2xl">
                {props.children}
                <div className="text-center pt-4">
                    <FilledButton
                        text={props.text}
                        onClick={() => {
                            handleDeleteContact();props.setClose(false);
                            //reload the page
                            setTimeout(() => {
                                window.location.reload();
                            }, 500);
                        }}
                        destination="/contacts"
                    />

                    <button
                        onClick={() => {
                            props.setClose(false);
                        }}
                        className="ml-3 h-fit w-fit px-5 text-xl bg-transparent hover:bg-white text-primary-green font-semibold hover:text-primary-green py-2 border border-primary-green hover:border-transparent rounded-full"
                    >
                        {props.secondary}
                    </button>
                </div>
            </div>
        </div>
    ) : (
        ""
    );
}

//props validation
DeleteNotification.propTypes = {
    text: PropTypes.string.isRequired,
    trigger: PropTypes.bool.isRequired,
    setClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
};

export default DeleteNotification;
