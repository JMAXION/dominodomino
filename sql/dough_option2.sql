drop table dough_option;                
CREATE TABLE dough_option(
						  did INT auto_increment primary KEY ,			 -- 도우id
                          dname VARCHAR(20),			 -- 도우 이름
                          dprice INT, 					 -- 도우 가격 
                          category INT,
                          pcode INT,
                          ptype INT
                          );
                          
                          
insert into dough_option(dname, dprice,category,pcode,ptype) values ('나폴리도우', 0, 1, 50, 500);
insert into dough_option(dname, dprice,category,pcode,ptype) values ('오리지널 슈퍼시드 화이버 함유 도우', 3000,2,20,200);
insert into dough_option(dname, dprice,category,pcode,ptype) values ('나폴리 슈퍼시드  화이버 함유 도우', 3000,2,20,200);
insert into dough_option(dname, dprice,category,pcode,ptype) values ('오리지널 도우', 0,2,20,200);
insert into dough_option(dname, dprice,category,pcode,ptype) values ('나폴리 도우', 0,2,20,200);
insert into dough_option(dname, dprice,category,pcode,ptype) values ('씬 도우', 0,2,20,200);
insert into dough_option(dname, dprice,category,pcode,ptype) values ('샌드 도우(나폴리+씬 크러스트)', 0,3,30,200);
insert into dough_option(dname, dprice,category,pcode,ptype) values ('오리지널 도우', 0,1,40,300);
insert into dough_option(dname, dprice,category,pcode,ptype) values ('나폴리 도우', 0,1,40,300);
insert into dough_option(dname, dprice,category,pcode,ptype) values ('씬 도우', 0,1,40,300);
insert into dough_option(dname, dprice,category,pcode,ptype) values ('오리지널 슈퍼시드 화이버 함유 도우', 3000,2,20,400);
insert into dough_option(dname, dprice,category,pcode,ptype) values ('나폴리 슈퍼시드  화이버 함유 도우', 3000,2,20,400);
insert into dough_option(dname, dprice,category,pcode,ptype) values ('오리지널 도우', 0,2,20,400);
insert into dough_option(dname, dprice,category,pcode,ptype) values ('나폴리 도우', 0,2,20,400);
insert into dough_option(dname, dprice,category,pcode,ptype) values ('씬 도우', 0,2,20,400);
