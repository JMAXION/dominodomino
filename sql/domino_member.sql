use hrdb2019;
select database();

/*
domino 프로젝트 관련 테이블
1) domino_member : 회원가입, 로그인, 아이디중복체크
*/
-- 입력폼의 name = 서버 = 테이블의 column 이름

-- domino_member
drop table domino_member;
create table domino_member(
uid INT auto_increment primary key,
user_id varchar(30) not null,
user_pass varchar(80) not null,
user_name varchar(10) not null,
email_id varchar(20) not null,
email_domain varchar(20) not null,
phone char(13) not null,
zipcode char(5),
address  varchar(40),
signup_date datetime
);
drop table domino_member;
show tables;
-- shoppy 시작하는 모든 테이블 조회 : information)schema.tables
select * from information_schema.tables where table_name like 'domino%';

desc domino_member;
select * from domino_member;
select count(user_id) user_id from shoppy_member where user_id = '';

-- shoppy_member의 user_pass column 사이즈를 varchar(80)으로 변경
alter table domino_member modify column user_pass varchar(80) not null;
desc domino_member;

-- 아이디 중복체크
select count(user_id) cnt from domino_member where user_id = 'alter';

select user_id from domino_member
where user_id = 'test123';


-- 로그인 (any_value(user_pass) user_pass 라고 예전에는 사용했음)
select count(user_id) cnt, any_value(user_pass) user_pass, any_value(user_name) user_name from domino_member where user_id = 'test';

delete  from domino_member where user_id = "domino"