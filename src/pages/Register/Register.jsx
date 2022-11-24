import './register.css'
import Logo from "../../assets/evercareLogo2.png"

const Register = () => {
  return (
    <div className='register'>
     <div className="registerModal">
          <div className="rModalTop">
               <img src={Logo} alt='logo' className='rLogo'/>
               <span className="rModalTitle">Hospital Enrollment Form</span>
               <div className="miscItems">
                    <span>About Evercare</span>
                    <span>Legal</span>
                    <span>Back</span>
               </div>
          </div>
          <div className="rModalMain">
               
          </div>
     </div>
    </div>
  )
}

export default Register