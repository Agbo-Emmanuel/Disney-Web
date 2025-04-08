import React from "react";
import { motion } from 'framer-motion'


const Thecard = ({mov})=>{
    const data = Object.values(mov)
    
    return(
        <div className="cardwrapper">
            {
                data.map((props, index)=>(
                    <motion.div 
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 30,
                            mass: 1.5,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ margin: "-40px", once: true }}
                        key={index} 
                        className="thecard">
                        <div className="thecardimg">
                            <img src={props.cardImg} alt=""/>
                        </div>
                        <h6>{props.title}</h6>
                        <p>{props.subTitle}</p>
                        <span>Stream Now</span>
                        <div className="tag" style={{backgroundColor: props.type === "new" ? "red" : props.type === "recommend" ? "blue": props.type === "trending" ? "orange":"green"}}>
                            <p>{props.type}</p>
                        </div>
                    </motion.div>
                ))
            }
        </div>
        
    )

}

export default Thecard