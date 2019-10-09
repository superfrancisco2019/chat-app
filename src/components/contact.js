import React from 'react';
import './styles.css';

function Contact({name, status, avatar}){
    return(
        <div className = "Contact">
            <div><img className="avatar" src = {avatar} alt ={name}/> </div>
            <div><h4 className='name'> {name}</h4>
                <div className ='status'> 
                    <span className={ status ? 'status-online' : 'status-offline'}> </span>
                    <span className='status-text'> {status ? "online" : "offline"} </span>
                </div>
            </div>
        </div>
    )
}
export default Contact