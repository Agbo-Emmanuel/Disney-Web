import React from "react";


const Thecard = ({mov})=>{
    const data = Object.values(mov)
    
    return(
        <div className="cardwrapper">
            {
                data.map((props, index)=>(
                    <div key={index} className="thecard">
                        <div className="thecardimg">
                            <img src={props.cardImg} alt=""/>
                        </div>
                        <h6>{props.title}</h6>
                        <p>{props.subTitle}</p>
                        <span>Stream Now</span>
                        <div className="tag" style={{backgroundColor: props.type === "new" ? "red" : props.type === "recommend" ? "blue": props.type === "trending" ? "orange":"green"}}>
                            <p>{props.type}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        
    )

}

export default Thecard