import React from 'react'
import './css/Popup.css'
function PopupMsg({isOpen,closePopup,msg,style}) {
  return (
    <div>
        {isOpen&&(
            <div className="popup-overlay">
                <div className={style}>
                    <h5>{msg}</h5>
                    <button onClick={closePopup} className='btn'>Close</button>
                </div>
            </div>
        )}

    </div>
  )
}

export default PopupMsg