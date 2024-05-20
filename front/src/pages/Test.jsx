import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function Test(){
const [testList, setTestList] = useState([])

useEffect(()=>{
 axios({
  method :"GET",
  url:"http://127.0.0.1:3000/data/test.json",
  data : testList
 })
 .then(res=> {
  console.log("테스트 ===>", res.data.menu1);

  setTestList(res.data.menu1)
  setTestList(res.data.menu2)
  })

},[])

    return (
  <div>
 
    {testList.map(row => (
       <ul>  
        <li>{row}</li>
     </ul>
    ))}
    
  </div>
);
}