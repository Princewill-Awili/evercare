import './register.css'
import Logo from "../../assets/evercareLogo2.png"
import { useState } from 'react'

const Register = () => {

  const [activeRegTab, setActiveRegTab] = useState('general');   
  return (
    <div className='register'>
     <div className="registerModal">

          <div className="rModalTop">
               <img src={Logo} alt='logo' className='rLogo'/>
               <span className="rModalTitle">Hospital Enrollment Form</span>
               <div className="miscItems">
                    <span className='miscItem'>About Evercare</span>
                    <span className='miscItem'>Legal</span>
                    <span className='miscItem'>Back</span>
               </div>
          </div>

          <div className="rModalMain">
               <div className="rModalTabs">
                    <span 
                         className={activeRegTab === 'general'? "rModalTab activeRTab": "rModalTab"}
                         onClick={()=>setActiveRegTab('general')}
                    >
                         General
                    </span>
                    <span
                         className={activeRegTab === 'medical'? "rModalTab activeRTab": "rModalTab"}
                         onClick={()=>setActiveRegTab('medical')}
                    >
                         Medical
                    </span>
                    <span 
                         className={activeRegTab === 'account'? "rModalTab activeRTab": "rModalTab"}
                         onClick={()=>setActiveRegTab('account')}
                    >
                         Account Settings
                    </span>
               </div>
               <div className="rForm">
                    <p className="formTitle">
                         {
                              (activeRegTab==="general" && "General Information") || (activeRegTab==="medical" && "Medical Information") || (activeRegTab==="account" && "Account Settings") 
                         }
                    </p>
                    {activeRegTab === 'general' && (
                         <>
                              <div className="inputHolder">
                                   <label>Title:<span className="required">*</span></label>
                                   <select name="title" id="title">
                                        <option value="--Select--">--Select--</option>
                                        <option value="Mr.">Mr.</option>
                                        <option value="Mrs.">Mrs.</option>
                                   </select>
                              </div>
                              <div className="inputHolder">
                                   <label>First Name:<span className="required">*</span></label>
                                   <input type="text" />
                              </div>
                              <div className="inputHolder">
                                   <label>Last Name:<span className="required">*</span></label>
                                   <input type="text" />
                              </div>
                              <div className="inputHolder">
                                   <label>Email:<span className="required">*</span></label>
                                   <input type="text" />
                              </div>
                              <div className="inputHolder">
                                   <label>Phone:<span className="required">*</span></label>
                                   <input type="text" />
                              </div>
                              <div className="inputHolder">
                                   <label>Address: <span className="required">*</span></label>
                                   <input type="text" />
                              </div>
                              <div className="inputHolder">
                                   <label>Next of Kin's Name:</label>
                                   <input type="text" />
                              </div>
                              <div className="inputHolder">
                                   <label>Next of Kin's Address:</label>
                                   <input type="text" />
                              </div>
                              <div className="inputHolder">
                                   <label>Next of Kin's Phone:</label>
                                   <input type="text" />
                              </div>
                         </>
                    )
                    }
                    {
                         activeRegTab === 'medical' && (
                              <>
                              </>
                         )
                    }
               </div>

          </div>
     </div>
    </div>
  )
}

export default Register