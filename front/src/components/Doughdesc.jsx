import { useState } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
export default function Doughdesc(){
   
    const [modalOpen, setModalOpen] = useState(false);




   

const modalBackground = useRef();  
    return (
        <>
          <div className={'btn-wrapper-dough-desc'}>
            
            <span className="btn-text-dough-desc" onClick={() => setModalOpen(true)}>도우의 특징</span>
    
            
          </div>
             
          {
            modalOpen &&
            <div className={'dough-modal-container'} ref={modalBackground} onClick={e => {
              if (e.target === modalBackground.current) {
                setModalOpen(false);
              }
            }}>
              
              <div className={'dough-modal-content'}>
               
                 <span className="modal-close-btn"
                           onClick={()=> {setModalOpen(false)}}>
                            <FontAwesomeIcon icon={faXmark} /></span>
                            <h2 className="pop-title">도우의 특징</h2>
                <hr></hr>
           
                    <div className="tit_wrap">
                        <strong>
                            도미노 피자의 
                            <span>다양한 도우</span>를<br></br>
                            입맛대로 골라 드세요!
                        </strong>
                        <p>
                        국내산 흑미, 세계가 주목하는 6가지 슈퍼시드, FDA승인
                        <br></br>
                        노블로즈W로 영양과 풍미에 고 식이섬유까지 담은 도우는 물론,
                        <br></br>
                        담백하고 쫄깃한 오리지널 도우나, 겉은 바삭하고 쫄깃한 나폴리 도우,
                        <br></br>
                        얇고 바삭한 씬 도우까지 선택하실 수 있습니다.
                        </p>
                    </div>
                 
                   <div className='lst_dough'>
                        <div className='grain_dough'>
                            <img src="https://cdn.dominos.co.kr/domino/pc/images/popup/w_dough1.jpg" alt="" />
                            <p className="discription-dough">
                            “기존 슈퍼시드 함유 도우 보다 더 맛있으면서, 더 건강한 도우를 만들 수는 없을까?” <br></br>
                            계속된 고민과 연구로 탄생한 도미노 슈퍼시드 화이버 함유 도우!
                            </p>
                            <p className="discription-dough">
                            국내산 흑미, 세계가 주목하는 6가지 슈퍼시드, FDA승인 *노블로즈W로<br></br>
                            영양과 풍미에 고 식이섬유까지 담았습니다.
                            </p>
                            

                            <p className="discription-dough">
                            *노블로즈W? 소화효소에 분해되지 않는 FDA 승인 식이섬유 강화 원료
                            </p>
                        <img src="https://cdn.dominos.co.kr/domino/pc/images/popup/w_dough2.jpg" alt="" />
                        
                    <div className="superseed_dough">
                        <dl className='superseed_dough_content large'>
                            <dt>
                                <img src="https://cdn.dominos.co.kr/renewal2018/w/img/superseed_1.jpg" alt="" />
                            </dt>
                            <dd className='cont_title'> 100% 국내산 흑미</dd>
                            <dd className='cont_sub'>
                            항산화, 항암, 항궤양 효과가 있다고 알려진 안토시아닌이 검은콩보다 4배 이상 함유, <br></br>
                            철, 아연, 셀레늄 등의 무기염류는 일반 쌀 대비 5배 이상 함유<br></br>
                            노화와 여러 질병을 일으키는 체내의 활성산소를 효과적으로 중화시키며 심장실병, 뇌졸증, 성인병, 암 예방에도 좋은 곡물
                            </dd>
                        </dl>
                        <dl className='superseed_dough_content large'>
                            <dt>
                                <img src="https://cdn.dominos.co.kr/renewal2018/w/img/superseed_2.jpg" alt="" />
                            </dt>
                            <dd className='cont_title'> 아마씨</dd>
                            <dd className='cont_sub'>
                            타임지가 선정한 슈퍼곡물, 노화방지에 좋은 리그난이<br></br>
                            석류보다 2700배나 많이 함유,<br></br>
                            또한 오메가 3가 풍부해 각종 혈관질환 예방에 효과
                            </dd>
                        </dl>
                        <dl className='superseed_dough_content large'>
                            <dt>
                                <img src="https://cdn.dominos.co.kr/renewal2018/w/img/superseed_3.jpg" alt="" />
                            </dt>
                            <dd className='cont_title'> 퀴노아</dd>
                            <dd className='cont_sub'>
                            페루어로 '곡물의 어미니'라고 불릴 정도로<br></br>
                            풍부한 영양소 함유,<br></br>
                            쌀보다 7배 많은 식이섬유 함유
                            </dd>
                        </dl>
                        <dl className='superseed_dough_content large'>
                            <dt>
                                <img src="https://cdn.dominos.co.kr/renewal2018/w/img/superseed_4.jpg" alt="" />
                            </dt>
                            <dd className='cont_title'> 병아리콩</dd>
                            <dd className='cont_sub'>
                                클레오파트라도 즐겨먹었던 것으로 알려진 곡물,<br></br>
                                우유보다 5배 많은 칼슘을 함유하여 비타민E가 풍부해<br></br>
                                항노화 기능과 아르기닌 성분으로 신진대사를 활발히 해 <br></br>
                                젊음을 유지하는데 효과적
                            </dd>
                        </dl>

                        <dl className='superseed_dough_content large'>
                            <dt>
                                <img src="https://cdn.dominos.co.kr/renewal2018/w/img/superseed_5.jpg" alt="" />
                            </dt>
                            <dd className='cont_title'> 햄프씨드</dd>
                            <dd className='cont_sub'>
                                타임지가 선정한 슈퍼곡물,<br></br>
                                불포화지방산이 등푸른 생선보다 10배 많아<br></br>
                                혈관 건강에 도움<br></br>
                               
                            </dd>
                        </dl>

                        
                        <dl className='superseed_dough_content large'>
                            <dt>
                                <img src="https://cdn.dominos.co.kr/renewal2018/w/img/superseed_6.jpg" alt="" />
                            </dt>
                            <dd className='cont_title'> 귀리</dd>
                            <dd className='cont_sub'>
                            세계보건기구(WHO)에서 핀란드 등 장수 국가의 대표<br></br>
                            음식으로 발표될 정도로 영양이 풍부한 곡물.<br></br>
                            칼슘, 철분, 인을 비롯한 미네랄과 비타민 다량 함유<br></br>
                               
                            </dd>
                        </dl>

                        <dl className='superseed_dough_content large'>
                            <dt>
                                <img src="https://cdn.dominos.co.kr/renewal2018/w/img/superseed_7.jpg" alt="" />
                            </dt>
                            <dd className='cont_title'> 렌틸콩</dd>
                            <dd className='cont_sub'>
                            풍부한 식이섬유와<br></br>
                            소고기보다 1.3배 많은 단백질 함유.<br></br>
                               
                            </dd>
                        </dl>
                     
                    </div> 
                    </div>
                    <ul>
                        <li>
                            <img src="https://cdn.dominos.co.kr/renewal2018/w/img/img_dough2.jpg" alt="" />
                            <dl>
                                <dt >
                                    담백하고 쫄깃한 <strong >오리지널 도우</strong>
                                </dt>
                                <dd>
                                냉장 저온숙성시킨 도우를 손으로 직접 펴서<br />
                                만든 미국 뉴욕 스타일의 도우, 엣지의 두께는<br></br>
                                2.2CM 피자 가운데는 1.3CM 내외로 담백하<br></br>
                                면서도 쫄깃한 도우의 맛이 특징
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <img src="https://cdn.dominos.co.kr/renewal2018/w/img/img_dough3.jpg" alt="" />
                            <dl>
                                <dt >
                                겉은 바삭, 속은 쫄깃한 <strong >나폴리 도우</strong>
                                </dt>
                                <dd>
                                피자의 원조인 이탈리아 나폴리 스타일의 도우,<br />
                                씬피자와는 다르게 엣지는 살리면서 얇게<br></br>
                                펴주는 것이 주요 특징. 엣지의 두께는 1.5CM,<br></br>
                                피자 가운데는 0.3CM 내외이며, 도우 겉은<br/>
                                바삭하고 속은 쫄깃한 맛을 가지고 있음.<br/>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <img src="https://cdn.dominos.co.kr/renewal2018/w/img/img_dough4.jpg" alt="" />
                            <dl>
                                <dt >
                                얇고 바삭한 <strong >씬 도우</strong>
                                </dt>
                                <dd>
                                이탈리아 로마식 도우로 일반적인 이탈리아<br />
                                전 지역(나폴리 지역 제외)에서 대중화되어<br></br>
                                펴주는 것이 주요 특징. 엣지의 두께는 1.5CM,<br></br>
                                있는 얇은 도우, 엣지 없이 도우가 얇고<br/>
                                평평한 것이 특징이며 바삭함을 즐길 수 있음.<br/>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                   </div>
                  
               
              </div>
            </div>
          }
        </>
      );
    };