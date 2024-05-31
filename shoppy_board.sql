-- 테이블 생성 아이디 제목 내용 조회수 등록일자alter
create table shoppy_board(
BID INT auto_increment primary key,
BTITLE varchar(50) NOT NULL,
BCONTENT varchar(200),
BHITS INT,
BDATE datetime
);

-- shoppy로 시작하는 모든 테이블 검색

SELECT * FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_NAME LIKE 'shoppy%';


select * FROm shoppy_product;

use hrdb2019;

select * from shoppy_board;	


INSERT INTO shoppy_board(BTITLE, BCONTENT,	 BHITS, BDATE) VALUES(1, 1, 0, now());


select bid, btitle, bcontent, bhits, LEFT(bdate,10) from shoppy_board;

set sql_safe_updates = 0;

delete from shoppy_board 
where bid = 2;

select  row_number() over (order by bdate desc) as rno, bid, btitle, bcontent, bhits, LEFT(bdate,10) from shoppy_board;

select  row_number() over (order by bdate desc) as rno, bid, btitle, bcontent, bhits, CAST(bdate as CHAR) from shoppy_board
    where bid = 1;
    
    
    select * from shoppy_product;
    
    delete from shoppy_product;
    
update shoppy_board SET bhits = bhits+1
    where bid = 1;
    
    select * FROM shoppy_board;