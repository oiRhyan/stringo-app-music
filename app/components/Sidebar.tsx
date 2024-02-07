'use client'
import React from 'react'
import Image from "next/image";
import { GoHomeFill } from "react-icons/go";
import { FaCompass } from "react-icons/fa";
import { RiPlayListFill } from "react-icons/ri";
import { FaMicrophoneAlt } from "react-icons/fa";
import { MdRadio } from "react-icons/md";
import { IoMusicalNotes } from "react-icons/io5";
import { BiUserVoice } from "react-icons/bi";
import styles from '@/app/styles/motion.module.css';



const Sidebar = () => {
    return (
          <div className="p-5 flex flex-col z-10 gap-5 justify-items-start">
          <h3 className="text-white text-sm">Dashboard</h3>
          <div className="flex w-full text-center items-center">
          <GoHomeFill className="text-white text-2xl"/>
          <h1 className="text-white font-sans font-medium ml-2 text-center"> Home </h1> 
          </div>
            <div className="flex w-full text-center items-center">
            <FaCompass className="text-white text-2xl"/>
            <h1 className="text-white font-sans font-medium ml-2 text-center"> Discover </h1> 
            </div>
            <div className="flex w-full text-center items-center">
            <RiPlayListFill className="text-white text-2xl"/>
            <h1 className="text-white font-sans font-medium ml-2 text-center"> Playlist </h1> 
            </div>
            <div className="flex w-full text-center items-center">
            <FaMicrophoneAlt className="text-white text-2xl"/>
            <h1 className="text-white font-sans font-medium ml-2 text-center"> Podcasts </h1> 
            </div>
            <div className="flex w-full text-center items-center">
            <MdRadio className="text-white text-2xl"/>
            <h1 className="text-white font-sans font-medium ml-2 text-center"> Radio </h1> 
            </div>
            <h3 className="text-white text-sm"> Library </h3>
            <div className="flex w-full text-center items-center">
            <IoMusicalNotes className="text-white text-2xl"/>
            <h1 className="text-white font-sans font-medium ml-2 text-center"> Songs </h1> 
            </div>
            <div className="flex w-full text-center items-center">
            <BiUserVoice className="text-white text-2xl"/>
            <h1 className="text-white font-sans font-medium ml-2 text-center"> Artist </h1> 
            </div>
        </div>
    )
}

export default Sidebar