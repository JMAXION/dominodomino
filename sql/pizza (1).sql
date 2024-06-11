use hrdb2019;

drop table pizza;
CREATE TABLE pizza ( pid INT AUTO_INCREMENT PRIMARY KEY,
					 menuimg VARCHAR(300),
                     halfimg VARCHAR(300),
                     lable VARCHAR(30),    -- new, 시그니처 아이콘
                     pname VARCHAR(30),     -- 피자 이름
                     lprice INT, 			-- 라지 사이즈 가격
                     mprice INT, 			-- 미디움 사이즈 가격
                     desc1 VARCHAR(100), 	-- 설명1 예) #바다와 육지의 대왕이 하나로
                     desc2 VARCHAR(100),   -- 설명2
                     country VARCHAR(500), -- 원산지 정보
					 topping VARCHAR(500), -- 토핑정보
					 category INT,
                     pcode INT, 
                     ptype INT, 
                     did INT,
                     ecategory INT,
                     ecode INT,
                     etype INT,
                       CONSTRAINT FK_did_pizza FOREIGN KEY (did) REFERENCES dough_option(did)
                     );
  
select pid, menuimg, pname, concat(format(lprice,0),'원') as lprice, concat(format(mprice,0),'원') as mprice, desc1, desc2, mcategory from pizza
where mcategory = 'new';
select * from pizza;
                          
-- 토핑은 어느 피자를 고르든 다 똑같기 때문에 테이블을 따로 정의 
drop table topping;
CREATE TABLE topping ( tid INT AUTO_INCREMENT PRIMARY KEY,
					   tname VARCHAR(50),   -- 토핑 이름
                       timage VARCHAR(200), -- 토핑 이미지
                       tkind VARCHAR(50),   -- 토핑 종류 예) mainTopping, cheeseTopping, 퐁듀토핑
                       tprice INT   -- 토핑 가격
						);
                        select * from topping;
                        
 -- 사이드는 어느 피자를 고르든 다 똑같기 때문에 테이블을 따로 정의 
 drop table side;
CREATE TABLE side (	   sid INT AUTO_INCREMENT PRIMARY KEY,
					   sname VARCHAR(50),   -- 사이드 이름
                       simage VARCHAR(200), -- 사이드 이미지
                       skind VARCHAR(50),   -- 사이드 종류 예) 특가, 일반
                       sprice INT   -- 사이드 가격
						);
                        
 -- 음료,기타는 어느 피자를 고르든 다 똑같기 때문에 테이블을 따로 정의    
 drop table drink_beverage;
CREATE TABLE drink_beverage( 
					   bid INT AUTO_INCREMENT PRIMARY KEY,
					   bname VARCHAR(50),   -- 음료 이름
                       bimage VARCHAR(200), -- 음료 이미지
                       bprice INT   -- 음료 가격
						);
                                                









   

		