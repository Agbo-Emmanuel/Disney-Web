import React from "react"
import Thecard from "./Thecard"
import movies from "./Disney.json"



const Card = ()=>{  
    return(
        <div className="card">
            <div className="cardwrapper">
                <Thecard mov={movies}/>
            </div>
        </div>
    )
}



export default Card