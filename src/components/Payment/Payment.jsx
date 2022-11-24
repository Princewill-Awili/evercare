import './payment.css'
import TitleBar from '../TitleBar/TitleBar'
import {FaListAlt as PaymentIcon} from 'react-icons/fa'



const Payment = () => {
  return (
    <div className='payment'>
     <TitleBar svg={<PaymentIcon/>} txt="Payment History" color="#f39c12"/>
    </div>
  )
}

export default Payment