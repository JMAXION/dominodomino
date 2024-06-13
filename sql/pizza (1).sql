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
								









   

		