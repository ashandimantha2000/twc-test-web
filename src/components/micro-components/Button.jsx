import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link to={props.destination}>
      <button
        onClick={props.onClick}
        className="h-fit w-fit p-0 bg-transparent hover:bg-white text-white font-semibold hover:text-primary-green py-2 px-4 border border-white hover:border-transparent rounded-full"
      >
        {props.text}
      </button>
    </Link>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.propTypes = {
  destination: PropTypes.string.isRequired,
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
