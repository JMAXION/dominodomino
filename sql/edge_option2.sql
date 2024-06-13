/* category 1 :하프앤하프, 하프앤하프 시그니처
			2 : 공용 (프리미엄, 클래식)
            3 : 치즈크래이프
            
	pcode : 하프앤하프 : 	     10,  -- 나폴리 도우 1개 고정
			공용 :     	     20,  -- 도우 5개 고정
            치즈크래이프샌드 :    30, --전용 도우 1개
            하프앤하프 시그니쳐 : 40  --도우 3개 고정
            
    ptype : 하프앤하프, Happy Daily Pizza  : 100,
			프리미엄피자 : 		 200,
            하프앤하프 시그니처 : 300,
            클래식 : 			 400,
*/
use hrdb2019;
drop table edge_option;
CREATE TABLE edge_option(
                          eid INT auto_increment primary key ,
                          ename VARCHAR(50), -- 엣지 이름
                          eprice INT, -- 엣지 가격
                          ecategory INT,
                          ecode INT,
                          etype INT
);    

insert into edge_option (ename, eprice, ecategory, ecode, etype) 
values('콰트로 치즈 엣지(Happy Daily Pizza 전용)',
		NULL,
		1,
        10,
        100
);   
insert into edge_option (ename, eprice, ecategory, ecode, etype) 
values('없음',
		NULL,
		2,
        20,
        200
);   
insert into edge_option (ename, eprice, ecategory, ecode, etype) 
values('더블 치즈 엣지',
		5000,
		2,
        20,
        200
);   
insert into edge_option (ename, eprice, ecategory, ecode, etype) 
values('트리플 치즈 버스트 엣지',
		5000,
		2,
        20,
        200
);   
insert into edge_option (ename, eprice, ecategory, ecode, etype) 
values('고구마쥬 엣지',
		5000,
		2,
        20,
        200
);   

insert into edge_option (ename, eprice, ecategory, ecode, etype) 
values('프로마쥬 페퍼로니 엣지',
		5000,
		2,
        20,
        200
);


select * from edge_option;