import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

import Breadcrumb from '../components/Breadcrumb';
import EventList from '../components/EventList';
import Menuheader from '../components/Menuheader'
import Maindiscount from '../components/Maindiscount';
import CardDiscount from '../components/TelecomDiscount';

export default function Event({name,depth1,depth2,depth3, className,headerName}){

return(
<div className="event-container">
  <Menuheader name={name} depth1={depth1}  depth2={depth2} depth3={depth3} className={className} headerName={headerName} />
   <EventList />
   </div>
);
}