import './portal.css'

import NavItem from '../../components/NavItem/NavItem'
import Menu from '../../components/Menu/Menu'
import Visits from '../../components/Visits/Visits'
import Diagnostics from '../../components/Diagnostics/Diagnostics'
import Appointment from '../../components/Appointment/Appointment'
import Contact from '../../components/Contact/Contact'
import MobileMenu from '../../components/MobileMenu/MobileMenu'
import Feedback from '../../components/Feedback/Feedback'
import Faq from '../../components/Faq/Faq'
import Changepassword from '../../components/ChangePassword/Changepassword'
import Payment from '../../components/Payment/Payment'
import Loader from '../../components/Loader/Loader'
import { useNavigate } from 'react-router-dom'


import {RiLogoutBoxRLine as LogOutIcon} from 'react-icons/ri'
import {FaHome as HomeIcon, FaUserCircle as UserIcon} from 'react-icons/fa'
import {AiOutlineCloseSquare as CloseIcon} from 'react-icons/ai'
import {TfiMenuAlt  as MenuIcon} from 'react-icons/tfi'
import { useState,useContext, useEffect } from 'react'
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

  
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);
  
  const {isLoggedOut, setIsLoggedOut,loading,activeSection,setActiveSection,user, setUser,users, setUsers,showMobileMenu, setShowMobileMenu} = useContext(states);

  useEffect(()=>{
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if(storedUser){
      setUser(storedUser);
    }
  
    const storedSection = JSON.parse(localStorage.getItem('currentSection'));
    if(storedSection){
      setActiveSection(storedSection);
    }
    
  },[]);

  useEffect(()=>{
    localStorage.setItem('currentSection',JSON.stringify(activeSection));
  },[activeSection]);


  const logout =()=> {
    setIsLoggedOut(!isLoggedOut);
    setTimeout(() => {
      setIsLoggedOut(false);
      navigate('/');
    }, 1000);
  }
 


  return (
    <div className="portal">
      {loading && (<Loader text="Browsing Records...Hold on"/>)}
      {isLoggedOut && (<Loader text="Closing files...Logging Out"/>)}
      <div className="portalNode">

        <div className="topbar">

          <div className="tLeft">
            <span className="tspan ppText">Patient Portal</span>
            <span className="tspan evercare">Evercare Hospital Lekki Ltd</span>
          </div>

          <div className="tRight">
             <div className="homeWrapper tWrapper" onClick={logout}>
              <LogOutIcon className='logoutIcon' style={{color:"white"}}/>
              <span className="home" onClick={logout}>Log Out</span>
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
          {activeSection === 'FeedBack' && <Feedback/>}
          {activeSection === 'Faq' && <Faq/>}
          {activeSection === 'Change Password' && <Changepassword/>}
          {activeSection === 'Payment History' && <Payment/>}
        </div>
      </div>
    </div>
  )
}

export default Portal