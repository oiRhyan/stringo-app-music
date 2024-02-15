import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
type Props = {
    name: string,
    image: string
}
const Card = ({name, image} : Props) => {
    return (
        <motion.div className='py-2' initial={{ opacity: 0,  y: 20}} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <div className={`block w-32 h-[165px] p-2 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`} style={{backgroundColor:'rgba(18, 18, 18, 0.3)'}}>
                    <Image src={image} alt="icon" className="w-[110px] h-[110px] rounded-full object-cover align-top items-start" height={110} width={110} />
                    <h5 className="mt-30 text-left text-[15px] font-bold tracking-tight text-white text-nowrap py-2 dark:text-white text-bold">{name}</h5>
                </div>
        </motion.div>
    )
}

export default Card