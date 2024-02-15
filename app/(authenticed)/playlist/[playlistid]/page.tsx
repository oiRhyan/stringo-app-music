'use client';
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import logo from '@/app/images/stringo-logo-platform.png';
import styles from '@/app/styles/motion.module.css';
import Session from "@/app/components/session";
import Sidebar from "@/app/components/Sidebar";
import Main from "@/app/components/Main";
import Played from "@/app/components/Played";
import Player from "@/app/components/Player";
import Image from 'next/image'
import SearchProvider from "@/app/components/SearchProvider";
import Utopia from '@/app/images/utopia.jpg'
import Artists from "@/app/components/Artists";
import { RecentPlayed } from "@/app/actions/recentPlayed";
import { addToRecentPlayed } from "@/app/actions/recentPlayed";
import Discover from "@/app/components/Discover";
import PlayListAcess from "@/app/components/PlayListAcess";

type Props = {
    params : {
        playlistid: string
    }
}

interface Music {
    id?: any,
    name?: any,
    album: {
        images?: any,
        artists? :any
    }
  }

const Page = ({params}: Props) => {
    
    const { data: session, status } = useSession();
    console.log("Status: ", status)
    const [token, setToken] = useState('');
    const client_id = '0c255169738f4ca7ba125fa1b269a4ff'
    const client_secret = 'b5153c414fc7460babb61af0cd3f925b'

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

    const [isSearching, setIsSearching] = useState(false);
    const [music, setMusic] = useState([]);
    const [song, setSong] = useState('');
    const [recentPlayed, setRecentPlayed] = useState<Music[]>([]);

    const setSearching = async (e:any) => {
        const { value } = e.target;
        setIsSearching(value !== '');
        console.log(value);
        if(value){
            try{
                const artistParamter = {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }
            var musicID = await fetch('https://api.spotify.com/v1/search?q=' + value + '&type=album', artistParamter).then(res => res.json()).then(data => setMusic(data.tracks.items));
            console.log(music);
            }catch(error){
                console.log('Erro ao obter Musica', error);
            }
        }
    }

    const AddMusic = (param : Music) => {
    setSong(param.id);
    if(song){
        console.log(song);
    }
    const updatedRecentPlayedItem = {
        name: param.name,
        id: param.id,
        album: param.album,
        artist: param.album?.artists?.[0]?.name
    };
    const updateRecentPlayed = [...recentPlayed, updatedRecentPlayedItem];
    console.log(updateRecentPlayed);
    setRecentPlayed(updateRecentPlayed);
    addToRecentPlayed(updatedRecentPlayedItem);
    }

    return (
        <main className="flex space-x-2">
        <video autoPlay muted loop className={styles.video}	>
                <source src={'video/motion.mp4'} type="video/mp4"/>
        </video>
        <div className="flex flex-col z-10 h-full">
          <Image src={logo} width={200} height={200} alt={'logo'} className="m-auto p-4" />
          <input type="text" name="text" className={styles.input} placeholder="Pesquise uma música" title="search" onChange={(e) => setSearching(e)} ></input>
          <Sidebar/>
          <Session />
        </div>
        <div className="flex-col z-20 p-4">
          {isSearching ? (
            <div className={`grid grid-cols-4 h-[500px] w-[775px] overflow-y-scroll overflow-x-hidden ${styles.scrollbar}`}>
              <h1 className='text-white text-2xl font-bold'> Results </h1>
            {
                music.map((music: Music) => (
                    <div className="grid grid-cols-8 p-2 justify-start items-start" key={music.id} onClick={() => AddMusic(music)}>
                        <SearchProvider music_name={music.name} background={music.album.images[0].url}/>
                    </div>  
                ))
            }
        </div>
          ): (
            <PlayListAcess playlistid={params.playlistid}/>
          )}      
          <Player musicID={song}/>     
        </div>
        <div className="flex-1 flex-col p-4 text-center">
            <h1 className="text-white font-bold text-xl text-left"> Tags </h1>
            <div className="flex w-full flex-wrap py-2">
              <button type="button" className="text-white bg-[#121212] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Rock</button>
              <button type="button" className="text-white bg-[#121212] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Alternative</button>
              <button type="button" className="text-white bg-[#121212] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Pop</button>
              <button type="button" className="text-white bg-[#121212] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Rap</button>
              <button type="button" className="text-white bg-[#121212] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Jazz</button>
              <button type="button" className="text-white bg-[#121212] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Acoustic</button>
              <button type="button" className="text-white bg-[#121212] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Classic</button>
              <button type="button" className="text-white bg-[#121212] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">MPB</button>
            </div>
            <div className={`absolute overflow-y-scroll h-[300px] w-[300px] ${styles.scrollbar}`}>
              <h1 className="text-white font-bold text-xl text-left"> Just Played </h1>
                {
                  RecentPlayed.map((artist, index) => (
                    <div key={index} className="z-20">
                        <Played music={artist.name} background={artist.album.images[0].url} artist={artist.album.artists[0].name}/>
                    </div>
                  ))
                  }
            </div>
            <Image src={Utopia} height={400} width={400} alt={'utopia'} className="mt-[315px] mr-[300px] rounded-2xl z-10 ml-auto" />
        </div>
    </main> 
    )
}

export default Page