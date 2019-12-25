import React from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';


const Avatar = () => {

    const avatarlistarray = [
        {
            id:1,
            name:"Raj kumar",
            work:"web Developer"
        },
        {
            id:2,
            name:"Thapa ",
            work:"FrontEnd Developer"
        },
        {
            id:3,
            name:"Bahadur ",
            work:"Database Designer"
        },
        {
            id:4,
            name:"Naran",
            work:"BackEnd Developer"
        }
    ]
        const arrayavatarcard = avatarlistarray.map((avatarcard, i)=>{
            return <Avatarlist id={avatarlistarray[i].id} 
                        name={avatarlistarray[i].name} 
                        work={avatarlistarray[i].work} />

             
        })

    return (<div><h1>Welcome to Avatar world</h1>
                {arrayavatarcard}
            <br></br>
    <button>Subscribe</button>
    </div>
    )
}
export default Avatar; 