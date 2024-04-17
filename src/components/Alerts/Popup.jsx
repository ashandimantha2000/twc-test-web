import React from 'react'

function Popup(props) {
  return (props.trigger) ? (
    <div className="bg-slate-500 p-20 fixed w-full flex justify-center items-center z-50">
        <div className="popup-inner relative p-10 bg-blue-600">
            <button className='close-btn' onClick={()=>props.setTrigger(false)}>close</button>
            {props.children}
        </div>
    </div>
  ):""
}

export default Popup