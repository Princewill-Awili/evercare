import './contact.css'
import TitleBar from '../TitleBar/TitleBar'
import {FaUserMd as ContactIcon} from 'react-icons/fa'

const Contact = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className='contact'>
     <TitleBar svg={<ContactIcon/>} txt="Call me back" color="#605ca8"/>

     <div className="contactWrapper">

      <div className="inputHolder">
        <label>UHID: <span className='required'>*</span></label>
        <input type="text" placeholder={user.huid} />
      </div>

      <div className="inputHolder">
        <label>Name:</label>
        <input type="text" placeholder={`${user.title} ${user.firstName} ${user.lastName}`} />
      </div>

      <div className="inputHolder">
        <label>Email: <span className='required'>*</span></label>
        <input type="text" placeholder={user.email} />
      </div>

      <div className="inputHolder">
        <label>Mobile: <span className='required'>*</span></label>
        <input type="text" placeholder={user.phone} />
      </div>

      <div className="inputHolder">
        <label>Call back date: <span className='required'>*</span></label>
        <input type="date" placeholder={user.email} />
      </div>

      <div className="inputHolder">
        <label>Call back time: </label>
        <input type="time" placeholder={user.email} />
      </div>


      <div className="inputHolder">
        <label>Remarks:<span className='required'>*</span> </label>
        <textarea cols={50}></textarea>
      </div>

      <div className="submitContact">
        SUBMIT
      </div>

     </div>
    </div>
  )
}

export default Contact