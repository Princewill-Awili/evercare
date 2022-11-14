import './diagnostics.css'
import {HiBeaker as DiagnosticsIcon} from 'react-icons/hi'
import TitleBar from '../TitleBar/TitleBar'
import { useState } from 'react'

const Diagnostics = () => {

     const user = JSON.parse(localStorage.getItem('user'));
     const [dType, setDtype] = useState('lab');

     const DLog = ({serial,invoice,service,date,status, action}) => {
          return (
               <div className="dLog">
                    <span className="sNum members">{serial}</span>
                    <span className="invoice members">{invoice}</span>
                    <span className="service members">{service}</span>
                    <span className="date  members">{date}</span>
                    <span className="status  members stats">{status}</span>
                    <span className="action  members dwn">{action}</span>
               </div>
          )
     }

  return (
    <div className='diagnostics'>
     <TitleBar svg={<DiagnosticsIcon/>} txt="Diagnostics History" color="#00a65a"/>
     <div className="diagnosticsWrapper">
          <div className="dTabs">
               <div className={dType === 'lab' ? 'lab activeDTab' : 'lab'} onClick={()=>setDtype("lab")}>Laboratory</div>
               <div className={dType === 'radio' ? 'radio activeDTab' : 'radio'}  onClick={()=>setDtype("radio")}>Radiology</div>
          </div>
          <div className="dLogHeader">
               <span className="sNum dLogHead">S/No.</span>
               <span className="invoice dLogHead">Invoice No.</span>
               <span className="service dLogHead">Service Name</span>
               <span className="date  dLogHead">Date</span>
               <span className="status  dLogHead">Status</span>
               <span className="action  dLogHead">Action</span>
          </div>
                    {
                         dType === 'lab' && (
                              <>
                                   {
                                        user.diagnostics.lab.map((item,index) => (
                                             <DLog key={index} {...item}/>
                                        ))
                                   }
                              </>
                         )
                    }
                    {
                         dType === 'radio' && (
                              <>
                                   {
                                        user.diagnostics.radio.map((item,index)=>(
                                             <DLog key={index} {...item}/>
                                        ))
                                   }
                              </>
                         )
                    }
          </div>
     </div>
  )
}

export default Diagnostics