import './feedback.css'
import TitleBar from '../TitleBar/TitleBar'
import {GiReturnArrow as FeedbackIcon} from 'react-icons/gi'
import { useState } from 'react'

import {
     BsEmojiLaughing as ExcellentIcon,
     BsEmojiSmile as GoodIcon,
     BsEmojiNeutral as CanImproveIcon,
     BsEmojiFrown as PoorIcon
} from 'react-icons/bs'

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

const Question = ({sNum,questionArea,questions}) => {

     const [answer, setAnswer] = useState("");

     return(
          <div className="questionWrapper">
               <div className="questionArea"><span>{`${sNum}. `}</span>{questionArea}</div>
               {
                    questions.map((question,index)=>(
                         <div className="q1" key={index}>
                              <span className='question'>{question}</span>
                              <div className='smileys'>
                                   <div className={answer === 'excellent'? "activeEmoji emojiWrapper": "emojiWrapper"}>
                                        <ExcellentIcon 
                                             className='emojis'
                                             onClick={()=> setAnswer('excellent')}
                                        />
                                   </div>
                                   <div className={answer === 'good'? "activeEmoji emojiWrapper": "emojiWrapper"}>
                                        <GoodIcon 
                                             className='emojis'
                                             onClick={()=> setAnswer('good')}
                                        />     
                                   </div>
                                   <div className={answer === 'improve'? "activeEmoji emojiWrapper": "emojiWrapper"}>
                                        <CanImproveIcon 
                                             className='emojis'
                                             onClick={()=> setAnswer('improve')}
                                        />
                                   </div>
                                   <div className={answer === 'poor'? "activeEmoji emojiWrapper": "emojiWrapper"}>
                                        <PoorIcon 
                                             className='emojis'
                                             onClick={()=> setAnswer('poor')}
                                        />
                                   </div>
                              </div>
                              <input type="text" className='remarksInput' />
                         </div>
                    ) )
               }
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

     <Question 
          sNum="1" 
          questionArea="Reception Services" 
          questions={["Courtesy of front desk officer","Timeliness of Registration","Time taken for admission"]}
     />

     <Question 
          sNum="2" 
          questionArea="Nursing Services" 
          questions={[
               "Friendliness/Courtesy",
               "Promptness to calls",
               "Timely administration of medicines",
               "Service Quality for sample collection"
          ]}
     />

     <Question
          sNum="3"
          questionArea="Laboratory Services"
          questions={["Laboratory Services"]}
     />

     <Question
          sNum="4"
          questionArea="Cleaniness & Facility"
          questions={["Cleaniness & Facility"]}
     />

     <Question
          sNum="5"
          questionArea="Treating Doctor"
          questions={["Treating Doctor"]}
     />

     <Question
          sNum="6"
          questionArea="Visit completed in"
          questions={["Visit completed in"]}
     />  

     <Question
          sNum="7"
          questionArea="Overall service quality"
          questions={["Overall service quality "]}
     />  

     <Question
          sNum="8"
          questionArea="Radiology(Xray, Usg)"
          questions={["Radiology(Xray, Usg)"]}
     />     

     <Question
          sNum="9"
          questionArea="Pharmacy/ Dispensary Services"
          questions={["Pharmacy/ Dispensary Services"]}
     />  

     <Question
          sNum="10"
          questionArea="Rate our hospital."
          questions={["Rate our hospital"]}
     />   

     <div className="submitFeedback">
          SUBMIT FEEDBACK
     </div> 
    </div>
  )
}

export default Feedback