import { promises as fsPromises } from "fs";
import { db } from "../database/database_mysql80.js";
import { log } from "console";

export const getPizza = async (halfChoice) => {
  const sql = `select pid as id, halfimg as img, pname, lprice, mprice, category, ptype,pcode, did, ecategory, ecode, etype from pizza
 where ptype between 200 AND 500
 AND pcode between 20 AND 50
 AND NOT pid = 6 AND NOT pname= '블록버스터4' AND NOT pname= '베스트 콰트로'
 AND NOT ptype = 300  `;

  return db.execute(sql, [halfChoice]).then((result) => result[0]);

  /*  const path = 'data/halfPizza.json'
    const event = fsPromises.readFile(path, "utf-8").then(data =>  {
        return JSON.parse(data)
    })
    .catch(error=> console.log(error))
    return event;*/
};

export const getLeftPizza = async (id) => {
  const sql = `select pid as id, halfimg as img, pname, lprice, mprice, category,pcode ptype, did, ecategory, ecode, etype from pizza
    where pid = ?
`;

  return db.execute(sql, [id]).then((result) => result[0][0]);

  /*  const path = 'data/halfPizza.json'
   const event = fsPromises.readFile(path, "utf-8").then(data =>  {
       return JSON.parse(data)
   })
   .catch(error=> console.log(error))
   return event;*/
};

export const getRightPizza = async (id, type) => {
  const sql = `select pid as id, halfimg as img, pname, lprice, mprice, category,pcode ptype, did, ecategory, ecode, etype from pizza
    where pid = ?
    AND pcode = ?
`;

  return db.execute(sql, [id, type]).then((result) => result[0][0]);
};

export const getDoughPizza = async (id) => {
  const sql = `select pid as id, dprice,dname from pizza p, dough_option d
    WHERE p.category = d.category
    AND p.pcode = d.pcode
    AND p.ptype = d.ptype
    AND p.pid = ?`;

  return await db.execute(sql, [id]).then((result) => result[0]);

  /*  let sql = '';
    if(id > 100){
        sql = `select DISTINCT eid,ename,eprice from pizza p, edge_option e
        WHERe p.etype = e.etype
        AND e.etype > 100 
        AND NOT e.etype=100
        order by eid`
    }else{
        sql = `select DISTINCT ename from pizza p, edge_option e
        WHERe p.etype = e.etype
        AND e.etype = 100; `
    }

     
    return await db.execute(sql, [id])
       .then(result =>  result[0])  */
};

export const getEdgePizza = async (id) => {
  let sql = "";
  if (id > 100) {
    sql = `select DISTINCT eid,ename,eprice from pizza p, edge_option e
        WHERe p.etype = e.etype
        AND e.etype > 100 
        AND NOT e.etype=100
        order by eid`;
    return await db.execute(sql, [id]).then((result) => result[0]);
  } else {
    sql = `select DISTINCT ename from pizza p, edge_option e
        WHERe p.etype = e.etype
        AND e.etype = 100; `;
    return await db.execute(sql, [id]).then((result) => result[0]);
  }
};

export const getTopping = async (topping) => {
  console.log("[topping]===>", topping);

  const sql = `SELECT tid,tname,timage,tkind,tprice,quantity from topping
        where tkind = ?`;

  return await db.execute(sql, [topping]).then((result) => result[0]);
};

export const getSecondChoice = async (id) => {
  const sql = `select pid as id, halfimg as img, pname, lprice, mprice, category, ptype,pcode, did, ecategory, ecode, etype from pizza
        where category  = ?
        AND NOT pid = 6 AND NOT pname= '블록버스터4' AND NOT pname= '베스트 콰트로'
        AND NOT pid BETWEEN 1 AND 4
        AND NOT ptype = 300  `;

  return await db.execute(sql, [id]).then((result) => result[0]);
};

export const getSide = async (side) => {
  const sql = ` select sid,sname,simage,skind,sprice,quantity from side`;
  return await db.execute(sql, [side]).then((result) => result[0]);
};


export const getDrink = async (drink) => {
  const sql = ` select bid,bname,bimage,bprice,quantity from drink_beverage`;
  return await db.execute(sql, [drink]).then((result) => result[0]);
};


export const orderInsert = async(order) =>{
  let result_rows = 0;
  console.log(order);
  const params= [
    order.pizzaLeftName,
    order.pizzaRightName,
    order.pizzaQty,
    order.doughName,
    order.edgeName,
    order.toppingName,
    order.sideName,
    order.drinkName,
    order.user,
    order.totalPrice,
    order.uid,
    order.orderNumber
  ]
  const sql =`insert into order_pizza(pizzaLeft,
                                      pizzaRight,
                                      pizzaQty,
                                      doughName,
                                      edgeName,
                                      toppingName,
                                      sideName,
                                      drinkName,
                                      userId,
                                      totalPrice,
                                      uid,
                                      orderTime,
                                      orderNumber) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,now(), ? )`
  try {
    const [result] = await db.execute(sql, params);
    result_rows = result.affectedRows;
    console.log("rows -->", result.affectedRows);
  } catch (error) {
    console.log(error);
  }

  return { cnt: result_rows };
};


export const getOrderResult = async(orderNumber) => {
  const sql = `select oid, pizzaLeft,pizzaRight,pizzaQty, doughName, edgeName, toppingName, sideName,drinkName, FORMAT(totalPrice,0) as totalPrice
from order_pizza
where orderNumber = ?`

return await db.execute(sql, [orderNumber]).then((result) => result[0][0]);
}