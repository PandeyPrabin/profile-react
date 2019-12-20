import React from 'react';
//import './Avatarlist.css';

const Avatarlist=(props)=>{
    return(
        <div className="avatarstyle">
        <img src = "https://joeschmoe.io/api/v1/<Raj>" alt="Raj" />
        <h1>{props.name}</h1>
        <p>{props.work}</p>
        </div>
    )
}
export default Avatarlist;