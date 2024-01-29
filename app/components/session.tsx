'use client'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const Session = () => {
    
    const {data : session} = useSession({required : true})
    console.log(session)

    return (
        <div>
            {
                session && (
                    <div className='flex m-auto'>
                        <div className='w-[70px] h-[70px] rounded-[50%] overflow-hidden items-center'>
                            <img src={session.user?.image!} alt="profile" className='w-full h-full bg-cover items-center' />
                        </div>
                        <div className='flex flex-col ml-4'>
                            <h3 className='text-white text-[10px]'> Welcome! </h3>
                            <h1 className='text-white text-2xl'>{session.user?.name}</h1>
                            <Link href={'/login'}>
                                <button className='bg-[#121212] text-white font-bold text-sm py-1 px-4 rounded mt-1' onClick={() => signOut()}> Log-Out </button>
                            </Link>
                        </div>
                    </div>
                )
            }
            {
                !session && (
                    <p> Não Logado </p>
                )
            }
        </div>
    )
}

export default Session