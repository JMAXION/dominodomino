import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

import 'swiper/css';
import '../css/swiper.css'
import { height, width } from '@fortawesome/free-solid-svg-icons/faLocationArrow';
import { useEffect, useState } from 'react';


export function SwiperComp () {

const [itemList, setItemList] = useState([])
const url = "/data/hnhSwiper.json"
useEffect(()=> {
   
    
        axios({
         method:"GET",
         url : url,
         data : itemList
        })
        .then(res=> setItemList(res.data))
        .catch(error => console.log(error))
   
},[])
   
    const swiperStyle= {
        width:"150px",
        textAlign:"center",
        zIndex:0
        
    }
    const swiperContainer ={
        width:"500px",
        height:"242px",
        padding:"1rem",
        backgroundColor:"#f8f8f8",
        zIndex:'0'

    }

    const pizzaName = {
        fontSize:"0.85rem",
        fontWeight:"bold",
        color:"#777",
        zIndex:'-1'
    }

    const btnOrder = {
        marginTop:'10px',
        padding:'1px 3px',
        zIndex:'-1'
    }


    return(
        <div style={swiperContainer}>
            <div className="title-wrap">
                <button>추천</button>
                <p>베스트조합! 하프앤하프 시그니처!</p>
            </div>
         <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={10}
    slidesPerView={4}
    navigation
    autoplay={true}
    pagination={{ clickable: true }}
    >
    <ul className="swiper-list">
    {itemList.map( obj => (
    
        <SwiperSlide style={swiperStyle} className="swiper-slide">  
       <li> <img src={obj.img}/> </li>
       <li style={pizzaName}>{obj.name}</li>
       <li><button style={btnOrder}>주문하기</button></li>
        </SwiperSlide> 
  

    ))}
   
 /</ul>
   
  </Swiper>
        </div>
    )
}