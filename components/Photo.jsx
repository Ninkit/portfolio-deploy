"use client";

import {animate, motion} from "framer-motion";
import Image from "next/image"


const Photo = () => {
    return <div className="h-full w-full relative">
        <motion.div 
          initial={{opacity: 0}} 
          animate={{
            opacity:1,
            transition: {delay: 2,
                duration: 0.4,
                ease: "easeIn"
            }
        }}>
            <motion.div
            initial={{opacity: 0}} 
            animate={{
            opacity:1,
            transition: {delay: 2.4,
                duration: 0.4,
                ease: "easeInOut"
            }}}
            className="w-[240px] h-[240px] xl:w-[420px] xl:h-[420px] 
            mix-blend-lighten absolute pb-10 xl:ml-10 ml-6">
                <Image 
                src="/assets/photo2.png"
                priority 
                quality={100} 
                fill
                alt="" 
                className="object-contain"/>
            </motion.div>

            {/* image */}
            <motion.div>
            </motion.div>

            {/* circle */}
            <motion.svg 
            className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" 
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
            >
             <motion.circle 
                cx="250" 
                cy="250" 
                r="250" 
                stroke="#00ff99"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0"}}
                animate={{
                    strokeDasharray: ["15 120 30 30", "16 25 92 72", "4 250 22 22"],
                    rotate: [128, 368],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                />
            </motion.svg>

             
        </motion.div>
        </div>
}



export default Photo