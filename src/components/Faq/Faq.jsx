import './faq.css'
import TitleBar from '../TitleBar/TitleBar'
import {FaQuestionCircle as FAQIcon} from 'react-icons/fa'
import {MdOutlineAdd as ExpandIcon} from 'react-icons/md'
import { faqs } from '../../utils/dummyData'
import { useState } from 'react'

const Faq = () => {

     const FaqItem = ({question, answer}) =>{

          const [showAnswer, setShowAnswer] = useState(true);
          const [vanish, setVanish] = useState(false);

          return (
               <div className="faqItem" style={{height: showAnswer? "120px":"40px"}}>
                    <div className="faqItemQuestion" onClick={()=>{
                         setShowAnswer(!showAnswer);
                         setTimeout(()=>{
                              setVanish(!vanish);
                         },300)
                    }}>
                         <span>{<ExpandIcon className='expandIcon' style={{color:!showAnswer?"":"var(--evercare-darkblue)"}}/>}</span>
                         {question}
                    </div>
                    <div className={vanish ? "vanish":"faqItemAnswer"} style={{height: showAnswer?"80px":"40px", top: showAnswer? "40px":"0px"}}>
                         {answer}
                    </div>
               </div>
          )
     }




  return (
    <div className='faq'>
     <TitleBar svg={<FAQIcon/>} txt="Frequently Asked Questions" color="#001f3f" />
     {
          faqs.map((item,index) => (
               <FaqItem key={index} {...item}/>
          ))
     }
    </div>
  )
}

export default Faq