use hrdb2019;
create table event( id INT AUTO_INCREMENT PRIMARY KEY ,
					image VARCHAR(100) NOT NULL,
                    title VARCHAR(30),
                    start_date VARCHAR(10),
                    end_date VARCHAR(10),
                    detail_image VARCHAR(100)
                    );
                   
     
                    
insert into event (image,title,start_date, end_date,detail_image) values('https://cdn.dominos.co.kr/admin/upload/event/20240403_PjgUyz68.jpg','목요일 \n Special Day','2024-05-23','2024-05-23','https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1236_Efd23fK3.jpg');
insert into event (image,title,start_date, end_date,detail_image) values('https://cdn.dominos.co.kr/admin/upload/event/20240507_62h4vr7C.jpg','5월 KT Y포차','2024-05-08','2024-05-31','https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1247_EUk0F8TV.jpg');
insert into event (image,title,start_date, end_date,detail_image) values('https://cdn.dominos.co.kr/admin/upload/event/20240429_7AY39saW.jpg','가필드 후드타월 추첨증정 EVENT','2024-05-03','2024-05-31','https://cdn.dominos.co.kr/renewal2018/w/event/240503_gafield/gafield3D3dvq.jpg');
insert into event (image,title,start_date, end_date,detail_image) values('https://cdn.dominos.co.kr/admin/upload/event/20240430_2779Ne0E.jpg','도퀴즈','2024-05-03','2024-05-30','https://cdn.dominos.co.kr/renewal2018/w/event/230503_doquiz/01_doquiz_w.jpg');
insert into event (image,title,start_date, end_date,detail_image) values('https://cdn.dominos.co.kr/admin/upload/event/20240429_I9SJP0L4.jpg','May be Together! 모두 도미노와 만나요!','2024-05-03','2024-05-30','https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1245_ed34d2CC.jpg');
insert into event (image,title,start_date, end_date,detail_image) values('https://cdn.dominos.co.kr/admin/upload/event/20240502_G32AKC6J.jpg','[도미노X가필드] 가필드 맥앤치즈 파스타 출시!','2024-05-03','2024-05-31','https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1244_gafield3D3dvq.jpg');
insert into event (image,title,start_date, end_date,detail_image) values('https://cdn.dominos.co.kr/admin/upload/event/20240208_Pi38Uiad.jpg','해피 데일리 피자 쿠폰 챌린지','2024-02-16','2024-06-30','https://cdn.dominos.co.kr/renewal2018/w/event/240202_hdp/images/1_img_login.jpg');
insert into event (image,title,start_date, end_date,detail_image) values('https://cdn.dominos.co.kr/admin/upload/event/20240502_btixYTd6.jpg','도미노스데이: 모든 피자 포장 40% 할인','2024-05-07','2024-05-28','https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1241_e42VDg3R.jpg');
insert into event (image,title,start_date, end_date,detail_image) values('https://cdn.dominos.co.kr/admin/upload/event/20240326_4t0CgizS.jpg','해피 데일리 피자! 이제 하프앤하프로 매일매일 만나요!','2024-03-29','2024-12-31','https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1230_l7LN1rK2.jpg');
insert into event (image,title,start_date, end_date,detail_image) values('https://cdn.dominos.co.kr/admin/upload/event/20240408_C4cXSPBX.jpg','새봄 파스타 페스타','2024-04-12','2024-12-31','https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1230_l7LN1rK2.jpg');

select * from event;

drop table event;