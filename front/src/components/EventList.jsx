import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Modal from './Modal';

export default function EventList(){
  const [eventList, setEventList] = useState([])
  const url  = "http://127.0.0.1:8080/event";

  useEffect(()=>{

  axios({
    method:"GET",
    url : url,
    data:eventList
  })
  .then(res => setEventList(res.data))
  .catch(error => console.log(error))
},[])

console.log(eventList);

const rows = []

for(let i = 0; i < eventList.length; i+=2 ){
  rows.push(eventList.slice(i, i+2))
}
const {id} =''
  return (
  <div className="event-list-container">
    {rows.map(row=> (
      <ul className="event-list">
            {row.map(item=> (
                <li className="event-list-img"> 
                    <Link to={`/event/detail/${item.id}`}> <img src={item.img}/> </Link>         
                 </li>
            ))}
       </ul>
    ))}

    </div>
);
}