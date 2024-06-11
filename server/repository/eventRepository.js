import { db } from "../database/database_mysql80.js";
import { promises as fsPromises } from "fs";

export const getEvent = async () => {
  const sql = `SELECT id, image as img, title, start_date as start, end_date as end,detail_image FROM event`;

  return db.execute(sql).then((result) => result[0]);

  /*    const path = 'data/event.json'
    const event = fsPromises.readFile(path, "utf-8").then(data =>  {
        return JSON.parse(data)
    })
    .catch(error=> console.log(error))

    
    return event;*/
};

export const geteventdetail = async (id) => {
  console.log("id====>", id);
  const sql = `select  image as img ,title,start_date as start, end_date as end,detail_image from event
             where id = ?`;

  return db.execute(sql, [id]).then((result) => result[0][0]);

  /*    console.log("id ==>",id);
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
  return  product;  */
};

export const getDiscountDetail = async (id) => {
  const sql = `select id,  image as img ,title,start_date as start, end_date as end, detail_image from main_discount
  where id = ?`;

  return db.execute(sql, [id]).then((result) => result[0][0]);

  /*   console.log("id ==>",id);
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
return  discount;  */
};

export const getMaindiscount = async () => {
  const sql = `select id, image as img ,title,start_date as start, end_date as end,detail_image from main_discount`;
  return db.execute(sql).then((result) => result[0]);

  /*  const path = "data/mainDiscount.json"
  const discount = fsPromises.readFile(path,"utf-8")
                          .then(res=> {
                            return JSON.parse(res)  })
                            .catch(error=> console.log(error))
                            return discount; */
};

export const getTelecomDiscount = async () => {
  const sql = `SELECT id, img from telecom_discount`;
  return db.execute(sql).then((result) => result[0]);
  /*   const path = "data/telecomDiscount.json"
  const discount = fsPromises.readFile(path,"utf-8")
                          .then(res=> {
                            return JSON.parse(res)  })
                            .catch(error=> console.log(error))
                            return discount; */
};

export const getCardDiscount = async () => {
  const sql = `SELECT id, img from card_discount`;
  return db.execute(sql).then((result) => result[0]);
  /*   const path = "data/cardDiscount.json"
  const discount = fsPromises.readFile(path,"utf-8")
                          .then(res=> {
                            return JSON.parse(res)  })
                            .catch(error=> console.log(error))
                            return discount;  */
};

export const getTelecomDiscountDetail = async (id) => {
  const sql = `
  select id, img, company, discount, name, percent1, percent2, card, discribeTitle, grade1, grade2, discribeTitle2, caution, desc1  from telecom_discount
        where id = ?`;

  return db.execute(sql, [id]).then((result) => result[0][0]);

  /*   const path = "data/telecomDiscountDetail.json";
const discount = fsPromises
                    .readFile(path, "utf-8")
                    .then(data => { 
             
                      const jsonData = JSON.parse(data);
                  
                      const event = jsonData.filter(item => item.id === id); 
               
                      return event[0];
                    })
                    .catch(error => console.log(error));

return  discount;  */
};

export const getCardDiscountDetail = async (id) => {
  const sql = `
  select id, img, company, discount1,discount2,discount3, name, percent1, percent2, card, discribeTitle, grade1, grade2, discribeTitle2, caution, desc1,desc2  from card_discount
        where id = ?`;

  return db.execute(sql, [id]).then((result) => result[0][0]);

  /*   const path = "data/cardDiscountDetail.json";
const discount = fsPromises
                    .readFile(path, "utf-8")
                    .then(data => { 
             
                      const jsonData = JSON.parse(data);
                  
                      const event = jsonData.filter(item => item.id === id); 
                  
                      return event[0];
                    })
                    .catch(error => console.log(error));

return  discount;   */
};
