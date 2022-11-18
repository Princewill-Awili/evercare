import './feedback.css'
import TitleBar from '../TitleBar/TitleBar'
import {GiReturnArrow as FeedbackIcon} from 'react-icons/gi'

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

     return(
          <div className="questionWrapper">
               <div className="questionArea"><span>{sNum}</span>{questionArea}</div>
               {
                    questions.map((question,index)=>(
                         <div className="q1" key={index}>
                              <span className='question'>{question}</span>
                              <div className='smileys'>
                                   <div className="emojiWrapper">
                                        <ExcellentIcon className='emojis'/>
                                   </div>
                                   <div className="emojiWrapper">
                                        <GoodIcon className='emojis'/>     
                                   </div>
                                   <div className="emojiWrapper">
                                        <GoodIcon className='emojis'/>
                                   </div>
                                   <div className="emojiWrapper">
                                        <CanImproveIcon className='emojis'/>
                                   </div>
                                   <div className="emojiWrapper">
                                        <PoorIcon className='emojis'/>
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
    </div>
  )
}

export default Feedback