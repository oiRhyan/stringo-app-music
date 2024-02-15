'use client'
import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    musicID?: string
}

const Player = ({ musicID }: Props) => {
    
    const defaultMusicID = musicID || '0PKJxo97zXT8oAwl2zFnPh';

    return (
        <motion.div className='flex-col justify-center items-center text-center m-auto gap-5 p-2 py-4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <iframe className="h-[100%] justify-center items-center text-center m-auto" height="100%" src={`https://open.spotify.com/embed/track/${defaultMusicID}?utm_source=generator&theme=0`} width="70%" allow="autoplay; clipboard-write; encrypted-media; fullscreen" loading="lazy"></iframe>
        </motion.div>
    )
}

export default Player