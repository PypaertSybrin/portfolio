'use client'
import { useState } from 'react'
import Navbar from '@/components/nav/Navbar'
import Sidebar from '@/components/nav/Sidebar'

const Navigation = ({active}: {active: number}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} active={active} />
      <Navbar isOpen={isOpen} toggle={toggle} active={active} />
    </>
  )
}

export default Navigation
