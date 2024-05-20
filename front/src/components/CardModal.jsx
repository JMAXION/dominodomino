import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Modal({id}){
    const [modalOpen, setModalOpen] = useState(false);
    const [menuList, setMenuList] = useState([])



    const url = `http://127.0.0.1:8080/event/discount/card/detail/${id}`
    useEffect( ()=> {
        axios({
            method:"GET",
            url:url,
            data:menuList
        })
        .then(res=> setMenuList(res.data))
        .catch(error=>console.log(error))
    })
   

    const modalBackground = useRef();
    return (
        <>
          <div className={'btn-wrapper'}>
            
            <img  src={menuList.img} className={'modal-open-btn'} onClick={() => setModalOpen(true)}/>
    
            
          </div>
          <p>{menuList.company}</p>
                    <p>{menuList.discount}</p>       
          {
            modalOpen &&
            <div className={'modal-container'} ref={modalBackground} onClick={e => {
              if (e.target === modalBackground.current) {
                setModalOpen(false);
              }
            }}>
              
              <div className={'modal-content'}>
                <h3 className="modal-content-title">카드사 제휴</h3>
                 <span className="modal-close-btn"
                           onClick={()=> {setModalOpen(false)}}>
                            <FontAwesomeIcon icon={faXmark} /></span>
                <hr></hr>
              <img src={menuList.img}></img>
                <div className="modal-content-name-container">
                  <h3 className="modal-content-name">{menuList.name}</h3> 
                  <span className="modal-content-percent">{menuList.percent1}</span>
                  <span className="modal-content-percent">{menuList.percent2}</span>
                  <span className="modal-content-card">{menuList.card}</span>                 
                </div>
               <h4>{menuList.discribeTitle}</h4>
               <pre>
               <h4>
           
                  {menuList.grade1}

                  <pre className="modal-content-discribe">{menuList.desc}</pre>
                  {menuList.discribeTitle2}
                  {menuList.grade2}  
                  <pre className="modal-content-discribe">{menuList.desc2}</pre>
                
               </h4>
               </pre>
                   
             
               <div className="modal-content-caution-container">
                
                    <p className="caution">※ 이용불가 매장안내</p>
                    <span   className="caution">{menuList.caution}</span>
               </div>
              </div>
            </div>
          }
        </>
      );
    };