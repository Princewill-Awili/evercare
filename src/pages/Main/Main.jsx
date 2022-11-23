import  './main.css'
import Logo from "../../assets/evercareLogo2.png"
import { useContext, useState } from 'react'
import {BsEnvelopeFill as EnvelopeIcon} from 'react-icons/bs'
import {AiFillLock as LockIcon} from 'react-icons/ai' 

import { useNavigate } from 'react-router-dom'
import { states } from '../../utils/context'


import { db } from '../../utils/firebase-config'
import { getDocs, collection } from '@firebase/firestore'

const Main = () => {
    const [accessType, setAccessType] = useState('patient');
    const [uid, setUid]  = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const {activeSection} = useContext(states);

    const {users, setUsers} = useContext(states);
    const usersCollectionRef = collection(db,"users");

    const navigate = useNavigate();

    const handleLogin = () => {
        if(uid.length > 0 && password.length > 0 ){

            const getUsers = async () => {
                const data = await getDocs(usersCollectionRef);
                const storedUsers = await data.docs.map(doc =>({...doc.data(), id: doc.id}))
                setUsers(storedUsers);
              }
              getUsers();

              const validUser = users.find(user => user.huid === Number(uid));

            
            if(validUser){
                setUsers(validUser);
                localStorage.setItem('user',JSON.stringify(validUser))
                localStorage.setItem('currentSection', JSON.stringify('Menu'));
                navigate('/portal')
            } 
           
        }
        else{
            setError(true);
        }
    }







  return (
    <div className='main'>
        <div className="accessNode">
            <div className="logoArea">
                <img className="longLogo" src={Logo} alt="longLogo" />
            </div>
            <div className="accessArea">
                <div className="accessOptions">
                    <span className={accessType=== 'patient'? "aOpt aOptActive" :"aOpt"} onClick={()=> setAccessType('patient')}>Patient</span>
                    <span className={accessType=== 'specialist'? "aOpt aOptActive" :"aOpt"} onClick={()=> setAccessType('specialist')}>Specialist</span>
                </div>
                <div className="accessForms">
                    <div className="aFormTitle">
                        {
                            accessType==='patient' ? <span className="bold"><span>{"Patient "}</span>Portal</span> : <span className="bold"><span>{"Specialist "}</span>Portal</span>
                        }
                    </div>
                    {
                        error && <div className="error">Oops...Enter the correct details.</div>
                    }
                    <div className="aForm">
                        {
                            accessType === 'patient' ? (
                                <>
                                     <select name="hospital" id="hospital" className='hospital aFormSelect'>
                                            <option value="Evercare Hospital Lekki">Evercare Hospital Lekki</option>
                                            </select>
                                            <div className="inputWrapper">
                                                <input 
                                                    type="text" 
                                                    className="uuid aFormInput"  
                                                    placeholder='Enter UHID'
                                                    value={uid}
                                                    onChange={(e)=> setUid(e.currentTarget.value)}
                                                />
                                                <EnvelopeIcon className='inputIcon'/>
                                            </div>
                                            <div className="inputWrapper">
                                                <input 
                                                    type="text" 
                                                    className="password aFormInput" 
                                                    placeholder='Enter password'
                                                    value={password}
                                                    onChange={(e)=>setPassword(e.currentTarget.value)}
                                                />
                                                <LockIcon className='inputIcon'/>
                                            </div>

                                            <div className="aFormBtns">
                                                <div className="loginBtn" onClick={handleLogin}>Login</div>
                                                <div className="resetBtn">Reset</div>
                                            </div>

                                            <div className="forgotBtn miscBtns">Forgot Password?</div>

                                            <div className="howToUse miscBtns"><a href='https://www.youtube.com/watch?v=egQj_MSSaX0' target="blank">How to use the Portal</a></div>
                                </>

                            )
                            :
                            (
                                <>
                                            <select name="hospital" id="hospital" className='hospital aFormSelect'>
                                                <option value="Department">Department</option>
                                                <option value="Cardiology">Cardiology</option>
                                                <option value="Neurosurgery">Neurosurgery</option>
                                                <option value="Family Medicine">Family Medicine</option>
                                                <option value="Gynaecology">Gynaecology</option>
                                                <option value="Radiology">Radiology</option>
                                                <option value="Optometry">Optometry</option>
                                                <option value="Accidents & Emergency">Accidents & Emergency</option>
                                            </select>
                                            <div className="inputWrapper">
                                                <input type="text" className="uuid aFormInput"  placeholder='Enter Staff ID'/>
                                                <EnvelopeIcon className='inputIcon'/>
                                            </div>
                                            <div className="inputWrapper">
                                                <input type="text" className="password aFormInput" placeholder='Enter password'/>
                                                <LockIcon className='inputIcon'/>
                                            </div>

                                            <div className="aFormBtns">
                                                <div className="loginBtn">Login</div>
                                                <div className="resetBtn">Reset</div>
                                            </div>

                                            <div className="forgotBtn miscBtns">Forgot Password?</div>

                                            <div className="howToUse miscBtns"><a href='https://www.youtube.com/watch?v=egQj_MSSaX0' target="blank">How to use the Portal</a></div>
                                </>
                            )
                        }
                       
                        
                        
                    </div>
                </div>
            </div>
            <div className="nodeFooter">&#169; Evercare Hospital Lekki, Lagos, Nigeria. 2022. </div>
        </div>
    </div>
  )
}

export default Main