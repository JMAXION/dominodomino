use hrdb2019;
select database();

-- 테이블 생성
create table domino_newsBoard(
	bid			int			auto_increment primary key,
	btitle		varchar(50)	not null,
    bcontent	varchar(200),
    bhits 		int,
    bdate		datetime
);

select * from domino_newsBoard;

