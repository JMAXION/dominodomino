import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react'
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';


export default function TelecomDiscount ({id}){
const [menuList, setMenuList] = useState([])
const [modalOpen, setModalOpen] = useState(false);


const url = "http://127.0.0.1:8080/event/discount/telecom"

const  navigate = useNavigate()
useEffect( () => {
   axios({
    method:"GET",
    url : url,
    data : menuList
   })
   .then(res=> setMenuList(res.data)) 
},[])



const rows = []

for(let i = 0; i < menuList.length; i+=3 ){
  rows.push(menuList.slice(i, i+3))
}


const openModal = () => {

}
const modalBackground = useRef();
let number = 0;
  return (
  <div className="telecom-discount-container">
    <h1>통신사 제휴</h1>
  
    {rows.map(row=> (
      
          
      <ul className="event-list ">
            {row.map(item=> (
              <>
             
                <li className="event-telecom-discount-list" ref={modalBackground} onClick={e => {
                  if (e.target === modalBackground.current) {
                    setModalOpen(true);
                  }
                }}>
                
               
                    <Modal id = {item.id}/> 
                 </li>
                 
                  </>
                  
            ))}
       </ul>
       
    ))}
 
              

    <hr className="main-discount-end"></hr>
   
    </div>
    
);
}