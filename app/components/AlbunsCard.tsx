import React from 'react'

type Props = {
    name: any,
    image: any
}

const AlbunsCard = ({ name, image }: Props) => {
    return (
        <div className='grid'>
            <div className="block h-[90px] w-[90px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" style={{backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            </div>
            <h1 className="text-white text-wrap text-xs py-2">{name}</h1>
        </div>
    )
}

export default AlbunsCard