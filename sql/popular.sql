use hrdb2019;

drop table combomeal;
CREATE TABLE combomeal (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(10),
    text varchar(100),
    image1 varchar(100),
    image2 varchar(100)
);

insert into combomeal(name, text, image1, image2)
	values (
		'콤보 밀',
        '#도미노의 인기 사이드디시를 할인된 가격으로 즐겨보세요',
        'https://cdn.dominos.co.kr/admin/upload/event/20230519_217DoRW3.jpg',
        'https://cdn.dominos.co.kr/admin/upload/event/20230518_9qWbS5f4.jpg'
    );
 
 select id, name, text, image1, image2 from combomeal;

drop table popular;
CREATE TABLE popular (
			pid INT AUTO_INCREMENT PRIMARY KEY,
            pname varchar(10), -- 이지 콤보 밀, 퍼스널 콤보 밀
            pprice INT, -- 콤보밀 가격
            pkcal INT, -- 콤보밀 칼로리
            ptext varchar(100)
);

insert into popular (pname, pprice, pkcal, ptext)
	values (
		'이지 콤보 밀',
        15900,
        1588,
        'NEW 치즈 볼로네즈 스파게티, 웨스턴 핫 윙, 콜라 1.25L'
        );
        
insert into popular (pname, pprice, pkcal, ptext)
	values (
    '퍼스널 콤보 밀',
    17900,
    1693,
    'NEW 치즈 볼로네즈 스파게티, 웨스턴 핫 윙, 도미노 코울슬로, 콜라 1.25L'
    );
        
select * from popular;