import FilledButton from "../micro-components/FilledButton";

function Notification(props) {

  return props.trigger ? (
    <div className="bg-black bg-opacity-85 h-screen p-20 fixed w-screen flex justify-center items-center z-50">
      <div className="relative p-10 bg-white rounded-2xl">
        {props.children}

        <div className="text-center pt-4">
          <FilledButton
            text={props.text}
            onClick={() => {props.setClose(false)}}
            destination="/contacts"
          />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Notification;
