import './visits.css'
import {FaHistory as HistoryIcon} from 'react-icons/fa'
import TitleBar from '../TitleBar/TitleBar'

const Visits = () => {
  return (
    <div className='visits'>
      <TitleBar svg={<HistoryIcon/>} txt="Recent Doctor Visits"/>
      <div className="visitLogsContainer">
        <div className="VlogHeader">
          <span className="sNum header">SI.No</span>
          <span className="date header">Date & Time</span>
          <span className="doc header">Doctor Name & Specialization</span>
          <span className="vType header">Visit Type</span>
          <span className="vSummary header">OPD Summary</span>
        </div>
      </div>
    </div>
  )
}

export default Visits