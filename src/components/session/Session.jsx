import './Session.css'
import { FaRegCalendar, FaRegUser } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";


function Session() {
  return (
    <>
      <div className="next-s-container">
        <div className="next-s-header">
          <h2>Next Session</h2>
          <FiEdit3  size={25} color='9f9f9f' />

        </div>
        <div className="next-s-content">
          <div className="next-s-content-item">
            <div className="next-s-content-item-header">
              <FaRegCalendar size={20} color='9f9f9f' />
              <h3>Date</h3>
            </div>
            <p className='next-s-content-text'>15 Sept</p>
          </div>
          <div className="next-s-content-item">
            <div className="next-s-content-item-header">
              <FaRegClock size={20} color='9f9f9f' />
              <h3>Time</h3>
            </div>
            <p className='next-s-content-text'>16:00h</p>
          </div>
          <div className="next-s-content-item">
            <div className="next-s-content-item-header">
              <FaRegUser size={20} color='9f9f9f' />
              <h3>Host</h3>
            </div>
            <p className='next-s-content-text'>Alejandra</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Session;