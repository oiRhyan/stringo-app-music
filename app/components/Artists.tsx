import React, { useEffect, useState } from 'react';
import { IoCaretBackCircle } from "react-icons/io5";
import Link from 'next/link';
import AlbunsCard from './AlbunsCard';
import styles from '@/app/styles/motion.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image';

type Props = {
    artistID: any;
}

const Artists = ({ artistID }: Props) => {

    const [artist, setArtist] = useState<any[]>([]);
    const [album, setAlbum] = useState<any[]>([]);
    const [artistRecomended, setArtistRecomended] = useState<any[]>([]);
    const [token, setToken] = useState<string>('');

    const client_id = '0c255169738f4ca7ba125fa1b269a4ff'
    const client_secret = 'b5153c414fc7460babb61af0cd3f925b'

    useEffect(() => {
        const authParam = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret
        };
        fetch('https://accounts.spotify.com/api/token', authParam)
            .then(res => res.json())
            .then(data => {
                setToken(data.access_token);
                searchArtist(data.access_token);
            })
            .catch(error => console.log('Erro ao obter token:', error));
    }, [])

    const searchArtist = async (token: string) => {
        try {
            const artistParamter = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            }
            const response = await fetch('https://api.spotify.com/v1/artists/' + artistID, artistParamter);
            const register = await fetch(`https://api.spotify.com/v1/artists/${artistID}/albums`, artistParamter);
            const recomend = await fetch(`https://api.spotify.com/v1/artists/${artistID}/related-artists`, artistParamter);
            if (response.ok && register.ok && recomend.ok) {
                const data = await response.json();
                const albumlist = await register.json();
                const returnartist = await recomend.json();
                setArtist([data]);
                setAlbum(albumlist.items);
                setArtistRecomended(returnartist.artists);
                console.log(data);
            } else {
                console.error('Erro ao buscar artista:', response.statusText);
            }
        } catch (error) {
            console.log('Erro ao obter Artista', error);
        }
    }
    console.log(album);
    console.log(artistRecomended);
    return (
        <div className='flex flex-col flex-grow ml-2 w-[750px] z-10 justify-start'>
            <Link href={'/'} className='text-white text-4xl'>
                <IoCaretBackCircle />
            </Link>
            <div>
                {
                    artist.map((user: any) => (
                        <div key={user.id} className='py-2 flex-col'>
                            <motion.div className='flex justify-start' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                <Image src={user.images[0].url} alt="profile" className='w-32 h-32 rounded-full object-cover align-top items-start' height={140} width={140}/>
                                <div>
                                    <h1 className='text-white text-4xl font-bold mt-[20px] ml-4'>{user.name}</h1>
                                    <div>
                                        <div className='flex gap-2'>
                                            <h2 className='justify-end text-white text-2xl font-bold ml-4'> Seguidores: {user.followers.total} </h2>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <h1 className='text-white text-2xl font-bold'> Albuns </h1>
                            <motion.div className={`flex overflow-x-scroll w-full gap-6 py-2 ${styles.scrollbar}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                {
                                    album.map((album: any) => (
                                        <motion.div key={album.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} >
                                            <AlbunsCard name={album.name} image={album.images[0].url} />
                                        </motion.div>
                                    ))
                                }
                            </motion.div>
                            <h1 className='text-white text-1xl font-bold py-2'> Related Artists </h1>
                            <motion.div className='flex w-[780px]' initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                                {artistRecomended.slice(0, 11).map((user: any, index: number) => (
                                    <Link href={`/artists/${user.id}`} key={user.id}>
                                        <div className='flex justify-between ml-4'>
                                            <Image src={user.images[0].url} alt="profile" className='w-[50px] h-[50px] rounded-full object-cover align-top items-start' height={50} width={50} />
                                        </div>
                                    </Link>
                                ))}
                            </motion.div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Artists;
