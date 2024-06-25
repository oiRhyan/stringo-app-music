'use client'
import React from 'react'
import Image from "next/image";
import { GoHomeFill } from "react-icons/go";
import { FaCompass } from "react-icons/fa";
import { RiPlayListFill } from "react-icons/ri";
import { FaMicrophoneAlt } from "react-icons/fa";
import { TbUserCode } from "react-icons/tb";
import { IoMusicalNotes } from "react-icons/io5";
import { BiUserVoice } from "react-icons/bi";
import Link from 'next/link';



const Sidebar = () => {
    return (
        <div className="p-5 flex flex-col z-10 gap-5 justify-items-start">
        <h3 className="text-white text-sm">Dashboard</h3>
            <Link href={'/'}>
                <div className="flex w-full text-center items-center">
                    <GoHomeFill className="text-white text-2xl"/>
                    <h1 className="text-white font-sans font-medium ml-2 text-center">
                    Home
                    </h1> 
                </div>
            </Link>
            <Link href={'/discover'}>
                <div className="flex w-full text-center items-center">
                    <FaCompass className="text-white text-2xl"/>
                    <h1 className="text-white font-sans font-medium ml-2 text-center"> Discover </h1> 
                </div>
            </Link>
            <Link href={'/playlist'}>
                <div className="flex w-full text-center items-center">
                    <RiPlayListFill className="text-white text-2xl"/>
                    <h1 className="text-white font-sans font-medium ml-2 text-center"> Playlist </h1> 
                </div>
            </Link>
            <Link href={'/podcast'}>
                <div className="flex w-full text-center items-center">
                    <FaMicrophoneAlt className="text-white text-2xl"/>
                    <h1 className="text-white font-sans font-medium ml-2 text-center"> Podcasts </h1> 
                </div>
            </Link>
            <h3 className="text-white text-sm"> Library </h3>
            <Link href={'/songs'}>
                <div className="flex w-full text-center items-center">
                    <IoMusicalNotes className="text-white text-2xl"/>
                <h1 className="text-white font-sans font-medium ml-2 text-center"> Songs </h1> 
            </div>
            </Link>
            <Link href={'https://rhyan-android-dev.vercel.app/pages/codes'} target='_blank'>
            <div className="flex w-full text-center items-center">
            <TbUserCode className="text-white text-2xl"/>
            <h1 className="text-white font-sans font-medium ml-2 text-center"> Creator </h1> 
            </div>
            </Link>
        </div>
    )
}

export default Sidebar
