use hrdb2019;
drop table topping;
CREATE TABLE topping ( tid INT AUTO_INCREMENT PRIMARY KEY,
					   tname VARCHAR(50),   -- 토핑 이름
                       timage VARCHAR(200), -- 토핑 이미지
                       tkind VARCHAR(50),   -- 토핑 종류 예) mainTopping, cheeseTopping, 퐁듀토핑
                       tprice INT   -- 토핑 가격
						);
                        
                        select * from topping;
          
insert into topping (tname, timage, tkind, tprice) values ('맥앤치즈소스 60g','https://cdn.dominos.co.kr/admin/upload/topping/RTP245.jpg','main',2000);
insert into topping (tname, timage, tkind, tprice) values ('할라피뇨 25g','https://cdn.dominos.co.kr/admin/upload/topping/RTP244.jpg','main',1000);
insert into topping (tname, timage, tkind, tprice) values ('마라 포크 크럼블 45g','https://cdn.dominos.co.kr/admin/upload/topping/RTP243.jpg','main',2500);
insert into topping (tname, timage, tkind, tprice) values ('이탈리안 페퍼 소시지 25g','https://cdn.dominos.co.kr/admin/upload/topping/RTP242.jpg','main',2500);
insert into topping (tname, timage, tkind, tprice) values ('브리스킷 스테이크 40g','https://cdn.dominos.co.kr/admin/upload/topping/RTP241.jpg','main',5000);
insert into topping (tname, timage, tkind, tprice) values ('포토벨로 양송이 20g','https://cdn.dominos.co.kr/admin/upload/topping/RTP240.jpg','main',1000);
insert into topping (tname, timage, tkind, tprice) values ('치킨큐브 30g','https://cdn.dominos.co.kr/admin/upload/topping/RTP239.jpg','main',1500);
insert into topping (tname, timage, tkind, tprice) values ('아보카도 큐브 30g','https://cdn.dominos.co.kr/admin/upload/topping/RTP238.jpg','main',1500);
insert into topping (tname, timage, tkind, tprice) values ('로스트 방울 토마토 다이스 10g','https://cdn.dominos.co.kr/admin/upload/topping/RTP232.jpg','main',1000);
insert into topping (tname, timage, tkind, tprice) values ('꼬리 알새우 27g(4개)','https://cdn.dominos.co.kr/admin/upload/topping/RTP226.jpg','main',2500);
insert into topping (tname, timage, tkind, tprice) values ('호스래디시 스퀴드(플라워스퀴드) 25g','https://cdn.dominos.co.kr/admin/upload/topping/RTP216.jpg','main',1500);
insert into topping (tname, timage, tkind, tprice) values ('리얼 불고기 70g','https://cdn.dominos.co.kr/admin/upload/topping/RTP211.jpg','main',4500);
insert into topping (tname, timage, tkind, tprice) values ('고구마 큐브 40g','https://cdn.dominos.co.kr/admin/upload/topping/RTP200.jpg','main',1500);
insert into topping (tname, timage, tkind, tprice) values ('랍스터 살 50g','https://cdn.dominos.co.kr/admin/upload/topping/RTP197.jpg','main',4000);
insert into topping (tname, timage, tkind, tprice) values ('블랙타이거 슈림프 60g(4개)','https://cdn.dominos.co.kr/admin/upload/topping/RTP192.jpg','main',6000);
insert into topping (tname, timage, tkind, tprice) values ('그릴드비프(직화 스테이크) 35g','https://cdn.dominos.co.kr/admin/upload/topping/RTP190.jpg','main',3000);
insert into topping (tname, timage, tkind, tprice) values ('올리브 20g','https://cdn.dominos.co.kr/admin/upload/topping/RTP059.jpg','main',300);
insert into topping (tname, timage, tkind, tprice) values ('파인애플 40g(8개)','https://cdn.dominos.co.kr/admin/upload/topping/RTP051.jpg','main',500);
insert into topping (tname, timage, tkind, tprice) values ('버섯 20g','https://cdn.dominos.co.kr/admin/upload/topping/RTP054.jpg','main',300);
insert into topping (tname, timage, tkind, tprice) values ('베이컨 24g(8개)','https://cdn.dominos.co.kr/admin/upload/topping/RTP042.jpg','main',1500);
insert into topping (tname, timage, tkind, tprice) values ('페퍼로니 20g(8개)','https://cdn.dominos.co.kr/admin/upload/topping/RTP045.jpg','main',500);
insert into topping (tname, timage, tkind, tprice) values ('감자 80g (8개)','https://cdn.dominos.co.kr/admin/upload/topping/RTP049.jpg','main',1000);
insert into topping (tname, timage, tkind, tprice) values ('햄 28g(8개)','https://cdn.dominos.co.kr/admin/upload/topping/RTP044.jpg','main',500);
insert into topping (tname, timage, tkind, tprice) values ('마요네즈 30g','https://cdn.dominos.co.kr/admin/upload/topping/RTP151.jpg','main',500);
insert into topping (tname, timage, tkind, tprice) values ('베이컨칩 30g','https://cdn.dominos.co.kr/admin/upload/topping/RTP116.jpg','main',1500);
insert into topping (tname, timage, tkind, tprice) values ('로스트 포테이토 70g','https://cdn.dominos.co.kr/admin/upload/topping/RTP063.jpg','main',1500);
insert into topping (tname, timage, tkind, tprice) values ('양파 20g','https://cdn.dominos.co.kr/admin/upload/topping/RTP057.jpg','main',300);
insert into topping (tname, timage, tkind, tprice) values ('옥수수 40g','https://cdn.dominos.co.kr/admin/upload/topping/RTP056.jpg','main',300);
insert into topping (tname, timage, tkind, tprice) values ('피망 20g','https://cdn.dominos.co.kr/admin/upload/topping/RTP053.jpg','main',300);
insert into topping (tname, timage, tkind, tprice) values ('불고기 40g','https://cdn.dominos.co.kr/admin/upload/topping/RTP048.jpg','main',1000);
insert into topping (tname, timage, tkind, tprice) values ('포크 20g','https://cdn.dominos.co.kr/admin/upload/topping/RTP047.jpg','main',300);

insert into topping (tname, timage, tkind, tprice) values ('리코타 치즈 30g','https://cdn.dominos.co.kr/admin/upload/topping/RTP198.jpg','cheese',2500);
insert into topping (tname, timage, tkind, tprice) values ('도미노치즈 100g','https://cdn.dominos.co.kr/admin/upload/topping/RTP036.jpg','cheese',3300);
insert into topping (tname, timage, tkind, tprice) values ('체더치즈 40g','https://cdn.dominos.co.kr/admin/upload/topping/RTP037.jpg','cheese',1500);

insert into topping (tname, timage, tkind, tprice) values ('콰트로 치즈 퐁듀 20g','https://cdn.dominos.co.kr/admin/upload/topping/RTP193.jpg','after',1000);