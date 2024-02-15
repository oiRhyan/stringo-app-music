'use client'
import React from 'react'
import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { FaRegUserCircle } from "react-icons/fa";
import Image from 'next/image';

const Session = () => {
    
    const {data : session} = useSession({required : true})
    console.log(session)

    return (
        <div>
            {
                session && (
                    <div className='flex m-auto items-center justify-center py-3 rounded-xl mt-8' style={{backgroundColor: 'rgba(18, 18, 18, 0.4)'}}>
                        <div className='w-[70px] h-[70px] rounded-[50%] overflow-hidden items-center'>
                            <Image src={session.user?.image!} alt="profile" className='w-full h-full bg-cover items-center' height={70} width={70} />
                        </div>
                        <div className='flex flex-col ml-4'>
                            <h3 className='text-white text-[10px]'> Welcome! </h3>
                            <h1 className='text-white text-2xl'>{session.user?.name}</h1>
                            <Link href={'/login'}>
                                <button className='bg-[#FFFF] text-black font-bold text-sm py-1 px-4 rounded mt-1' onClick={() => signOut()}> Log-Out </button>
                            </Link>
                        </div>
                    </div>
                )
            }
            {
                !session && (
                    <div className='flex m-auto items-center justify-center py-3 rounded-xl mt-8' style={{backgroundColor: 'rgba(18, 18, 18, 0.4)'}}>
                        <div className='w-[70px] h-[70px] rounded-[50%] overflow-hidden items-center'>
                                <FaRegUserCircle className='w-full h-full bg-cover items-center' />
                        </div>
                        <div className='flex flex-col ml-4'>
                            <h3 className='text-white text-[10px]'> Welcome! </h3>
                            <h1 className='text-white text-2xl'> User </h1>
                            <Link href={'/login'}>
                                <button className='bg-[#FFFF] text-black font-bold text-sm py-1 px-4 rounded mt-1' onClick={() => signIn()}> Login </button>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Session