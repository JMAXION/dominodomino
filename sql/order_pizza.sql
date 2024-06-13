use hrdb2019;
drop table order_pizza;
create table order_pizza(
oid INT auto_increment primary key,
pizzaLeft VARCHAR(80),
pizzaRight varchar(80),
pizzaQty INT,
doughName varchar(80),
edgeName varchar(80),
toppingName varchar (500),
sideName varchar(500),
drinkName varchar(500),
userId VARCHAR(80),
totalPrice Int ,
uid INT,
orderTime DATETIME,
orderNumber VARCHAR(100),
 CONSTRAINT FK_uid_order FOREIGN KEY (uid) REFERENCES domino_member(uid)

);


select * from order_pizza;	

insert into order_pizza(pizzaLeft,pizzaRight,pizzaQty,doughName,edgeName,toppingName,sideName,drinkName,userId,totalPrice,uid,orderTime,orderNumber) values('1','1',2,'1','1','11','1','1','1','1',1,now(),1);

select distinct p.pname,pid, dprice, dname from pizza p, dough_option d
    WHERE p.category = d.category
    AND p.pcode = d.pcode
    AND p.ptype = d.ptype
    AND p.pid = 1;

select * from pizza
where pid = 1;

select * from order_pizza;

select * from dough_option;

select oid, pizzaLeft,pizzaRight,pizzaQty, doughName, edgeName, toppingName, sideName,drinkName, FORMAT(totalPrice,0) as totalPrice
from order_pizza
where orderNumber = '20240613test12349'