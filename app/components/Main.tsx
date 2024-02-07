'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import banner from '@/app/images/astroworld.jpg'
import Link from 'next/link'
import Card from './Card'
import Script from 'next/script'

type Props = {
    token: string
}
const Main = ({ token }: Props) => {

    const client_id = '0c255169738f4ca7ba125fa1b269a4ff'
    const client_secret = 'b5153c414fc7460babb61af0cd3f925b'

    const [artist, setArtist] = useState([]);

    const searchArtists = async () => {
        var artistParamter = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }
        try {
            const response = await fetch('https://api.spotify.com/v1/artists?ids=2YZyLoL8N0Wb9xBt1NhZWg%2C4V8LLVI7PbaPR0K2TGSxFF%2C7c0XG5cIJTrrAgEC3ULPiq%2C0iEtIxbK0KxaSlF7G42ZOp%2C2P5sC9cVZDToPxyomzF1UH', artistParamter);

            const data = await response.json();
            console.log(data);
            const artistas = data.artists;
            setArtist(artistas);
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    if (token) {
        searchArtists()
    } else {
        console.log('Erro ao obter o token de acesso')
    }
    
    return (
        <div className='flex flex-col flex-grow ml-2 w-[100%] z-10 justify-start'>
            <Script src="https://open.spotify.com/embed/iframe-api/v1" async />
            <h2 className='text-white font-bold text-xl'> Trending Songs </h2>
            <div className='flex item-center p-2 w-full justify-center'>
                <Image src={banner} alt={'banner'} className='flex rounded-2xl relative justify-center items-center w-full' height={250} />
            </div>
            <h2 className='text-white font-bold text-xl'> Top Artist  </h2>
            <div className='flex gap-5 justify-center'>
                {
                    artist && artist.map((artist: any) => (
                        <Link href={'/artist'}>
                        <Card key={artist.id} name={artist.name} image={artist.images[0].url} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Main

