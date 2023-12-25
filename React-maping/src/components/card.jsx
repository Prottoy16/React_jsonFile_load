import ReactDOM from "React-dom/client";
import React from "react";

function Card(props){
    const {Title,description}=props;
    return <div className="Card">
        <h4 className="title">{Title}</h4>
         <p className="description">{description}</p>
    </div>
}

export default Card;