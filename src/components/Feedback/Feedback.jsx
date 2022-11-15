import './feedback.css'
import TitleBar from '../TitleBar/TitleBar'
import {GiReturnArrow as FeedbackIcon} from 'react-icons/gi'

import {BsEmojiHeartEyes as ExcellentIcon,} from 'react-icons/bs'

const Feedback = () => {

const Language = () => {
     return (
          <div className="lang">
               <label>Select Language</label>
               <select name="lang" id="lang">
                    <option value="English">English</option>
               </select>
          </div>
     )
}

const Question = ({sNum,questionArea,questionsArray}) => {

     return(
          <div className="questionWrapper">
               <div className="questionArea"><span>{sNum}</span>{questionArea}</div>
               <div className="q1">
                    {questionsArray[0]}
                    <div className='smileys'>

                    </div>
               </div>

          </div>
     )
}

  return (
    <div className='feedback'>
     <TitleBar svg={<FeedbackIcon/>} txt="Feedback" color="#39cccc" extras={<Language/>}/>
     <div className="pleaseRate">Please rate the following.</div>
     <div className="ratesHeader">
          <span className="rateNum ratesSpan">S/No.</span>
          <span className="question ratesSpan">Questioner</span>

          <span className="excellent ratesSpan">Excellent</span>
          <span className="good ratesSpan">Good</span>
          <span className="need ratesSpan">Can Improve</span>
          <span className="poor ratesSpan">Poor</span>

          <span className='remarks ratesSpan'>Remarks</span>
     </div>
    </div>
  )
}

export default Feedback