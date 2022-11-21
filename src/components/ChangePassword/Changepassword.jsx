import './change.css'
import TitleBar from '../TitleBar/TitleBar'
import {BsUmbrellaFill as PasswordIcon} from 'react-icons/bs'

const Changepassword = () => {

     const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className='change'>
     <TitleBar svg={<PasswordIcon/>} txt="Change Password" color="#d81b60"/>
     <div className="changeForm">
          <div className="inputHolder">
               <label>UHID No: <span className='required'>*</span></label>
               <input type="text" placeholder={user.huid} className="changeInput" />
          </div>

          <div className="inputHolder">
               <label>Old Password: <span className='required'>*</span></label>
               <input type="text" />
          </div>

          <div className="inputHolder">
               <label>New Password: <span className='required'>*</span></label>
               <input type="text" />
              
          </div>
          <span className="warning">Password must be a minimum of 6 characters</span>

          <div className="submitFeedback">
               SUBMIT
          </div>
     </div>
    </div>
  )
}

export default Changepassword