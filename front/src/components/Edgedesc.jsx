import { useState } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
export default function Edgedesc(){
   
    const [modalOpen, setModalOpen] = useState(false);




   

const modalBackground = useRef();  
    return (
        <>
          <div className={'btn-wrapper-dough-desc'}>
            
            <span className="btn-text-dough-desc" onClick={() => setModalOpen(true)}>엣지의 특징</span>
    
            
          </div>
             
          {
            modalOpen &&
            <div id="pop-edge" className={'dough-modal-container'} ref={modalBackground} onClick={e => {
              if (e.target === modalBackground.current) {
                setModalOpen(false);
              }
            }}>
              
              <div className={'dough-modal-content'}>
               
                 <span className="modal-close-btn"
                           onClick={()=> {setModalOpen(false)}}>
                            <FontAwesomeIcon icon={faXmark} /></span>
                            <h2 className="pop-title">엣지의 특징</h2>
                <hr></hr>
           
                    <div className="tit_wrap">
                        <strong>
                           도우 끝
                            <span className="accent">엣지</span>까지 숨어있는<br></br>
                            <span className="accent">갖가지 토핑</span>을 찾아보세요
                        </strong>
                        <div className="lst_topping">
                     <img src="https://cdn.dominos.co.kr/domino/pc/images/img-dough-hotdog_w.png" alt="" />
                        </div>
                    </div>
                 
                  
                   
                  
               
              </div>
            </div>
          }
        </>
      );
    };