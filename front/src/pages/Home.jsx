import React from 'react'

import Swiper from '../components/Swiper'
import { Navigation, Pagination,Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { useState } from 'react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import '../css/style2.css'
import Header from '../components/Header';

export default function Home(){
  const [swiper, setSwiper] = useState();
 return (
  <>
  
<Swiper/>
</>
);
}