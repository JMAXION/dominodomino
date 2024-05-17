import React from 'react'
import Menuheader from '../components/Menuheader';
import Maindiscount from '../components/Maindiscount';
import TelecomDiscount from '../components/TelecomDiscount';
import CardDiscount from '../components/CardDiscount';

export default function Discount({name,depth1,depth2,depth3,}){
return (
  <div className="event-discount-container"> 
        <Menuheader name={name} depth1={depth1} depth2={depth2} depth3={depth3}/>
          <Maindiscount />
          <TelecomDiscount/>
          <CardDiscount/>
    </div>
);
}