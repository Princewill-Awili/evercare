import NavItem from '../NavItem/NavItem'
import './mobilemenu.css'



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
  return (
    <div className='mobilemenu'>
     {
          sections.map((section,index)=>(
               <NavItem key={index} text={section}/>
          ))
     }
    </div>
  )
}

export default MobileMenu