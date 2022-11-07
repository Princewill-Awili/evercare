import  './main.css'
import Logo from "../../assets/evercareLogo2.png"
import { useState } from 'react'

const Main = () => {
    const [accessType, setAccessType] = useState('patient');
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
                    <div className="aForm">
                        <select name="hospital" id="hospital" className='hospital aFormInput'>
                            <option value="Evercare Hospital Lekki">Evercare Hospital Lekki</option>
                        </select>
                        <div className="inputWrapper">
                            <input type="text" className="uuid aFormInput"  placeholder='Enter UUID'/>

                        </div>
                        <div className="inputWrapper">
                            <input type="text" className="password aFormInput" placeholder='Enter password'/>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main