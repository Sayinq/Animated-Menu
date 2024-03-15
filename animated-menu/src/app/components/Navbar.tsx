'use client'
import React, { useState } from 'react'
import { Squeeze as Hamburger } from 'hamburger-react'

//Component
import Menu from './Menu'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 flex justify-center items-center w-screen h-[75px] p-8">
            <nav className="flex justify-start items-center w-full h-full px-8">
                <div className="w-[50px] h-[50px] z-[999]">
                    <Hamburger toggled={isOpen} toggle={setOpen} color="#FFFFFF" />
                </div>
                {isOpen && <Menu isOpen={isOpen} />}
            </nav>
        </header>
    )
}

export default Navbar