import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion'
import Image from 'next/image';

type Props = {};

const Podcasts = (props: Props) => {

    const [token, setToken] = useState<string>('');
    const [podcasts, setPodcasts] = useState<any[]>([]);
    const [shows, setShows] = useState<any>();

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
                    const response = await fetch('https://api.spotify.com/v1/browse/categories/podcasts/playlists?limit=30', artistParamter);
                    const res = await fetch('https://api.spotify.com/v1/shows?ids=1GLSDdk9CDEwziGNIlnb8a%2C+6wqBtC9OMq2mLvhDjZbqVM%2C+4izBBd43SGo5U1kcMVg701%2C+vMr66UKfMIgTEDhMxA%2C+4gkKyFdZzkv1eDnlTVrguk', artistParamter);
                    const data = await response.json();
                    const otherdata = await res.json();
                    console.log(data);
                    console.log(otherdata);
                    setPodcasts(data.playlists.items);
                    setShows(otherdata.shows);
                } catch (error) {
                    console.log(error);
                }
            } else {
                console.log('Erro ao obter os dados');
            }
        };

        getShows();
    }, [token]);
    
    console.log(podcasts)
    console.log(shows)

    return (
        <div className="flex flex-col flex-grow ml-2 w-[750px] z-10 justify- h-[500px]">
            <h1 className="text-white text-2xl font-bold p-2"> Podcasts </h1>
            <div className='flex grid grid-cols-5 gap-2 ml-6'>
                {podcasts && podcasts.map((categorie: any) => (
                    <motion.div key={categorie.id} initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0}}>
                        <div>
                            <Image src={categorie.images[0].url} title='icon' className='h-[80px] rounded-xl' alt='icon' height={80} width={80}/>
                            <h1 className='text-white text-xs py-2'> {categorie.name} </h1>
                        </div>  
                    </motion.div>
                ))}
                {/* Mapeando os shows */}
                {shows && shows.map((qui: any, index: any) => (
                    <motion.div key={index} initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0}}>
                        {qui && qui.images && qui.images.length > 0 &&
                            <div key={qui.id}>
                                <Image src={qui.images[0].url} title='icon' className='h-[80px] rounded-xl' alt='icon' height={80} width={80}/>
                                <h1 className='text-white text-xs py-2'> {qui.name} </h1>
                            </div>
                        }
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Podcasts;