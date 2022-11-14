import './contact.css'
import TitleBar from '../TitleBar/TitleBar'
import {FaUserMd as ContactIcon} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact'>
     <TitleBar svg={<ContactIcon/>} txt="Contact Us" color="#605ca8"/>
    </div>
  )
}

export default Contact