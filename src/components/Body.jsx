import React from "react"
import Card from "./Card"
import { motion } from 'framer-motion'


const Body = ()=>{
    return(
        <div>
            <div className="First">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -100,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 30,
                        mass: 1.5,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{ margin: "-40px", once: true }} 
                    className="Firstleft">
                    <div className="textimage"></div>
                    <p>Halloween with Disney+ is scary good. Haunts of every kind await!</p>
                    <button>Stream Now</button>
                </motion.div>
            </div>
            <Card/>
        </div>
       
    )
}

export default Body