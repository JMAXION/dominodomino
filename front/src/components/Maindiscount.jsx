import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
export default function Maindiscount({name}){
    const [menuList, setMenuList] = useState([])
    const url = "http://127.0.0.1:8080/event/discount"
    useEffect( () => {
       axios({
        method:"GET",
        url : url,
        data : menuList
       })
       .then(res=> setMenuList(res.data)) 
    })
   
    const rows = []

    for(let i = 0; i < menuList.length; i+=2 ){
      rows.push(menuList.slice(i, i+2))
    }
    const {id} =''
      return (
      <div className="event-list-container">

        {rows.map(row=> (
          <ul className="event-list">
                {row.map(item=> (
                    <li className="event-list-img"> 
                        <Link to={`/event/discount/detail/${item.id}`}> <img src={item.img}/> </Link>         
                     </li>
                ))}
           </ul>
        ))}
        <hr className="main-discount-end"></hr>
        </div>
        
    );
}