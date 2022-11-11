import  './menu.css'
import {FaListAlt as PaymentIcon,FaUserCircle as UserIcon, FaHistory as HistoryIcon, FaUserMd as ContactIcon, FaQuestionCircle as FAQIcon} from 'react-icons/fa'
import {HiBeaker as DiagnosticsIcon} from 'react-icons/hi'
import {GiFirstAidKit as AppointmentIcon, GiReturnArrow as FeedbackIcon} from 'react-icons/gi'
import {BsUmbrellaFill as PasswordIcon} from 'react-icons/bs'

import MenuTabs from '../MenuTabs/MenuTabs'
import { useContext, useEffect, useState } from 'react'
import { states } from '../../utils/context'



const Menu = () => {



  const {user} = useContext(states);
 

  return (
    <div className='menu'>
      <div className="menuTop">
        {user.avatar ? (<img className='bigAvatar' src={user.avatar} alt="bigAvatar"/>) : (<UserIcon className='profilePic'/>)}
        <div className="userGenInfo">

          <span className="fullName info">
            Full Name:
            <span className='userVals'>{` ${user.title} ${user.firstName} ${user.lastName}`}</span>
          </span>

          <span className="email info">
            Email:
            <span className='userVals'>{` ${user.email}`}</span>
          </span>

          <span className="telNum info">
            Telephone:
            <span className='userVals'>{` ${user.phone}`}</span>
          </span>

          <span className="huid info">
            Hospital UID:
            <span className='userVals'>{` ${user.huid}`}</span>
          </span>
          <span className="age info">
            Age: 
            <span className='userVals'>{` ${user.age} Years`}</span>
          </span>

        </div>
        <div className="userMedInfo">
          <span className="height info">
            Height:
            <span className='userVals'>{` ${user.vitals.height} cm`}</span> 
          </span>

          <span className="weight info">
            Weight: 
            <span className='userVals'>{` ${user.vitals.weight} kg`}</span>
          </span>
          <span className="bloodPressure info">
            BP (Last Reading):
            <span className='userVals'>{` ${user.vitals.bp} mmHg`}</span>
          </span>
          <span className="bloodGroup info">
            Blood Group:
            <span className='userVals'>{` ${user.vitals.blood_group}`}</span>
          </span>
          <span className="genotype info">
            Genotype:
            <span className='userVals'>{` ${user.vitals.genotype}`}</span>
          </span>
          
        </div>
      </div>

      <div className="menuBottom">
        <MenuTabs svg={<HistoryIcon/>} bg="#00c0ef" textA="Visit" textB="History"/>
        <MenuTabs svg={<DiagnosticsIcon/>} bg="#00a65a" textA="Diagnostics" textB="History"/>
        <MenuTabs svg={<AppointmentIcon/>} bg="#dd4b39" textA="Appointment" textB="Request"/>
        <MenuTabs svg={<ContactIcon/>} bg="#605ca8" textA="Contact" textB="Us"/>
        <MenuTabs svg={<FeedbackIcon/>} bg="#39cccc" textA="Feedback" textB=""/>
        <MenuTabs svg={<FAQIcon/>} bg="#001f3f" textA="FAQ" textB=""/>
        <MenuTabs svg={<PasswordIcon/>} bg="#d81b60" textA="Change" textB="Password"/>
        <MenuTabs svg={<PaymentIcon/>} bg="#f39c12" textA="Payment" textB="History"/>

      </div>
    </div>
  )
}

export default Menu