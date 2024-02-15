import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion'
import Image from 'next/image';

type Props = {};

const Playlist = (props: Props) => {
    const [token, setToken] = useState<string>('');
    const [classes, setClasses] = useState<any[]>([])

    const client_id = '0c255169738f4ca7ba125fa1b269a4ff';
    const client_secret = 'b5153c414fc7460babb61af0cd3f925b';

    useEffect(() => {
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
        const getShows = async () => {
            if (token) {
                const artistParamter = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token,
                    },
                };
                try {
                    const response = await fetch('https://api.spotify.com/v1/browse/featured-playlists', artistParamter);
                    const data = await response.json();
                    setClasses(data.playlists.items);
                } catch (error) {
                    console.log(error);
                }
            } else {
                console.log('Erro ao obter os dados');
            }
        };

        getShows();
    }, [token]);
    
    console.log(classes);

    return (
        <div className="flex flex-col flex-grow ml-2 w-[750px] z-10 justify-start">
            <h1 className="text-white text-2xl font-bold p-2"> Top Playlists </h1>
            <div className='flex grid grid-cols-5 gap-2 ml-6'>
            {
                    classes && classes.map((categorie : any) => (
                        <motion.div key={categorie.id} initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0}}>
                            <Link href={`/playlist/${categorie.id}`}>
                                <div key={categorie.id}>
                                    <Image src={categorie.images[0].url} title='icon' className='h-[80px] rounded-xl' alt='icon' height={80} width={80}/>
                                    <h1 className='text-white text-xs py-2'> {categorie.name} </h1>
                                </div>
                            </Link>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
};

export default Playlist;
