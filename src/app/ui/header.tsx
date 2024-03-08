"use client"
 
import * as React from "react"
import Image from "next/image"
import NavUser from "./nav-user"
import NavLinks from "./nav-links"

export default function Header() {
return (
  <nav className="flex items-center justify-between">
    <div className="flex items-center ml-2 mt-2">
    <Image alt="hola" width={50} src={'/favicon.ico'} height={50}/>
    </div>
    <NavLinks />
    
    

    <div className="mr-2 mt-2">
       <NavUser />
    </div>
  </nav>
   
)
}

  