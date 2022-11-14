import './portal.css'

import NavItem from '../../components/NavItem/NavItem'
import Menu from '../../components/Menu/Menu'
import Visits from '../../components/Visits/Visits'
import Diagnostics from '../../components/Diagnostics/Diagnostics'
import Appointment from '../../components/Appointment/Appointment'
import Contact from '../../components/Contact/Contact'

import {sampleUser} from '../../utils/dummyData'


import {FaHome as HomeIcon, FaUserCircle as UserIcon} from 'react-icons/fa'
import {AiOutlineCloseSquare as CloseIcon} from 'react-icons/ai'
import {TfiMenuAlt  as MenuIcon} from 'react-icons/tfi'
import { useState,useContext, useEffect } from 'react'
import { states } from '../../utils/context'
import MobileMenu from '../../components/MobileMenu/MobileMenu'




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
  
  const {activeSection,setActiveSection,user, setUser,showMobileMenu, setShowMobileMenu} = useContext(states);

  useEffect(()=>{
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if(storedUser){
      setUser(storedUser);
    }
    else{
      localStorage.setItem('user',JSON.stringify(sampleUser));
      setUser(sampleUser);
    }

    const storedSection = JSON.parse(localStorage.getItem('currentSection'));
    if(storedSection){
      setActiveSection(storedSection);
    }
    
  },[]);

  useEffect(()=>{
    localStorage.setItem('currentSection',JSON.stringify(activeSection));
  },[activeSection]);



 


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
              {user.avatar ? (<img src={user.avatar} alt="avatar" className='userAvatar'/>) : <UserIcon className='userIcon'/>}
              <span className="user">{`${user.title} ${user.firstName} ${user.lastName}`}</span>
             </div>
             <div className="menuIconWrapper">
              {
              showMobileMenu ? (<CloseIcon className='menuIcon closeIcon' onClick={()=>setShowMobileMenu(!showMobileMenu)}/>) :
               (<MenuIcon className='menuIcon' onClick={()=>setShowMobileMenu(!showMobileMenu)}/>)
              }
              
             </div>
            {popUp && (
              <div className="userPopUp"  onClick={()=>setPopUp(!popUp)}>
                
                {user.avatar ? (<img src={user.avatar} className="popUpImg" alt="userImg"/>):(<UserIcon className='popUpIcon'/>)}
                <span className="userName">{`${user.title} ${user.firstName} ${user.lastName}`}</span>
                <span className="userAge">{`${user.age} Years`}</span>
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
          {showMobileMenu && <MobileMenu/>}
          {activeSection === 'Menu' && <Menu/>}
          {activeSection === 'Visit History' && <Visits/>}
          {activeSection === 'Diagnostics History' && <Diagnostics/>}
          {activeSection === 'Appointment Request' && <Appointment/>}
          {activeSection === 'Contact Us' && <Contact/>}
        </div>
      </div>
    </div>
  )
}

export default Portal