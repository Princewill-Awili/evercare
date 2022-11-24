import './register.css'
import Logo from "../../assets/evercareLogo2.png"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [activeRegTab, setActiveRegTab] = useState('general');   
  const navigate = useNavigate();
  return (
    <div className='register'>
     <div className="registerModal">

          <div className="rModalTop">
               <img src={Logo} alt='logo' className='rLogo'/>
               <span className="rModalTitle">Hospital Enrollment Form</span>
               <div className="miscItems">
                    <span className='miscItem'>Terms of Service</span>
                    <span className='miscItem' onClick={()=> navigate('/')}>Login</span>
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
                                   <label>Next of Kin's Name: <span className="required">*</span></label>
                                   <input type="text" />
                              </div>
                              <div className="inputHolder">
                                   <label>Next of Kin's Address:<span className="required">*</span></label>
                                   <input type="text" />
                              </div>
                              <div className="inputHolder">
                                   <label>Next of Kin's Phone:<span className="required">*</span></label>
                                   <input type="text" />
                              </div>
                         </>
                    )
                    }
                    {
                         activeRegTab === 'medical' && (
                              <>
                                   <div className="inputHolder">
                                        <label>Age:<span className="required">*</span></label>
                                        <input type="number" />
                                   </div>
                                   <div className="inputHolder">
                                        <label>Sex:<span className="required">*</span></label>
                                        <input type="text" />
                                   </div>
                                   <div className="inputHolder">
                                        <label>Height:<span className="required">*</span></label>
                                        <input type="number" />
                                   </div>
                                   <div className="inputHolder">
                                        <label>Weight:<span className="required">*</span></label>
                                        <input type="number" />
                                   </div>
                                   <div className="inputHolder">
                                        <label>Blood Group:<span className="required">*</span></label>
                                        <input type="text" />
                                   </div>
                                   <div className="inputHolder">
                                        <label>Genotype:<span className="required">*</span></label>
                                        <input type="text" />
                                   </div>
                                   <div className="inputHolder">
                                        <label>Blood Presure:<span className="required">*</span></label>
                                        <input type="text" />
                                   </div>

                              </>
                         )
                    }
                    {
                         activeRegTab === 'account' && 
                         (
                              <>
                                   <div className="inputHolder">
                                        <label>Profile Picture:<span className="required">*</span></label>
                                        <input type="file" />
                                   </div>
                                   <div className="inputHolder">
                                        <label>Create Password:<span className="required">*</span></label>
                                        <input type="text" />
                                   </div>
                                   <div className="inputHolder">
                                        <label>Confirm Password:<span className="required">*</span></label>
                                        <input type="text" />
                                   </div>
                              </>
                         )
                    }
               </div>
               <p className="warning notice">PLEASE NOTE: Ensure you have filled all sections above and read through terms of service before clicking on the "Register" button.</p>
               <div className="rFormSubmit">
                    <span className="rFormBtn rSubmit">Register</span>
                    <span className="rFormBtn rReset">Reset</span>
               </div>

          </div>
     </div>
    </div>
  )
}

export default Register