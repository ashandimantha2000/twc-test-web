import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button className="h-fit w-fit p-0 bg-transparent hover:bg-white text-white font-semibold hover:text-primary-green py-2 px-4 border border-white hover:border-transparent rounded-full">
            {props.text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;
