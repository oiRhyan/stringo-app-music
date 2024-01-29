import React from 'react'
type Props = {
    name: string,
    image: string
}
const Card = ({name, image} : Props) => {
    return (
        <div className='py-2 '>
                <div className={`block w-32 h-[165px] p-2 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`} style={{backgroundColor:'rgba(18, 18, 18, 0.3)'}}>
                    <img src={image} alt="icon" className="w-[110px] h-[110px] rounded-full object-cover align-top items-start" />
                    <h5 className="mt-30 text-left text-[15px] font-bold tracking-tight text-white text-nowrap py-2 dark:text-white text-bold">{name}</h5>
                </div>
        </div>
    )
}

export default Card