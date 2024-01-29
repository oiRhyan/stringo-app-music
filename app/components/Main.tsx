'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import banner from '@/app/images/astroworld.jpg'
import Link from 'next/link'
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { TbPlayerSkipBackFilled } from "react-icons/tb";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import Card from './Card'

const Main = () => {
    
    const client_id = '0c255169738f4ca7ba125fa1b269a4ff'
    const client_secret = 'b5153c414fc7460babb61af0cd3f925b'

    const [token, setToken] = useState('');
    const [artist, setArtist] = useState([]);

    useEffect(() => {
        var authParam = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret
        };
        fetch('https://accounts.spotify.com/api/token', authParam)
        .then(res => res.json())
        .then(data => setToken(data.access_token))
    }, [])

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
    
            if (!response.ok) {
                throw new Error('Erro ao obter os artistas');
            }
            
            const data = await response.json();
            console.log(data);
            const artistas = data.artists;
            setArtist(artistas);
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    if(token){
        searchArtists()
    }else{
        console.log('Erro ao obter o token de acesso')
    }

    return (
        <div className='flex flex-col flex-grow ml-2 w-[100%] z-10 justify-start'>
            <h2 className='text-white font-bold text-xl'> Trending Songs </h2>
            <div className='flex item-center p-2 w-full justify-center'>
                <Image src={banner} alt={'banner'} className='flex rounded-2xl relative justify-center items-center w-full' height={250}/>
            </div>
            <h2 className='text-white font-bold text-xl'> Top Artist  </h2>
            <div className='flex gap-5 justify-center'>
            {
                artist && artist.map((artist: any) => (
                    <Card key={artist.id} name={artist.name} image={artist.images[0].url}/>
                ))
            }
            </div>
            <div className='flex item-center p-2 w-full justify-center'>
            <div className="block w-[500px] h-[100px] p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 justify-center item-center">
                <div className="bg-blue-600 h-2.5 mt-5 rounded-full w-[100%]"></div>
                <div className="flex justify-center items-center w-full gap-5 py-4">
                    <TbPlayerTrackPrevFilled className='text-2xl'/>
                    <TbPlayerSkipBackFilled className='text-2xl' />
                    <TbPlayerPlayFilled className='text-2xl' />
                    <TbPlayerSkipForwardFilled className='text-2xl' />
                    <TbPlayerTrackNextFilled className='text-2xl' />
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Main