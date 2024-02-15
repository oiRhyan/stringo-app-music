import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoCaretBackCircle } from 'react-icons/io5';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
    playlistid: string;
}

interface Playlist {
    name: string;
    description: string;
    followers: {
        total: number;
    };
    images: {
        url: string;
    }[];
}

const PlayListAcess = ({ playlistid }: Props) => {
    const [token, setToken] = useState<string>('');
    const [playlist, setPlaylist] = useState<Playlist | null>(null);

    useEffect(() => {
        const client_id = '0c255169738f4ca7ba125fa1b269a4ff';
        const client_secret = 'b5153c414fc7460babb61af0cd3f925b';

        const authParam = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret,
        };

        fetch('https://accounts.spotify.com/api/token', authParam)
            .then((res) => res.json())
            .then((data) => {
                setToken(data.access_token);
            })
            .catch((error) => console.log('Erro ao obter token:', error));
    }, []);

    useEffect(() => {
        const getPlaylist = async () => {
            if (token) {
                const artistParamter = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token,
                    },
                };
                try {
                    const response = await fetch('https://api.spotify.com/v1/playlists/' + playlistid, artistParamter);
                    if (response.ok) {
                        const data = await response.json();
                        setPlaylist(data);
                    } else {
                        console.error('Erro ao obter a playlist:', response.statusText);
                    }
                } catch (error) {
                    console.error('Erro ao obter a playlist:', error);
                }
            } else {
                console.log('Erro ao obter os dados');
            }
        };

        getPlaylist();
    }, [token, playlistid]);

    if (!playlist) {
        return <div>Carregando...</div>;
    }

    return (
        <motion.div className='flex flex-col flex-grow ml-2 w-[750px] z-10 justify-start' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Link href={'/playlist'} className='text-white text-4xl'>
                <IoCaretBackCircle />
            </Link>
            <div className='flex justify-start p-4'>
                <Image className='w-[100px] h-[100px] rounded-lg' src={playlist.images && playlist.images.length > 0 ? playlist.images[0].url : ''} alt='Capa' width={100} height={100} />
                <div className='flex flex-col '>
                    <h1 className='text-white text-3xl ml-4'>{playlist.name}</h1>
                    <h2 className='text-white text-2xl ml-4 py-1'> {playlist.description}</h2>
                </div>
            </div>
            <div className='flex justify-start'>
                <div className='flex flex-col h-[352px] w-[100%]'>
                    <iframe
                        src={`https://open.spotify.com/embed/playlist/${playlistid}`}
                        height="352"
                        frameBorder="0"
                        allow="encrypted-media"
                        title="Playlist"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </motion.div>
    );
}

export default PlayListAcess;
