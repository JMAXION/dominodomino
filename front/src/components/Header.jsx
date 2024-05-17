import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons/faLocationArrow';
import Dropdown from './Dropdown';
import axios from 'axios'
import Menu from './Menu';
import { Link } from 'react-router-dom';

export default function Header(props){
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
  
  const [menuList, setMenuList] = useState([])
  const [subMenuList, setSubMenuList]= useState([])
  const [subMenuList2, setSubMenuList2]= useState([])
  useEffect( ()=> {
    axios.get('/data/menu.json')
    .then(res=>{
      setMenuList(res.data.menu);
      setSubMenuList(res.data.subMenu)

    } )
    .catch(error => console.log(error))
  },[])

  
  console.log(menuList);
  console.log(subMenuList);


return (
  <>
  <div className="header-container">
        <div className="hedaer-container-top">
                <div>

                   <Link to = "http://localhost:3000/">
                     <img className="header-logo-img" src="../images/logo2.png" ></img>
                  </Link>

                </div>
                <div className="header-promotion">
                <span><FontAwesomeIcon icon={faLocationArrow} /></span><input className="header-promotion-input" type="text" placeholder='주변 매장의 프로모션을 확인해보세요!'/>
                </div>
                <div className="header-member">
                      <ul className="header-member-list"> 
                              <li>로그인</li>
                              <li>회원가입</li>
                              <li>
                                <select className="header-langauge">
                                    <option>KOR</option>
                                    <option>ENG</option>
                                </select></li>
                      </ul>
                      
                  </div>
             
        </div>
        
  </div>
  <div className="header-menu-list-container">
  
  <ul className="header-menu-list">
    
  {
  menuList.map(obj => ( 
    
    <Menu name={obj.name} link={obj.link}/>
    
))}
    <li className="fromCenter header-show-more" onClick={e => setDropdownVisibility(!dropdownVisibility)}>더보기{
                    dropdownVisibility
                        ? '⬆️'
                        : '⬇️'
                }</li>
    
  </ul>
          <hr></hr>
  
  
  <Dropdown visibility={dropdownVisibility}>
  <div className="header-slide-menu">
  
            {subMenuList.map(subArray => (
       <div className="header-slide-menu-sub">            
        <ul className="header-slide-menu-sub-list">
          {subArray.map(item => (
            <Menu name={item.name} link={item.link}></Menu>
          ))}
          </ul>    
        </div>
          ))}
        
        
    </div>
    </Dropdown>
</div>   
</>
);
}