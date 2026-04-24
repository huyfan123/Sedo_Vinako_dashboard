import React from 'react'
import { Notification } from '../../ui/Button/notification'
import { Profile } from '../../ui/Button/profile'
import logo from '../../../assets/sedo_vinako_logo.png'

export const SedoHeader = () => {
  return (
    <div className='flex justify-between py-2 px-4 bg-white'>
      
      <div className='text-left flex gap-1 text-[#0068B3] leading-none font-bold'>
        <img src={logo} alt="sedo_vinako" className='w-10 h-w-10' />
        <div className='leading-5'>
          <p>SEDO</p>
          <p>VINAKO</p>
        </div>
      </div>
     
      <div className='flex gap-2'>
        <Notification />
        <Profile />
      </div>
    </div>
  )
}
