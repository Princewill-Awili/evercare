import './visits.css'
import {FaHistory as HistoryIcon} from 'react-icons/fa'
import {GoCalendar as SummaryIcon} from 'react-icons/go'
import TitleBar from '../TitleBar/TitleBar'
import { useState } from 'react'
import Logo from '../../assets/evercareLogo2.png'

const Visits = () => {

  const [showNotes,setShowNotes] = useState(false);
  const [note,setNote] = useState({})

  const user = JSON.parse(localStorage.getItem('user'));
  const {visits} = user;


  const VLog =({serial, date,time, doctor, specialization, vType, vSummary})=>{

    const displaySummary =(e)=>{
      const selectedNote = user.visits.filter(item => item.id === e.target.id);
      setNote(selectedNote);
      setShowNotes(!showNotes);
      console.log(selectedNote);
    }


    return(
      <div className="vLog member">
          <span className="sNum header">{serial}</span>
          <span className="date header">{`${date} ${time}`}</span>
          <span className="doc header">{`${doctor}(${specialization})`}</span>
          <span className="vType header">{vType}</span>
          <span className="vSummary header">
            <SummaryIcon id={serial} className="notesIcon" onClick={displaySummary}/>
          </span>
      </div>

    )
  }

  return (
    <div className='visits'>
      <TitleBar svg={<HistoryIcon/>} txt="Recent Doctor Visits"/>
      <div className="visitLogsContainer">
        {
          showNotes === false && 
          (
            <>
            <div className="VlogHeader member">
              <span className="sNum header">S/No.</span>
              <span className="date header">Date & Time</span>
              <span className="doc header">Doctor Name & Specialization</span>
              <span className="vType header">Visit Type</span>
              <span className="vSummary header">Summary</span>
            </div>
  
          {
            visits.map((visit,index)=>(
              <VLog 
                key={index} 
                serial={visit.id} 
                date={visit.date} 
                time={visit.time}
                doctor={visit.doctor}
                specialization={visit.specialization}
                vType={visit.visitType}
                vSummary={""}
              />
            ))
          }
          </>
          )
        }

        {
          showNotes && (
            <div className="note">
              <img src={Logo} className='noteLogo'/>
              <div className="letterHead">
                <h3>Evercare Hospital Lekki, Ltd.</h3>
                <p className="address">1, Admiralty Way, Bisola Durosimi Etti Street, Lekki Phase 1,Lekki, Lagos.</p>
                <p className="tel">Phone: +234 9091223478</p>
              </div>
              <h4 className="noteTitle">CONSULTATION SUMMARY</h4>
              <div className="noteGenInfo">
                <div className="noteGenInfoLeft">
                  <p>UHID:{` ${user.huid}`}</p>
                  <p>Age/Sex:{` ${user.age}/${user.sex}`}</p>
                  <p>Visit No:{` `}</p>
                  <p>Telephone{` ${user.phone}`}:</p>
                  <p>Address:{` ${user.address}`}</p>
                </div>
                <div className="noteGenInfoRight">
                  <p>Patient Name:{` ${user.title} ${user.firstName} ${user.lastName}`}</p>
                  <p>Doctor Name:{` `}</p>
                  <p>Visit Date:{` `}</p>
                  <p>Reffered By:{` `}</p>
                </div>
                 
              </div>
            </div>
          )
        }
        


      </div>
    </div>
  )
}

export default Visits