import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    // h is for ic, max is to lock them , mx-auto is for centering
    <div className="flex justify-between items-center px-4 h-24 max-w-[1240px] mx-auto ">
      {/* So the w-full here, is for the h to push the links to left */}
      <h1 className="w-full text-3xl font-bold text-main-color relative z-20 ">REACT.</h1>

      <ul className="hidden md:flex">
        <li className=" cursor-pointer duration-200 hover:scale-110 p-4">Home</li>
        <li className=" cursor-pointer duration-200 hover:scale-110 p-4">Contact</li>
        <li className=" cursor-pointer duration-200 hover:scale-110 p-4">About</li>
        <li className=" cursor-pointer duration-200 hover:scale-110 p-4">Company</li>
        <li className=" cursor-pointer duration-200 hover:scale-110 p-4">Resources</li>
      </ul>
      <di className=" block md:hidden">
      {open ? <IoClose className=" cursor-pointer hover:scale-125 duration-150" size={30} onClick={() => setOpen(!open)} /> : <MdOutlineMenu className=" cursor-pointer hover:scale-125 duration-150" size={30} onClick={() => setOpen(!open)} />}
      </di>
      {/* You add the ease on one of them only */}
      <div className={open ? 'fixed md:hidden left-0 top-0 w-[60%] h-full  bg-black/15 duration-500 ease-in-out' : 'fixed md:hidden w-[60%] h-full top-0 left-[-100%] '}>
        <ul className=" pt-24 uppercase  ">
          <li className=" border-b-[.3px] border-gray-400 p-4">Home</li>
          <li className=" border-b-[.3px] border-gray-400 p-4">Contact</li>
          <li className=" border-b-[.3px] border-gray-400 p-4">About</li>
          <li className=" border-b-[.3px] border-gray-400 p-4">Company</li>
          <li className=" border-b-[.3px] border-gray-400 p-4">Resources</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
