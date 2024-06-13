use hrdb2019; 
drop table drink_beverage;
CREATE TABLE drink_beverage( 
					   bid INT AUTO_INCREMENT PRIMARY KEY,
					   bname VARCHAR(50),   -- 음료 이름
                       bimage VARCHAR(200), -- 음료 이미지
                       bprice INT,   -- 음료 가격
                       quantity INT
						);
                        
                 
                        
                        
INSERT INTO drink_beverage (bname, bimage, bprice, quantity)  values('코카콜라 1.25L','https://cdn.dominos.co.kr/admin/upload/goods/20200316_xko4stGP.jpg',2300,1);
INSERT INTO drink_beverage (bname, bimage, bprice, quantity)  values('코카콜라 500ml','https://cdn.dominos.co.kr/admin/upload/goods/20200316_2lmLufa0.jpg',1700,1);
INSERT INTO drink_beverage (bname, bimage, bprice, quantity)  values('코카콜라 제로 1.25L','https://cdn.dominos.co.kr/admin/upload/goods/20220114_S1MbvZL1.jpg',2300,1);
INSERT INTO drink_beverage (bname, bimage, bprice, quantity)  values('스프라이트 1.5L','https://cdn.dominos.co.kr/admin/upload/goods/20200316_kr91ng5H.jpg',2400,1);
INSERT INTO drink_beverage (bname, bimage, bprice, quantity)  values('스프라이트 500ml','https://cdn.dominos.co.kr/admin/upload/goods/20200316_aH0XAR71.jpg',1700,1);
INSERT INTO drink_beverage (bname, bimage, bprice, quantity)  values('우리 피클 L','https://cdn.dominos.co.kr/admin/upload/goods/20200316_ZiDHxA8U.jpg',800,1);
INSERT INTO drink_beverage (bname, bimage, bprice, quantity)  values('우리 피클 M','https://cdn.dominos.co.kr/admin/upload/goods/20200316_g5R87V5j.jpg',500,1);
INSERT INTO drink_beverage (bname, bimage, bprice, quantity)  values('갈릭 디핑 소스 L 30g','https://cdn.dominos.co.kr/admin/upload/goods/20240308_5bJ5Km6l.jpg',400,1);
INSERT INTO drink_beverage (bname, bimage, bprice, quantity)  values('갈릭 디핑 소스 M 15g','https://cdn.dominos.co.kr/admin/upload/goods/20200316_H1ApYYz5.jpg',200,1);
INSERT INTO drink_beverage (bname, bimage, bprice, quantity)  values('핫소스','https://cdn.dominos.co.kr/admin/upload/goods/20200316_1uKUqRes.jpg',100,1);