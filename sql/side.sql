 use hrdb2019;
 drop table side;
CREATE TABLE side (	   sid INT AUTO_INCREMENT PRIMARY KEY,
					   sname VARCHAR(50),   -- 사이드 이름
                       simage VARCHAR(200), -- 사이드 이미지
                       skind VARCHAR(50),   -- 사이드 종류 예) 특가, 일반
                       sprice INT,   -- 사이드 가격
                       lable VARCHAR(5), -- 아이콘
                       desc1 VARCHAR(100), 	-- 설명1 예) #바다와 육지의 대왕이 하나로
                       country VARCHAR(500), -- 원산지 정보
                       topping VARCHAR(500), -- 토핑정보
                       quantity INT,
                       category varchar(5) -- 콤보, 단품
						);
                        
 insert into side(sname, simage, skind, sprice, lable, desc1, country, topping, quantity, category)	
	values ('가필드 콤보', 'https://cdn.dominos.co.kr/admin/upload/goods/20240502_5UR8wsMs.jpg', NULL, 10900, '기간한정', NULL, NULL, NUll, 1, '콤보');
 insert into side(sname, simage, skind, sprice, lable, desc1, country, topping, quantity, category)
	values ('마라 로제 파스타 콤보', 'https://cdn.dominos.co.kr/admin/upload/goods/20240411_0Rb789w1.jpg', '특가', 9800, '특가', NULL, NULL, NUll, 1, '콤보');
 insert into side(sname, simage, skind, sprice, lable, desc1, country, topping, quantity, category)
	values ('파스타 콤보', 'https://cdn.dominos.co.kr/admin/upload/goods/20230901_BobKiGYD.jpg', '특가', 9800, '특가', NULL, NULL, NUll, 1, '콤보');
 insert into side(sname, simage, skind, sprice, lable, desc1, country, topping, quantity, category)
	values ('핫 윙 콤보', 'https://cdn.dominos.co.kr/admin/upload/goods/20230901_MFKm8uY6.jpg', '특가', 9800, '특가', NULL, NULL, NUll, 1, '콤보');
 insert into side(sname, simage, skind, sprice, lable, desc1, country, topping, quantity, category)
	values ('가필드 맥앤치즈 파스타', 'https://cdn.dominos.co.kr/admin/upload/goods/20240502_m83lGAc1.jpg', NULL, 9800, '기간한정', '[ 도미노 X 가필드 ] 세계에서 가장 유명한 고양이 가필드 콜라보! 치즈냥이 가필드를 닮은 맥앤치즈 볼로네즈 소스가 듬뿍! 짭잘고소한 파스타', '베이컨칩[베이컨류(돼지고기): 외국산, 돼지고기: 미국산]', NUll, 1, '단품');
 insert into side(sname, simage, skind, sprice, lable, desc1, country, topping, quantity, category)
	values ('마라 로제 파스타', 'https://cdn.dominos.co.kr/admin/upload/goods/20240411_FUoVNT9z.jpg', '특가',9800, 'NEW', '얼얼한 풍미의 마라 불고기와 부드러운 로제 소스가 조화를 이루는 파스타', '마라 포크 크럼블(돼지고기): 국내산', NUll, 1, '단품');
 insert into side(sname, simage, skind, sprice, lable, desc1, country, topping, quantity, category)
	values ('하프&하프 스파게티 (NEW 치즈&베이컨 까르보나라)','https://cdn.dominos.co.kr/admin/upload/goods/20240411_WUb7FhFZ.jpg', '일반', 10800, 'NEW', 'New 치즈 볼로네즈 스파게티와 베이컨 까르보나라 스파게티를 동시에!', '베이컨칩[베이컨류(돼지고기): 외국산, 돼지고기: 미국산] / 베이컨(돼지고기): 외국산', NUll, 1, '단품');
 insert into side(sname, simage, skind, sprice, lable, desc1, country, topping, quantity, category)
	values ('베이컨 까르보나라 스파게티', 'https://cdn.dominos.co.kr/admin/upload/goods/20240411_204X0EOd.jpg', '일반', 9800, 'NEW', NULL, '베이컨칩[베이컨류(돼지고기): 외국산, 돼지고기: 미국산] / 베이컨(돼지고기): 외국산', NUll, 1, '단품');
 insert into side(sname, simage, skind, sprice, lable, desc1, country, topping, quantity, category)
	values ('NEW 치즈 볼로네즈 스파게티', 'https://cdn.dominos.co.kr/admin/upload/goods/20200309_nwnlf8dv.jpg', '일반', 9800, NULL, '신선한 토마토만을 골라 만든 신선한 소스에 다진 쇠고기와 버섯까지 듬뿍! 자연의 깊은 맛과 치즈의 풍부한 맛이 어우러지는 정통 이탈리안 파스타!', NULL, NUll, 1, '단품');
 insert into side(sname, simage, skind, sprice, lable, desc1, country, topping, quantity, category)
	values ('웨스턴 핫 윙(8조각)', 'https://cdn.dominos.co.kr/admin/upload/goods/20220304_CN2qUKo1.jpg', '일반', 9800, NULL, '웨스턴 스타일로 매콤하게 오븐에 구워낸 웨스턴 핫 윙', '웨스턴 핫 윙(태국산)', NUll, 1, '단품');
 insert into side(sname, simage, skind, sprice, lable, desc1, country, topping, quantity, category)
	values ('하프&하프 스파게티 (NEW 치즈&베이컨 까르보나라 페투치니','https://cdn.dominos.co.kr/admin/upload/goods/20210601_Q8dpaikh.jpg', NULL, 10800, NULL, NULL, '베이컨칩[베이컨류(돼지고기): 외국산, 돼지고기: 미국산] / 베이컨(돼지고기): 외국산', NUll, 1, '단품');
 insert into side(sname, simage, skind, sprice, lable, desc1, country, topping, quantity, category)
	values ('베이컨 까르보나라 페투치니', 'https://cdn.dominos.co.kr/admin/upload/goods/20210601_0TMFSE78.jpg', NULL, 9800, NULL, NULL, '베이컨칩[베이컨류(돼지고기): 외국산, 돼지고기: 미국산] / 베이컨(돼지고기): 외국산', '까르보나라 소스, 베이컨칩, 베이컨, 모차렐라, 파슬리 드라이', 1, '단품');
 insert into side(sname, simage, skind, sprice, lable, desc1, country, topping, quantity, category)
	values ('도미노 코울슬로', 'https://cdn.dominos.co.kr/admin/upload/goods/20200309_Z7RyBpr3.jpg', '일반', 2400, NULL, '아삭아삭 양배추와 각종 야채를 소스에 버무려 새콤달콤한 맛이 가득! ※ 해당 제품은 신선도를 위해 플라스틱 용기에 제공됩니다.', NULL, NUll, 1, '단품');
 
 select sid, sname, simage, skind, concat(format(sprice,0),원) as sprice, lable, desc1, country, topping, quantity, category from side;
 
 select sid, sname, simage, skind, sprice, lable, desc1, country, topping, quantity, category from side
	where sid = 1;
 select sid, sname, simage, skind, concat(format(sprice,0),'원') as sprice, lable, desc1, country, topping, quantity, category from side;
