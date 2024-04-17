import "./Test.css";
import Popup from "../components/Alerts/Popup";
import { useState } from "react";

function Test() {
    const [buttonPopup, setButtonPopup] = useState(false);
    
  return (
    
    <div className="App">
      <main className="bg-red-600">
        <h1>React Popups</h1>
        <button onClick={()=>setButtonPopup(true)}>Open Popup</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h1>Your contact has been saved successfully!</h1>
        </Popup>
      </main>
    </div>
  );
}

export default Test;
