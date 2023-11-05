'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import NavLink from './(Navbar)/NavLink'

import { CgProfile } from 'react-icons/cg'
import { AiOutlineLogout } from 'react-icons/ai'

import LightIcon from '../public/Light_Icon.svg'
import DarkIcon from '../public/Dark_Icon.svg'

const TopNavbar = () => {
  const [theme, toggleTheme] = useState(true)

  return (
    <div className='hidden md:flex h-16 justify-end shadow-md'>
      <ul className='flex items-center justify-center gap-10 me-10'>
        <NavLink
          title='Profile'
          icon={<CgProfile size={20} />}
          href='/profile'
          extraStyles='text-black'
        />
        <li className='cursor-pointer text-black'>
          <span className='w-full h-5 flex items-center gap-x-4'>
            <AiOutlineLogout size={20} />
            Logout
          </span>
        </li>
        {/* Language Change Button */}
        {/* Toggle Switch */}
      </ul>
    </div>
  )
}

export default TopNavbar
