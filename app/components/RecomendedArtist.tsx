import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

type Props = {
    image: any
}

const RecomendedArtist = ({ image }: Props) => {
    return (
        <motion.div initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} exit={{opacity: 0}}>
            <Image src={image} alt="profile" className='w-full h-full bg-cover items-center h-[100px]' height={100} width={100}/>
        </motion.div>
    )
}

export default RecomendedArtist