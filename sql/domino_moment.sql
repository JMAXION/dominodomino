use hrdb2019;

create table domino_moment(
	mid			int				auto_increment	primary key,	
	user_id 	varchar(30),
    momentDesc1	varchar(100),
    savedMonth1	int,
    savedDay1	int,
    momentDesc2	varchar(100),
    savedMonth2	int	,
    savedDay2	int	,
    momentDesc3	varchar(100),
    savedMonth3	int,
    savedDay3	int
);

select * from domino_moment;
drop table domino_moment;

     
select momentDesc1, savedMonth1, savedDay1, momentDesc2, savedMonth2, savedDay2, momentDesc3, savedMonth3, savedDay3
	from domino_moment
    where user_id = 'test';

set sql_safe_updates = 0;
     update domino_moment
        set momentDesc1 = '수정', savedMonth1 = 3, savedDay1 = 11
        where user_id = 'test';