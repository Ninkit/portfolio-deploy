"use client"

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";


const StairTransition =() => {
  const pathname = usePathname();
  return (
    <div>
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0
        left-0 right-0 pointer-events-none z-40 flex">
        <Stairs />
        </div> 
      </div>

      <motion.div className="h-screen w-screen fixed bg-primary top-0
      pointer-events-none" 
      initial={{opacity: 1}} 
      animate= {{opacity: 0, 
        transition: {delay: 1, duration: 0.4, ease: "easeInOut"}}} />

    </AnimatePresence>
    </div>
  )
};

export default StairTransition
