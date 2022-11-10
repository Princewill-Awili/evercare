import './portal.css'
import NavItem from '../../components/NavItem/NavItem'
import {FaHome as HomeIcon, FaUserCircle as UserIcon} from 'react-icons/fa'

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
  return (
    <div className="portal">
      <div className="portalNode">

        <div className="topbar">

          <div className="tLeft">
            <span className="tspan"> Evercare Hospital Lekki</span>
            <span className="tspan">Patient Portal</span>
          </div>

          <div className="tRight">
             <div className="homeWrapper tWrapper">
              <HomeIcon className='homeIcon'/>
              <span className="home">Home</span>
             </div>
             <div className="userWrapper tWrapper">
              <UserIcon className='userIcon'/>
              <span className="user">User</span>
             </div>


          </div>

        </div>


        <div className="navbar">
          {
            sections.map((section,index)=>(
              <NavItem key={index} text={section} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Portal