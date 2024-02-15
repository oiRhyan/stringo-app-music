import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import banner from '@/app/images/header2.jpg'
import Link from 'next/link'
import Card from './Card'
import Script from 'next/script'
import { motion } from 'framer-motion'

type Props = {
    token: string
}
const Main = ({ token }: Props) => {

    const [artist, setArtist] = useState<any[]>([]);

    useEffect(() => {
        const searchArtists = async () => {
            if (token) {
                const artistParamter = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                }
                try {
                    const response = await fetch('https://api.spotify.com/v1/artists?ids=2YZyLoL8N0Wb9xBt1NhZWg%2C2qAwMsiIjTzlmfAkXKvhVA%2C4MCBfE4596Uoi2O4DtmEMz%2C6l3HvQ5sa6mXTsMTB19rO5%2C2P5sC9cVZDToPxyomzF1UH', artistParamter);

                    if (response.ok) {
                        const data = await response.json();
                        const artistas = data.artists;
                        setArtist(artistas);
                    } else {
                        console.error('Erro na requisição:', response.statusText);
                    }
                } catch (error) {
                    console.error('Erro na requisição:', error);
                }
            } else {
                console.log('Erro ao obter o token de acesso');
            }
        }

        searchArtists();
    }, [token]);
    
    return (
        <motion.div className='flex flex-col flex-grow ml-2 w-[100%] z-10 justify-start' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Script src="https://open.spotify.com/embed/iframe-api/v1" async />
            <h2 className='text-white font-bold text-xl'> Trending Songs </h2>
            <div className='flex item-center p-2 w-full justify-center'>
                <Image src={banner} alt={'banner'} className='flex rounded-2xl relative justify-center items-center w-full' height={700} width={700} />
            </div>
            <h2 className='text-white font-bold text-xl'> Top Artist  </h2>
            <div className='flex gap-5 justify-center'>
                {
                    artist.map((artist: any) => (
                        <Link href={`artists/${artist.id}`} key={artist.id}>
                            <Card name={artist.name} image={artist.images[0].url} />
                        </Link>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Main