 use hrdb2019;
 drop table side;
CREATE TABLE side (	   sid INT AUTO_INCREMENT PRIMARY KEY,
					   sname VARCHAR(50),   -- 사이드 이름
                       simage VARCHAR(200), -- 사이드 이미지
                       skind VARCHAR(50),   -- 사이드 종류 예) 특가, 일반
                       sprice INT,   -- 사이드 가격
                       quantity INT
						);
                        
 insert into side(sname, simage, skind,sprice,quantity) values ('[NEW] Sonny 사이드 업 파스타','https://cdn.dominos.co.kr/admin/upload/goods/20240523_74n9oEM7.jpg','normal',9800,0);
 insert into side(sname, simage, skind,sprice,quantity) values ('[NEW] Sonny 피시 앤 칩스','https://cdn.dominos.co.kr/admin/upload/goods/20240523_7MUI9c01.jpg','normal',7700,0);
 insert into side(sname, simage, skind,sprice,quantity) values ('마라 로제 파스타','https://cdn.dominos.co.kr/admin/upload/goods/20240411_p8Vqz1P8.jpg','normal',9800,0);
 insert into side(sname, simage, skind,sprice,quantity) values ('하프&하프 스파게티 (NEW 치즈&베이컨 까르보나라)','https://cdn.dominos.co.kr/admin/upload/goods/20240411_DnNI3bPq.jpg','normal',10800,0);
 insert into side(sname, simage, skind,sprice,quantity) values ('NEW 치즈 볼로네즈 스파게티','https://cdn.dominos.co.kr/admin/upload/goods/20200316_oK536isq.jpg','normal',9800,0);
 insert into side(sname, simage, skind,sprice,quantity) values ('웨스턴 핫 윙(8조각)','https://cdn.dominos.co.kr/admin/upload/goods/20220304_114RUEW2.jpg','normal',9800,0);
  insert into side(sname, simage, skind,sprice,quantity) values ('도미노 코울슬로','https://cdn.dominos.co.kr/admin/upload/goods/20200316_oi9xdc8U.jpg','normal',2400,0);
 
 
 select sid,sname,simage,skind,sprice,quantity from side;