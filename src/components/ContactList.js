import React from 'react';
import Contact from './Contact.js'


let liste = 
    [
        {avatar :  'https://randomuser.me/api/portraits/women/74.jpg', 
        name : 'Wilma Watts',
        status : true
        },

        {avatar  :'https://randomuser.me/api/portraits/women/2.jpg', 
        name : 'Daisy Stewart',
        status : true
        },

        {avatar: 'https://randomuser.me/api/portraits/women/65.jpg', 
        name : 'Danielle Harvey',
        status : false
        },

        {avatar: 'https://randomuser.me/api/portraits/women/76.jpg',
         name : 'Gladys Wade',
        status : true
        },

        {avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
         name :'Jo Chambers',
        status : false
        },
    ]

function ContactList(){
    return(
        liste.map(element=>{
            return(
                <Contact name={element.name} avatar = {element.avatar} status = {element.status}/>
            )
        })
    )
}
export default ContactList