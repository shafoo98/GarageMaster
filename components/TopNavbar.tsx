'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import { CgProfile } from 'react-icons/cg'
import { AiOutlineLogout } from 'react-icons/ai'

import LightIcon from '../public/Light_Icon.svg'
import DarkIcon from '../public/Dark_Icon.svg'
import Link from 'next/link'

const TopNavbar = () => {
  const [theme, toggleTheme] = useState(true)

  return (
    <div className='hidden md:flex h-[8.375rem] justify-end border-b-[1px] border-b-[#e5e5e59F]'>
      <ul className='flex items-center justify-center gap-10 me-10'>
        <li className='cursor-pointer text-black'>
          <Link
            href={'/profile'}
            className='w-full h-5 flex items-center gap-x-4'
          >
            <CgProfile size={20} />
            Profile
          </Link>
        </li>{' '}
        <li className='cursor-pointer text-black'>
          <span className='w-full h-5 flex items-center gap-x-4'>
            <AiOutlineLogout size={20} />
            Logout
          </span>
        </li>
        {/* Language Change Button */}
        {/* Toggle Switch */}
        <li>
          <label className='flex cursor-pointer select-none items-center'>
            <div className='relative'>
              <input
                type='checkbox'
                checked={theme}
                onChange={() => toggleTheme(!theme)}
                className='sr-only'
                placeholder=''
              />
              <div
                className={`box block h-8 w-16 rounded-full ${
                  theme ? 'bg-black' : 'bg-yellow-500'
                }`}
              ></div>
              <div
                className={`absolute left-2 top-1 flex h-6 w-6 items-center justify-center rounded-full ${
                  theme ? 'bg-white ' : 'bg-yellow-500'
                } transition ${theme ? 'translate-x-full' : ''}`}
              >
                <Image src={theme ? DarkIcon : LightIcon} alt='Icon' />
              </div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  )
}

export default TopNavbar
