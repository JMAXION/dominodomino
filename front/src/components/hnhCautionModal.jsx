import { useState } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
export default function HnhCautionModal(){
   
    const [modalOpen, setModalOpen] = useState(false);




   

const modalBackground = useRef();  
    return (
        <>
          <div className={'btn-wrapper-use-caution'}>
            
            <span className="btn-text-caution" onClick={() => setModalOpen(true)}>하프앤하프 피자 이용시 주의사항</span>
    
            
          </div>
             
          {
            modalOpen &&
            <div className={'hnh-caution-modal-container'} ref={modalBackground} onClick={e => {
              if (e.target === modalBackground.current) {
                setModalOpen(false);
              }
            }}>
              
              <div className={'modal-content'}>
               
                 <span className="modal-close-btn"
                           onClick={()=> {setModalOpen(false)}}>
                            <FontAwesomeIcon icon={faXmark} /></span>
                            <h2 className="pop-title">하프앤하프 유의사항</h2>
                <hr></hr>
                <div className='pop-content'>
                    <div className='title-wrap'>
                        <div className='title-type2'>하프앤하프 유의사항</div>
                    </div>
                    <div className='pop-text'>
                        <ul className="list-text-v2">
                            <li> - 하프앤하프는 동일한 크기(L/M), 도우, 엣지 주문 시 이용할 수 있습니다.</li>
                            <li> - 일부 제품은 동일한 엣지 형태로만 주문이 가능합니다.</li>
                            <li> - 추가 토핑은 하프앤하프 전체에 고르게 분배됩니다.<br></br>
                            (특정 피자 부분에만 추가 토핑 분배를 원하실 경우 주문서 작성 페이지<br></br> "요청사항" 입력란에 해당 내용을 기재해 주시기를 바랍니다.)</li>
                        </ul>
                    </div>
                </div>

                 
                   
             
               
              </div>
            </div>
          }
        </>
      );
    };