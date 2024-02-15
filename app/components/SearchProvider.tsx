import React from 'react'
import styles from '@/app/styles/motion.module.css'
import {motion} from 'framer-motion'

type Props = {
    music_name: string,
    background: string,
}
const SearchProvider = ({music_name, background}: Props) => {
    return (
        <motion.div className='justify-start' initial={{ opacity: 0,  y: 20}} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <div className={`block h-[120px] w-[110px] p-4 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`} style={{backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    </div>
                    <h3 className='text-white text-nowrap py-1'>{music_name}</h3> 
        </motion.div>
    )
}

export default SearchProvider