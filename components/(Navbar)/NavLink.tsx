'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type PropTypes = {
  title: string
  icon: React.ReactNode
  href: string
  extraStyles?: string
}

const NavLink = ({ title, icon, href, extraStyles }: PropTypes) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link href={href} className='w-full'>
      <li
        className={`w-full flex items-center gap-x-5 ${
          isActive ? 'font-extrabold bg-blue-50' : 'font-light text-[#8e8e8e]'
        } ${extraStyles}`}
      >
        {icon}
        {title}
      </li>
    </Link>
  )
}

export default NavLink
