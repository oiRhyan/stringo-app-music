import React from 'react'

type Props = {
    music: string,
    artist: string,
}

const Played = (props: Props) => {
    return (
        <div className='flex flex-col w-full z-10'>
            <div className='flex w-full gap-2 py-2'>  
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            </div>
        <div className='flex flex-col'>
            <h1 className='text-white text-xl text-left'> {props.music} </h1>
            <h3 className='text-white text-left'> {props.artist} </h3>
        </div>
    </div>
</div>
    )
}

export default Played