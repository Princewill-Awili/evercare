import NavItem from '../NavItem/NavItem'
import './mobilemenu.css'
import { states } from '../../utils/context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'



const MobileMenu = () => {
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

     const {isLoggedOut, setIsLoggedOut} = useContext(states);
     const navigate = useNavigate()

     const logout = () => {
          setIsLoggedOut(!isLoggedOut);
          setTimeout(() => {
               setIsLoggedOut(false);
               navigate('/');
          }, 1000);
     }

  return (
    <div className='mobilemenu'>
     {
          sections.map((section,index)=>(
               <NavItem key={index} text={section}/>
          ))
     }
     <NavItem text="Log Out" onClick={logout}/>
    </div>
  )
}

export default MobileMenu