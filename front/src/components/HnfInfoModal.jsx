import axios from 'axios';
import React, { useEffect } from 'react'

import { useState } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { colorControl } from './colorControl';

export default function HnfInfoModal({id}){
    const [modalOpen, setModalOpen] = useState(false); //모달 열고 닫기 감지
    const [infoChange, setInfoChange] =useState("menu") // 모달 json 분기
    const [infoList, setInfoList] =useState([]);    // 모달 테이블헤더 
    const [infoContent, setInfoContent] = useState([]) // 모달 테이블내용
    const [colorChange, setColorChange] = useState(false) //버튼 클릭시 색상관리
    const url = "data/info.json"

    useEffect(()=>{
      axios({
        method:"GET",
        url:url,
        data:infoList
      })
        .then(res=>{
          
          if( infoChange === 'menu'){
          
          setInfoList(res.data.menu)
          setInfoContent(res.data.menucontent)
        }else if(infoChange === 'side'){
          setInfoList(res.data.side)
        }
        } )
        .catch(error=> console.log(error))
    },[infoChange])
  
    const InfoChange= (e)=>{
     
      setInfoChange(e)
      setColorChange(!colorChange)
    }

    const check = () => {
      
      window.addEventListener('click', (e)=>{
        e.target.style.backgroundColor='yellow';
      })
    }
    

    const modalBackground = useRef();
    return (
        <>
          <div className={'btn-wrapper'}>
            <div className="btn-wrap2">
            <button className="btn-info" onClick={()=>{setModalOpen(true)}}> 
            원산지 · 영양성분 · 알레르기 유발성분 정보 &gt;
            </button>
            </div>
            
          </div>
               
          {
            modalOpen &&
            <div className={'modal-container'} ref={modalBackground} onClick={e => {
              if (e.target === modalBackground.current) {
                setModalOpen(false);
              }
            }}>
              
              <div className={'modal-content'}>
                <p className="info-title">원산지 · 영양성분 · 알레르기 유발성분 정보</p>
                <span className="modal-close-btn"
                           onClick={()=> {setModalOpen(false)}}>
                            <FontAwesomeIcon icon={faXmark} /></span>
                <hr></hr>
               <ul className="info-list1">
                  <li><a><button className="country" id="btn1" onClick={(e)=>{colorControl(e.target);InfoChange("menu")}}>원산지</button></a></li>
                  <li><a><button id="btn2"  onClick={(e)=>{colorControl(e.target)}}>영양성분</button></a></li>
                  <li><a><button id="btn3" onClick={(e)=>{colorControl(e.target)}}>알레르기 유발성분</button></a></li>
               </ul>
               <ul className="info-list2">
               <li><a><button>피자</button></a></li>
               <li><a><button onClick={(e)=>{InfoChange("side")}}>사이드</button></a></li>
               <li><a><button>마이키친</button></a></li>
               </ul>
               <div>
                <table border='1'>
                <tr>
                {infoList.map( (obj,index) => (
                
                <th className="info-header">{obj.name}</th>
               
                ))}
              </tr>
                </table>
                <table border='1'>
                 
                {infoContent.map(item=> (
                  <tr>
                  <td className="info-contents">{item.name}</td>
                  <td className="info-contents">{item.link}</td>
                  </tr>
                ))}
                 
               </table>
               
               </div>
               
         
                   
             
               
              </div>
            </div>
          }
        </>
      );
    };