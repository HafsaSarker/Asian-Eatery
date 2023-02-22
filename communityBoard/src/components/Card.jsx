import React from "react";

const Card = (props) => {
    return (
        <div className="card-component">
            <img src={props.img} />
            <h1>{props.name}</h1>
            <h2>{props.type}</h2>
            <a target="_blank" href={props.info}>More Info</a>
        </div>
    )
}

export default Card;