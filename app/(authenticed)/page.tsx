"use client";
import { useSession } from "next-auth/react";
import styles from '@/app/styles/motion.module.css';
import Session from "../components/session";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Played from "../components/Played";



export default function Home() {
  const { data: session, status } = useSession();
  console.log("Status: ", status)
  
  const musics = [
    {
        name: 'Song 1',
        artist: 'Artist',
    },
    {
        name: 'Song 2',
        artist: 'Artist',
    },
    {
        name: 'Song 3',
        artist: 'Artist',
    },
    {
        name: 'Caminhando',
        artist: 'Caminhando',
    },
    {
        name: 'Caminhando',
        artist: 'Caminhando',
    },
    {
      name: 'Caminhando',
      artist: 'Caminhando',
    }
]

  return (
    <main className="flex space-x-2">
        <video autoPlay muted loop className={styles.video}	>
                <source src={'video/motion.mp4'} type="video/mp4"/>
        </video>
        <div className="flex flex-col items-center z-10 h-full">
          <Sidebar />
          <Session />
        </div>
        <div className="flex p-4">
          <Main/>
        </div>
        <div className="flex-1 flex-col p-4 text-center">
            <h1 className="text-white font-bold text-xl text-left"> Tags </h1>
            <div className="flex w-full flex-wrap py-2">
              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Rock</button>
              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Alternative</button>
              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Pop</button>
              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Rap</button>
              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Jazz</button>
              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Acoustic</button>
              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Classic</button>
              <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">MPB</button>
            </div>
            <div className="z-10 overflow-auto h-[210px]">
              {
                musics.map((music, index) => (
                      <div key={index} className="z-10 overflow-auto">
                      <Played music={music.name} artist={music.artist} />
                      </div>
                ))
              }
            </div>
            <div className="block w-[160px] h-[180px] p-10 mt-1 justify-center item-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col m-auto">


            </div>
        </div>
    </main>
  )
}
