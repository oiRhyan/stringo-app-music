'use client'
import React from 'react'

type Props = {
    musicID: any
}

const Player = ({ musicID }: Props) => {
    musicID = '0hZAwaGhANCzy84BJHtILG'
    return (
        <div className='flex-col justify-center items-center text-center m-auto gap-5 p-2 py-4'>
            <iframe className="h-[100%] justify-center items-center text-center m-auto" height="100%" src={`https://open.spotify.com/embed/track/${musicID}?utm_source=generator&theme=0`} width="70%" allow="autoplay; clipboard-write; encrypted-media; fullscreen" loading="lazy"></iframe>
        </div>
    )
}

export default Player