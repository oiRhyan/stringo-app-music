import React from 'react'
import styles from '@/app/styles/motion.module.css'

type Props = {
    music_name: string,
    background: string,
}
const SearchProvider = ({music_name, background}: Props) => {
    return (
        <div className='justify-start'>
                    <div className={`block h-[120px] w-[110px] p-4 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`} style={{backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                        </div>
                    <h3 className='text-white text-nowrap py-1'>{music_name}</h3> 
        </div>
    )
}

export default SearchProvider