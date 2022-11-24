import './change.css'
import TitleBar from '../TitleBar/TitleBar'
import {BsUmbrellaFill as PasswordIcon} from 'react-icons/bs'
import { useState } from 'react';

import {db} from '../../utils/firebase-config'
import {updateDoc, collection, doc} from '@firebase/firestore'

const Changepassword = () => {

     const user = JSON.parse(localStorage.getItem('user'));
     const [oldPassword,setOldPassword] = useState("");
     const [newPassword, setNewPassword] = useState("");

     const [processed, setProcessed] = useState(false);
     
     const handlePasswordChange = async() =>{
          const userDoc = doc(db,"users", user.id);
          const newField = {password:newPassword};
          await updateDoc(userDoc,newField);
          setProcessed(true);
          setOldPassword("")
          setNewPassword("")
          setTimeout(() => {
               setProcessed(false);
          }, 1500);
     }

  return (
    <div className='change'>
     <TitleBar svg={<PasswordIcon/>} txt="Change Password" color="#d81b60"/>
     <div className="changeForm">
          {processed && (<p className='process'>Password Change Successful!</p>)}
          <div className="inputHolder">
               <label>UHID No: <span className='required'>*</span></label>
               <input type="text" placeholder={user.huid} className="changeInput" />
          </div>

          <div className="inputHolder">
               <label>Old Password: <span className='required'>*</span></label>
               <input type="text" value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)}/>
          </div>

          <div className="inputHolder">
               <label>New Password: <span className='required'>*</span></label>
               <input type="text" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>
              
          </div>
          <span className="warning">Password must be a minimum of 6 characters</span>

          <div className="submitFeedback" onClick={handlePasswordChange}>
               SUBMIT
          </div>
     </div>
    </div>
  )
}

export default Changepassword