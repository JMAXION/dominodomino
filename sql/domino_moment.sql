use hrdb2019;

create table domino_moment(
	mid			int				auto_increment	primary key,	
	user_id 	varchar(30),
    momentDesc1	varchar(100),
    savedMonth1	int		not null,
    savedDay1	int		not null,
    momentDesc2	varchar(100),
    savedMonth2	int		not null,
    savedDay2	int		not null,
    momentDesc3	varchar(100),
    savedMonth3	int		not null,
    savedDay3	int		not null,
);

select * from domino_moment;
drop table domino_moment;

 insert domino_moment(user_id, momentDesc, savedMonth, savedDay)
	 values('text', '결혼기념일', 3, 21);