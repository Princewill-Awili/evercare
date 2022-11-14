import './appointment.css'
import TitleBar from '../TitleBar/TitleBar'
import {BsCalendarCheck as CalenderIcon} from 'react-icons/bs'
import { useState } from 'react'

const Appointment = () => {
     const [activeAppntTab, setActiveAppntTab] = useState('new');
     const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className='appointment'>
     <TitleBar svg={<CalenderIcon/>} txt="Appointment Request" color="#DD4B39"/>
     <div className="appntWrapper">
          <div className="appntTabs">
               <div 
                    className={activeAppntTab === 'new'? "newAppnt appntTab activeAppntTab" : "newAppnt appntTab"}
                    onClick={()=> setActiveAppntTab('new')}
               >
                    New Appointment
               </div>
               <div 
                    className={activeAppntTab === 'stats'? "appntStats appntTab activeAppntTab" : "appntStats appntTab"}
                    onClick={()=> setActiveAppntTab('stats')}
               >
                    Appointment Status
               </div>
          </div>
          <div className="appntNotice">
               Please Note: This is an appointment request for self ({`${user.title} ${user.firstName} ${user.lastName}`}).
          </div>
          <div className="appntForm">
               <div className="inputHolder">
                    <label>Facility:</label>
                    <select name="facility" id="facility">
                         <option value="Evercare Hospital Lekki Ltd">
                              Evercare Hospital Lekki Ltd
                         </option>
                    </select>
               </div>

               <div className="inputHolder">
                    <label>Specialization:</label>
                    <select name="facility" id="facility">
                         <option value="--select--">
                              --Select--
                         </option>
                    </select>
               </div>

               <div className="inputHolder">
                    <label>Doctor:</label>
                    <select name="facility" id="facility">
                         <option value="--select--">
                              --Select--
                         </option>
                    </select>
               </div>

               <div className="inputHolder">
                    <label>Appointment Date:</label>
                    <input type="date" />
               </div>

               <div className="inputHolder">
                    <label>Appointment Time:</label>  
               </div>

               <div className="inputHolder">
                    <label>Remarks(if any):</label>
                    <textarea cols={45} />
               </div>
          </div>
     </div>
    </div>
  )
}

export default Appointment