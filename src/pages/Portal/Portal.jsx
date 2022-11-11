import './portal.css'
import NavItem from '../../components/NavItem/NavItem'
import Menu from '../../components/Menu/Menu'


import {FaHome as HomeIcon, FaUserCircle as UserIcon} from 'react-icons/fa'
import { useState } from 'react'

import { useContext } from 'react'
import { states } from '../../utils/context'

const sections = [
  "Menu", 
  "Visit History",
  "Diagnostics History",
  "Appointment Request", 
  "Contact Us",
  "FeedBack",
  "Faq",
  "Change Password",
  "Payment History"
]



const Portal = () => {
  const [popUp, setPopUp] = useState(false);
  const {activeSection} = useContext(states);


  return (
    <div className="portal">
      <div className="portalNode">

        <div className="topbar">

          <div className="tLeft">
            <span className="tspan ppText">Patient Portal</span>
            <span className="tspan evercare">Evercare Hospital Lekki Ltd</span>
          </div>

          <div className="tRight">
             <div className="homeWrapper tWrapper">
              <HomeIcon className='homeIcon'/>
              <span className="home">Home</span>
             </div>
             <div className="userWrapper tWrapper" onClick={()=>setPopUp(!popUp)}>
              <UserIcon className='userIcon'/>
              <span className="user">Patient's Name</span>
             </div>
            {popUp && (
              <div className="userPopUp"  onClick={()=>setPopUp(!popUp)}>
                <UserIcon className='popUpIcon'/>
                <span className="userName">Patient's Name</span>
                <span className="userAge">xx Yrs/Age</span>
              </div>
            )}
          </div>

        </div>


        <div className="navbar">
          {
            sections.map((section,index)=>(
              <NavItem key={index} text={section} />
            ))
          }
        </div>

        <div className="mainArea">
          {activeSection === 'Menu' && <Menu/>}
        
        </div>
      </div>
    </div>
  )
}

export default Portal