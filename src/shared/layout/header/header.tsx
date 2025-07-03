import React from 'react'
import Image from 'next/image'
import navDesk from '@/assets/image/nav/header.svg'
import navMob from '@/assets/image/nav/header-mob.svg'

const HeaderContainer = () => {
  return (
    <div className='h-28'>
      <Image src={navDesk} alt='nav' draggable='false' className='hidden md:block w-full'/>
      <Image src={navMob} alt='nav' draggable='false' className='block md:hidden w-full'/>
    </div>
  )
}

export default HeaderContainer
