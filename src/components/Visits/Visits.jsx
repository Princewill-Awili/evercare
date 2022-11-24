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
      const selectedNote = user.visits[e.currentTarget.id - 1];
      setNote(selectedNote);
      setShowNotes(!showNotes);
      console.log(note);
    }


    return(
      <div className="vLog member">
          <span className="sNum header">{serial}</span>
          <span className="date header">{`${date} ${time}`}</span>
          <span className="doc header highLight">{`${doctor}(${specialization})`}</span>
          <span className="vType header">{vType}</span>
          <span className="vSummary header">
            <SummaryIcon id={serial} className="notesIcon" onClick={displaySummary}/>
          </span>
      </div>

    )
  }

  return (
    <div className='visits'>
      <TitleBar svg={<HistoryIcon/>} txt="Recent Doctor Visits" color="#00C0EF"/>
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
            visits?.map((visit,index)=>(
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
              <img src={Logo} className='noteLogo' alt='noteLogo'/>
              <div className="letterHead">
                <h3>Evercare Hospital Lekki, Ltd.</h3>
                <p className="address">1, Admiralty Way, Bisola Durosimi Etti Street, Lekki Phase 1,Lekki, Lagos.</p>
                <p className="tel">Phone: +234 9091223478</p>
              </div>
              <h4 className="noteTitle">CONSULTATION SUMMARY</h4>
              <div className="noteGenInfo">
                <div className="noteGenInfoLeft">
                  <p>UHID:<span className='noteGenInfoVals'>{` ${user.huid}`}</span></p>
                  <p>Age/Sex:<span className='noteGenInfoVals'>{` ${user.age}/${user.sex}`}</span></p>
                  <p>Visit No:<span className='noteGenInfoVals'>{` ${note.id}`}</span></p>
                  <p>Telephone:<span className='noteGenInfoVals'>{` ${user.phone}`}</span></p>
                  <p>Address:<span className='noteGenInfoVals'>{` ${user.address}`}</span></p>
                </div>
                <div className="noteGenInfoRight">
                  <p>Patient Name:<span className='noteGenInfoVals'>{` ${user.title} ${user.firstName} ${user.lastName}`}</span></p>
                  <p>Doctor Name:<span className='noteGenInfoVals'>{` ${note.doctor}`}</span></p>
                  <p>Visit Date:<span className='noteGenInfoVals'>{` ${note.date} ${note.time} `}</span></p>
                  <p>Referred By:<span className='noteGenInfoVals'>{` `}</span></p>
                </div>
                 
              </div>
              <h3 className='noteTitle'>DOCTOR'S NOTES</h3>
              <p className="notes">
                {note.summary}
              </p>

              <div className="closeNote" onClick={()=>setShowNotes(!showNotes)}>CLOSE NOTE</div>
            </div>
          )
        }
        


      </div>
    </div>
  )
}

export default Visits