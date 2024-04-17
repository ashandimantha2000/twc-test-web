import { Link } from "react-router-dom";

function FilledButton(props) {
  return (
    <Link to={props.destination}>
      <button
        onClick={props.onClick}
        className="h-fit w-fit px-7 text-xl bg-primary-green hover:bg-red-600 text-white font-semibold hover:text-white py-2 border border-white hover:border-transparent rounded-full"
      >
        {props.text}
      </button>
    </Link>
  )
}



export default FilledButton