import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    music: any,
    background: any,
    artist: any,
}

const Played = (props: Props) => {
    return (
        <div className='parent-div' style={{ maxHeight: '400px', overflowY: 'auto', overflowX: 'hidden' }}>
            <motion.div className='flex gap-2 py-2 justify-start z-20' initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>  
                <div className={`block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`} style={{backgroundImage: `url(${props.background})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-white text-base text-left'> {props.music} </h1>
                    <h3 className='text-white text-sm text-left'> {props.artist} </h3>
                </div>
            </motion.div>
        </div>
    )
}

export default Played;
