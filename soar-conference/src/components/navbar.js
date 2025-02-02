'use client'
import React from "react"
import Link from "next/link"
import classNames from "classnames"
import { usePathname } from 'next/navigation'


export function Navbar() {
  const [isToggled, setToggle] = React.useState(false)
  const pathname = usePathname()

  const handleToggle = () => {
    setToggle(!isToggled)

  }
  return(

    <nav className="bg-black border-2 border-accent_yellow">
          <div className="max-w-screen-xl grid grid-cols-2 md:grid-cols-3 grid-row-2 md:grid-rows-1 items-center justify-between mx-auto p-4">
          <Link href="/" className="min-w-fit ">
              {/*<img src="soar_logo.png" className="h-16"/> */}
              <span className="font-Jersey10 text-3xl whitespace-nowrap bg-gradient-to-r from-accent_blue to-accent_purple text-transparent bg-clip-text">SOAR Conference </span>

          </Link>
          <div className="flex md:order-2 self-center place-self-center md:ms-auto md:me-0 g">
              <button type="button" class="text-white text-2xl bg-gradient-to-r from-accent_blue to-accent_purple focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply Now!</button>
              <button data-collapse-toggle="navbar-sticky" type="button" onClick={handleToggle} className="inline-flex items-center ms-5 me-0 p-2 my-auto w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
          </div>
          <div className={classNames(
            "flex justify-center items-center w-full md:flex md:w-fit mx-auto col-span-2 md:col-span-1",
            !isToggled &&
              'hidden',
            isToggled &&
              ''
            )}
             id="navbar-sticky">
            <ul className="flex flex-col justify-center self-center md:p-0 mt-4 font-medium rounded-lg md:flex-row md:mt-0 md:border-0 w-full ">
              <li>
                <Link href="/" className={classNames("nav-element home", pathname =="/" ?'active':"")}>Home</Link>
              </li>
              <li>
                <Link href="/about" className={classNames("nav-element about", pathname == "/about"?'active':"")}>About</Link>
              </li>
              <li>
                <Link href="/contact" className={classNames("nav-element contact", pathname == "/contact" ? 'active':"")}>Contact</Link>
              </li>
            </ul>
          </div>
          </div>
    </nav>
  )
}