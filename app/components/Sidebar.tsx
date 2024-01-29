'use client'
import React from 'react'
import Image from "next/image";
import logo from '@/app/images/stringo-logo-platform.png';
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
          <div className="p-6 flex flex-col m-auto z-10 gap-5">
          <Image src={logo} width={200} height={200} alt={'logo'} className="m-auto" />
          <input type="text" name="text" className={styles.input} placeholder="Pesquise uma música" title="search"></input>
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