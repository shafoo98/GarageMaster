'use client'

import React, { useState } from 'react'

import { MdDashboard, MdInventory } from 'react-icons/md'
import { FaFileInvoiceDollar, FaPeopleCarry } from 'react-icons/fa'
import { IoIosPeople, IoMdSettings } from 'react-icons/io'
import { AiOutlineClose, AiOutlineLogout, AiOutlineMenu } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

import Logo from '../public/Garage Master Logo.png'
import LightIcon from '../public/Light_Icon.svg'
import DarkIcon from '../public/Dark_Icon.svg'

import NavLink from './(Navbar)/NavLink'
import Image from 'next/image'
import Link from 'next/link'

const LeftNavbarList = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [theme, toggleTheme] = useState(true)

  return (
    <>
      <div className='min-h-screen w-[22rem] shadow-2xl hidden md:block'>
        {/* <Link href={'/'}>
          <Image src={Logo} alt='Garage Master Logo' />
        </Link> */}
        <div>
          <h1 className='text-2xl my-10 ms-10'>Garage Master</h1>
        </div>
        <ul className='bg-white mx-5 px-4 pt-5 flex flex-col gap-y-[4.5rem]'>
          <NavLink
            title='Dashboard'
            icon={<MdDashboard size={25} />}
            href='/'
            extraStyles='text-xl'
          />
          <NavLink
            title='Orders'
            icon={<FaPeopleCarry size={25} />}
            href='/orders'
            extraStyles='text-xl'
          />
          <NavLink
            title='Inventory'
            icon={<MdInventory size={25} />}
            href='/inventory'
            extraStyles='text-xl'
          />
          <NavLink
            title='Invoices'
            icon={<FaFileInvoiceDollar size={25} />}
            href='/invoices'
            extraStyles='text-xl'
          />
          <NavLink
            title='Customers'
            icon={<IoIosPeople size={25} />}
            href='/customers'
            extraStyles='text-xl'
          />
          <NavLink
            title='Settings'
            icon={<IoMdSettings size={25} />}
            href='/settings'
            extraStyles='text-xl'
          />
        </ul>
      </div>
      {/* Mobile Navbar */}
      <div
        className={`w-full flex-col shadow-xl md:hidden ${
          isMenuOpen ? 'flex bg-[#C5C5C5C5]' : 'flex'
        }`}
      >
        {isMenuOpen ? (
          <>
            <div className='w-60 bg-white min-h-screen ease-linear duration-300'>
              <AiOutlineClose
                className='ms-auto my-5 me-5'
                onClick={() => setIsMenuOpen(false)}
              />
              <Link href={'/'}>
                <Image src={Logo} alt='Garage Master Logo' width={200} />
              </Link>
              <ul className='px-10 pt-5 flex flex-col gap-10'>
                <NavLink
                  title='Dashboard'
                  icon={<MdDashboard size={20} />}
                  href='/'
                  extraStyles='text-sm'
                />
                <NavLink
                  title='Orders'
                  icon={<FaPeopleCarry size={20} />}
                  href='/orders'
                  extraStyles='text-sm'
                />
                <NavLink
                  title='Inventory'
                  icon={<MdInventory size={20} />}
                  href='/inventory'
                  extraStyles='text-sm'
                />
                <NavLink
                  title='Invoices'
                  icon={<FaFileInvoiceDollar size={20} />}
                  href='/invoices'
                  extraStyles='text-sm'
                />
                <NavLink
                  title='Customers'
                  icon={<IoIosPeople size={20} />}
                  href='/customers'
                  extraStyles='text-sm'
                />
                <NavLink
                  title='Settings'
                  icon={<IoMdSettings size={20} />}
                  href='/settings'
                  extraStyles='text-sm'
                />
                <NavLink
                  title='Profile'
                  icon={<CgProfile size={20} />}
                  href='/profile'
                  extraStyles='text-sm'
                />
                <li>
                  <span className='w-full h-5 flex items-center gap-x-4 text-sm font-light text-[#8e8e8e]'>
                    <AiOutlineLogout size={20} />
                    Logout
                  </span>
                </li>
                <li>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input
                      type='checkbox'
                      value=''
                      className='sr-only peer'
                      onChange={() => toggleTheme(!theme)}
                    />
                    <div className="w-11 h-6 bg-gray-50 peer-focus:outline-none rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                    <span className='ml-3 text-sm font-medium text-gray-300 dark:text-gray-900'>
                      {theme === true ? (
                        <Image
                          src={LightIcon}
                          alt='Light Icon'
                          className='opacity-50'
                        />
                      ) : (
                        <Image src={DarkIcon} alt='Dark Icon' />
                      )}
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className='flex items-center flex-row-reverse w-full ease-out duration-300 bg-white'>
            <AiOutlineMenu
              className='ms-auto my-5 me-5'
              onClick={() => setIsMenuOpen(true)}
              size={25}
            />
            <Link href={'/'}>
              <Image src={Logo} alt='Garage Master Logo' width={150} />
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default LeftNavbarList
