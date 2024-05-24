import {promises as fsPromises} from 'fs'

export  const getEvent = () => {
    const path = 'data/event.json'
    const event = fsPromises.readFile(path, "utf-8").then(data =>  {
        return JSON.parse(data)
    })
    .catch(error=> console.log(error))
    return event;
}

export const geteventdetail = (id) => {
    console.log("id ==>",id);
    const path = "data/eventDetail.json";
  const product = fsPromises
                      .readFile(path, "utf-8")
                      .then(data => { 
                        const jsonData = JSON.parse(data);
                        console.log(jsonData);
                        const event = jsonData.filter(item => item.id === id); 
                        console.log("이벤트",event);
                        return event[0];
                      })
                      .catch(error => console.log(error));
    console.log("프로덕트",product);
  return  product; 
}

export const getDiscountDetail = (id) => {
  console.log("id ==>",id);
  const path = "data/discountDetail.json";
const discount = fsPromises
                    .readFile(path, "utf-8")
                    .then(data => { 
                      const jsonData = JSON.parse(data);
                      console.log(jsonData);
                      const event = jsonData.filter(item => item.id === id); 
                      console.log("이벤트",event);
                      return event[0];
                    })
                    .catch(error => console.log(error));
  console.log("프로덕트",discount);
return  discount; 
           
}


export const getMaindiscount = () => {
  const path = "data/mainDiscount.json"
  const discount = fsPromises.readFile(path,"utf-8")
                          .then(res=> {
                            return JSON.parse(res)  })
                            .catch(error=> console.log(error))
                            return discount;
}

export const getTelecomDiscount = () => {
  const path = "data/telecomDiscount.json"
  const discount = fsPromises.readFile(path,"utf-8")
                          .then(res=> {
                            return JSON.parse(res)  })
                            .catch(error=> console.log(error))
                            return discount;
}

export const getCardDiscount = () => {
  const path = "data/cardDiscount.json"
  const discount = fsPromises.readFile(path,"utf-8")
                          .then(res=> {
                            return JSON.parse(res)  })
                            .catch(error=> console.log(error))
                            return discount;
}


export const getTelecomDiscountDetail = (id) => {

  const path = "data/telecomDiscountDetail.json";
const discount = fsPromises
                    .readFile(path, "utf-8")
                    .then(data => { 
             
                      const jsonData = JSON.parse(data);
                  
                      const event = jsonData.filter(item => item.id === id); 
               
                      return event[0];
                    })
                    .catch(error => console.log(error));

return  discount; 
           
}


export const getCardDiscountDetail = (id) => {

  const path = "data/cardDiscountDetail.json";
const discount = fsPromises
                    .readFile(path, "utf-8")
                    .then(data => { 
             
                      const jsonData = JSON.parse(data);
                  
                      const event = jsonData.filter(item => item.id === id); 
                  
                      return event[0];
                    })
                    .catch(error => console.log(error));

return  discount; 
           
}

