use hrdb2019;
create table main_discount( id INT AUTO_INCREMENT PRIMARY KEY ,
					image VARCHAR(100) NOT NULL,
                    title VARCHAR(30),
                    start_date VARCHAR(10),
                    end_date VARCHAR(10),
                    detail_image VARCHAR(100)
                    );
             
             
insert into main_discount (image,title,start_date, end_date,detail_image) values('https://cdn.dominos.co.kr/admin/upload/event/20221230_10JkHgR5.jpg','KT 생일쿠폰 프로모션','2023-01-01','2024-12-31','https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/event_list1117.jpg');
insert into main_discount (image,title,start_date, end_date,detail_image) values('https://cdn.dominos.co.kr/admin/upload/event/20240116_9gEqjBuu.jpg','KT VVIP 전용 프로모션','2020-07-01','2024-12-31','https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/1212_KTVVvd2w.jpg');
insert into main_discount (image,title,start_date, end_date,detail_image) values('https://cdn.dominos.co.kr/admin/upload/event/20230817_cimb8wbd.jpg','현대카드 M포인트면 모든 제품이 50%포인트 차감결제','2023-08-11','2024-08-10','https://cdn.dominos.co.kr/renewal2018/w/img/specials_event/220908_hdcard.jpg');

select * from main_discount;

