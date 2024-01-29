"use client"
import React from 'react'
import styles from '@/app/(public)/login/login.module.css'
import Image from 'next/image'
import logo from '@/app/images/stringo-logo-platform.png'
import { FaSpotify } from "react-icons/fa";
import { signIn } from 'next-auth/react';
import Link from 'next/link'

const LoginPage = () => {

    return (
        <div className={styles.background}>
            <video autoPlay muted loop className={styles.video}	>
                <source src={'video/Loop.mp4'} type="video/mp4"/>
            </video>
            <div className={styles.login}>
                <Image className='m-auto'
                    src={logo}
                    width={400}
                    height={400}
                    alt={'logo'}
                />
                <h1 className='text-white text-2xl w-auto w-10 text-center'>
                    Olá! Seja bem-vindo(a) ao Stringo Music. Faça login com Spotify e aproveite uma variedade de músicas!
                </h1>
                <br/>
                <Link href={'/'}>
                    <button className={`bg-[#1DB954] text-white font-bold py-2 px-4 rounded w-44 flex justify-center gap-2 ${styles.button}`} type='button'
                    onClick={() => signIn('spotify')}
                    >
                        <FaSpotify className='text-5xl text-white'/>
                        Login com Spotify
                    </button>
                </Link>
                <br/>
                <h3 className='text-white'>
                    Criado por Rhyan Araujo Chaves @2024
                </h3>
            </div>
        </div>
    )
}

export default LoginPage