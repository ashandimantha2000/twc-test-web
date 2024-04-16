import PropTypes from "prop-types";

function TextField(props) {
  return (
    <input
      className="h-10 w-80 p-5 rounded-3xl text-primary-green"
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}

//props validation
TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

TextField.propTypes = {
  type: PropTypes.string.isRequired,
};

export default TextField;
