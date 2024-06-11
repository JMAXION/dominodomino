/* category 1 : 하프앤하프, 하프앤하프 시그니처
			2 : 공용 (프리미엄, 클래식)
            3 : 치즈크래이프
            
	pcode : 하프앤하프 : 	     10,  -- 나폴리 도우 1개 고정
			공용 :     	     20,  -- 도우 5개 고정
            치즈크래이프샌드 :    30, --전용 도우 1개
            하프앤하프 시그니쳐 : 40  --도우 3개 고정
            
    ptype : 하프앤하프, Happy Daily Pizza  : 100,
			프리미엄피자 : 		 200,
            하프앤하프 시그니처 : 300,
            클래식 : 			 400,
*/

    
    desc pizza;
    
select * from pizza where pid in (1, 2, 3, 4);
update pizza set mcategory = 'new' where pid in (1, 2, 3, 4);

select * from pizza where pid in (5, 6, 7, 8, 9, 10, 11);
update pizza set mcategory = '프리미엄' where pid in (5, 6, 7, 8, 9, 10, 11);

select * from pizza where pid in (12, 13, 14, 15);
update pizza set mcategory = '하프앤하프 시그니처' where pid in (12, 13, 14, 15);

select * from pizza where pid in (16, 17, 18, 19, 20, 21, 22, 23, 24);
update pizza set mcategory = '클래식' where pid in (16, 17, 18, 19, 20, 21, 22, 23, 24);

select * from pizza where pid in (25, 26, 27, 28, 29);
update pizza set mcategory = 'Happy Daily Pizza' where pid in (25, 26, 27, 28, 29);

    select * from pizza;
    
select pid, menuimg, pname, lprice, mprice, desc1, desc2, category, pcode, ptype, did, ecategory, ecode, etype from pizza
where pid = 2;
    
insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20240326_Td6eyIV8.jpg',
		NULL,
        'new',
		'맥콘 베이컨+클래식 리코타',
        16900,
        NULL,
        '#맥앤치즈의 고소함과 만난 클래식의 맛!',
        '#해피 데일리 피자, 매일 매일 도미노를 끝없이 만나보세요!',
        '베이컨(돼지고기) : 외국산',
        '*맥콘 베이컨: 트러플 크림 소스, 콰트로 치즈 퐁듀, 체더, 모차렐라, 맥앤치즈, 옥수수 / *클래식 리코타: 토마토 소스, 콰트로 치즈 퐁듀, 체더, 모차렐라, 백양파, 로스트 방울 토마토 다이스, 리코타 치즈',
        1, -- category
        10, -- pcode
        100, -- ptype
        1,    -- did
        1,
        10,
        100
        ); -- 
        
        
        insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did, ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20240326_Sby1plV9.jpg',
		NULL,
		'new',
		'클래식 리코타+소시지 맥스',
        17400,
        NULL,
        '#클래식 치즈의 고소함과 만난 5가지 미트!',
        '#해피 데일리 피자, 매일 매일 도미노를 끝없이 만나보세요!',
        '페퍼로니[돼지고기(국내산), 쇠고기(호주산)] / 햄(돼지고기) : 국내산 / 불고기(쇠고기) : 미국산, 호주산 섞음 / 포크(돼지고기) : 국내산 / 이탈리안 페퍼 소시지(돼지고기) : 국내산',
        '*클래식 리코타: 토마토 소스, 콰트로 치즈 퐁듀, 체더, 모차렐라, 백양파, 로스트 방울 토마토 다이스, 리코타 치즈 / *소시지 맥스: 마리나라 크림 소스, 콰트로 치즈 퐁듀, 체더, 모차렐라, 양송이, 페퍼로니, 햄, 불고기, 포크, 이탈리안 페퍼 소시지',
        1, -- category
        10, -- pcode
        100, -- ptype
        1,    -- did
        1,
        10,
        100
        ); -- 
        
insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20240326_0j7mUmht.jpg',
		NULL,
		'new',
		'맥콘 베이컨+마라 불고기',
        17400,
        NULL,
        '#고소함과 얼얼함의 콜라보!',
        '#해피 데일리 피자, 매일 매일 도미노를 끝없이 만나보세요!',
        '베이컨(돼지고기) : 외국산 / 페퍼로니[돼지고기(국내산), 쇠고기(호주산)] / 마라 포크 크럼블(돼지고기) : 국내산',
        '*맥콘 베이컨: 트러플 크림 소스, 콰트로 치즈 퐁듀, 체더, 모차렐라, 맥앤치즈, 옥수수 / *마라 불고기: 토마토 소스, 콰트로 치즈 퐁듀, 체더, 모차렐라, 페퍼로니, 청피망, 마라 포크 크럼블',
        1, -- category
        10, -- pcode
        100, -- ptype
        1,    -- did
        1,
        10,
        100
        ); --
        
insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20240326_8lirinP7.jpg',
		NULL,
        'new',
		'소시지 맥스+맵퍼로니',
        17900,
        NULL,
        '#짠맵 조합에 코카-콜라 한 잔이면 크으~',
        '#해피 데일리 피자, 매일 매일 도미노를 끝없이 만나보세요!',
        '페퍼로니[돼지고기(국내산), 쇠고기(호주산)] / 햄(돼지고기) : 국내산 / 불고기(쇠고기) : 미국산, 호주산 섞음 / 포크(돼지고기) : 국내산 / 이탈리안 페퍼 소시지(돼지고기) : 국내산',
        '*소시지 맥스 마리나라 크림 소스, 콰트로 치즈 퐁듀, 체더, 모차렐라, 양송이, 페퍼로니, 햄, 불고기, 포크, 이탈리안 페퍼 소시지 *맵퍼로니 마리나라 크림 소스, 콰트로 치즈 퐁듀, 체더, 모차렐라, 페퍼로니, 포크, 로스트 방울 토마토 다이스, 할라피뇨, 망고 하바네로 소스',
        1, -- category
        10, -- pcode
        100, -- ptype
        1,    -- did
        1,
        10,
        100
        ); -- 
        
        insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20231215_965Hu68d.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ303.png',
		NULL,
        '브리스킷 바비Q',
        34900,
        29000,
        '#4가지 페퍼(블랙, 핑크, 화이트, 그린)로 시즈닝한 육즙 가득 브리스킷 스테이크!',
        NULL,
        '브리스킷 스테이크(쇠고기) : 호주산 / 리얼 불고기(쇠고기) : 호주산',
        '아라비아타 소스, 모차렐라, 트러플 핑크 페퍼 치즈 소스, 백양파, 로스트 방울 토마토 다이스, 카사바 칩, 포토벨로 양송이, 체더, 브리스킷 스테이크, 리얼 불고기',
        2, -- category
        20, -- pcode
        200, -- ptype
        2,    -- did
        2,
        20,
        200
        ); -- 
             insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20231215_965Hu68d.jpg',
		NULL,
		NULL,
		'치즈 크레이프 샌드',
        34900,
        29000,
        '#7가지 치즈, 스테이크, 슈림프가 겹겹이 쌓인 맛의 품격!',
        '#도미노에서만 만날 수 있는 샌드 도우로 피자의 품격도 높이다!',
        '그릴드 비프(쇠고기) : 미국산',
        '토마토 소스, 대파 베이컨 크림치즈 무스, 모차렐라, 리코타 치즈, 콰트로 치즈 퐁듀(고다, 체더, 카망베르 크림치즈, 에멘탈 크림치즈), 백양파, 양송이, 로스트 방울 토마토 다이스, 파인애플, 그릴드 비프, 호스래디시 꼬리 알새우',
        3, -- category
        30, -- pcode
        200, -- ptype
        2,    -- did
        NULL,
        NULL,
        NULL
        ); -- 
insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20230619_hybtjkBv.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ290.png',
        NULL,
        '아보카도 새우',
        27900,
        20500,
        '#슈퍼시드 화이버 함유 도우로 더 맛있게!',
        NULL,
        '치킨 큐브(닭고기) : 국내산',
        '토마토 소스, 모차렐라, 페터, 백양파, 양송이, 아보카도 큐브, 로스트 방울 토마토 다이스, 블랙 올리브, 체더, 치킨 큐브, 케이준 꼬리 알새우, 아보카도 랜치 소스',
        2, -- category
        20, -- pcode
        200, -- ptype
        2,    -- did
        2,
        20,
        200
        ); --    
insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20220830_c3Lh4i3H.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ271.png',
		NULL,
        '와일드 와일드 웨스트 스테이크',
        33900,
        28000,
        '#‘카우보이’들이 즐겨 먹던 정통  [그릴드 비프 스테이크]의 재현!',
        '#‘그릴드 비프’와 ‘카우보이 버터 치즈 소스’로 만들어 내는 맛의 조화!',
        '리얼 불고기(쇠고기) : 호주산 / 그릴드 비프(쇠고기) : 미국산',
        '마리나라 크림 소스, 모차렐라, 토마토 소스, 백양파, 양송이, 로스트 포테이토, 로스트 방울 토마토 다이스, 체더, 카우보이 버터 치즈 소스, 리얼 불고기, 그릴드 비프',
        2, -- category
        20, -- pcode
        200, -- ptype
        2,    -- did
        2,
        20,
        200
        ); -- 
insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20200508_780B32i8.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ147.png',
		'시그니처',
        '블랙타이거 슈림프',
        36900,
        30000,
        '#바다와 육지의 대왕이 하나로',
        NULL,
        '리얼불고기(쇠고기) : 호주산',
        '블랙타이거 슈림프, 리얼 불고기, 구운감자, 양송이, 청피망, 백양파, 파인애플콰트로치즈퐁듀(고다, 체더, 카망베르, 에멘탈), 모차렐라, 로마노크림, 체더, 망고하바네로 소스, 호스래디시 소스',
        2, -- category
        20, -- pcode
        200, -- ptype
        2,    -- did
        2,
        20,
        200
        ); -- 
insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20240202_sbiAs79R.jpg',
		NULL,
        NULL,
		'블록버스터4',
        36900,
        29500,
        '#4개 도시의 프리미엄 요리를 품은 블록버스터급 콰트로 피자!',
        NULL,
        '베이컨칩[베이컨류(돼지고기):외국산, 돼지고기:미국산], 리얼 불고기(쇠고기) : 호주산, 그릴드 비프(쇠고기) : 미국산, 호스래디시 스퀴드(플라워 스퀴드) : 중국산',
        '아라비아타 소스, 모차렐라, 리코타 치즈, 백양파, 양송이, 청피망, 로스트 포테이토, 옥수수, 파인애플, 베이컨 칩, 체더 치즈, 리얼 불고기, 그릴드 비프, 꼬리 알새우, 호스래디시 스퀴드, 랍스터볼, 케이준 소스, 토마토 소스, 콰트로 치즈 퐁듀',
        2, -- category
        20, -- pcode
        200, -- ptype
        2,    -- did
        2,
        20,
        200
        );
 insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20240202_0Ygu00x1.jpg',
		NULL,
        NULL,
		'베스트 콰트로',
        36900,
        29500,
        '#4가지 피자를 한판에',
        NULL,
        '베이컨(돼지고기) : 외국산, 페퍼로니[돼지고기(국내산), 쇠고기(호주산)], 햄(돼지고기) : 국내산, 불고기(쇠고기) : 미국산, 호주산 섞음, 포크(돼지고기) : 국내산, 리얼 불고기(쇠고기) : 호주산, 그릴드 비프(쇠고기) : 미국산',
        '아라비아타 소스, 모차렐라 치즈, 토마토 소스, 로마노 크림 치즈, 양송이, 청피망, 백양파, 옥수수, 파인애플, 로스트 방울 토마토 다이스, 로스트 포테이토, 감자, 카우보이 버터 치즈 소스, 베이컨, 페퍼로니, 햄, 불고기, 포크, 올리브, 모차렐라, 체더, 리얼 불고기, 그릴드 비프, 블랙타이거 슈림프, 호스래디시 소스, 마요네즈',
        2, -- category
        20, -- pcode
        200, -- ptype
        2,    -- did
        2,
        20,
        200
        );       
 insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20231227_0BKB2s9e.jpg',
		NULL,
        NULL,
		'포테이토+블랙타이거 슈림프',
        32400,
        NULL,
        '#1999 포테이토 헤리티지 에디션',
        NULL,
        '베이컨(돼지고기) : 외국산 / 리얼불고기(쇠고기) : 호주산',
        '*포테이토 모차렐라 치즈, 백양파, 버섯, 옥수수, 감자, 베이컨, 마요네즈, 토마토 소스 *블랙타이거 슈림프 블랙타이거 슈림프, 리얼 불고기, 구운감자, 양송이, 청피망, 백양파, 파인애플, 콰트로치즈퐁듀(고다, 체더, 카망베르, 에멘탈), 모차렐라, 로마노크림, 체더, 망고하바네로 소스, 호스래디시 소스',
        1, -- category
        40, -- pcode
        300, -- ptype
        3,    -- did
        2,
        20,
        200
        );
 insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20231228_CjNhF3p6.jpg',
		NULL,
        NULL,
		'포테이토+브리스킷 바비Q',
        31400,
        NULL,
        '#1999 포테이토 헤리티지 에디션',
        NULL,
        '베이컨(돼지고기) : 외국산 / 브리스킷 스테이크(쇠고기) : 호주산 / 리얼 불고기(쇠고기) : 호주산',
        '*포테이토 모차렐라 치즈, 백양파, 버섯, 옥수수, 감자, 베이컨, 마요네즈, 토마토 소스 *브리스킷 바비Q 아라비아타 소스, 모차렐라, 트러플 핑크 페퍼 치즈 소스, 백양파, 로스트 방울 토마토 다이스, 카사바 칩, 포토벨로 양송이, 체더, 브리스킷 스테이크, 리얼 불고기',
        1, -- category
        40, -- pcode
        300, -- ptype
        3,    -- did
        2,
        20,
        200
        );
 insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20231228_0c8FwrVd.jpg',
		NULL,
        NULL,
		'포테이토+와일드 와일드 웨스트 스테이크',
        30900,
        NULL,
        '#1999 포테이토 헤리티지 에디션',
        NULL,
        '베이컨(돼지고기) : 외국산 / 리얼 불고기(쇠고기) : 호주산 / 그릴드 비프(쇠고기) : 미국산',
        '*포테이토 모차렐라 치즈, 백양파, 버섯, 옥수수, 감자, 베이컨, 마요네즈, 토마토 소스 *와일드 와일드 웨스트 스테이크 마리나라 크림 소스, 모차렐라, 토마토 소스, 백양파, 양송이, 로스트 포테이토, 로스트 방울 토마토 다이스, 체더, 카우보이 버터 치즈 소스, 리얼 불고기, 그릴드 비프',
        1, -- category
        40, -- pcode
        300, -- ptype
        3,    -- did
        2,
        20,
        200
        );  
 insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20231228_06rzLr6l.jpg',
		NULL,
        NULL,
		'포테이토+아보카도 새우',
        27900,
        NULL,
        '#1999 포테이토 헤리티지 에디션',
        NULL,
        '베이컨(돼지고기) : 외국산 / 치킨 큐브(닭고기) : 국내산',
        '*포테이토 모차렐라 치즈, 백양파, 버섯, 옥수수, 감자, 베이컨, 마요네즈, 토마토 소스 *아보카도 새우 토마토 소스, 모차렐라, 페터, 백양파, 양송이, 아보카도 큐브, 로스트 방울 토마토 다이스, 블랙 올리브, 체더, 치킨 큐브, 케이준 꼬리 알새우, 아보카도 랜치 소스',
        1, -- category
        40, -- pcode
        300, -- ptype
        3,    -- did
        2,
        20,
        200
        );  
        
         insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20200311_M9Q50gtd.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ011.png',
        '시그니처',
		'포테이토',
        27900,
        20500,
        '#도미노피자 No.1 레전드',
        NULL,
        '베이컨(돼지고기) : 외국산',
        '모차렐라 치즈, 양파, 버섯, 옥수수, 감자, 베이컨, 마요네즈, 토마토 소스',
        2, -- category
        20, -- pcode
        400, -- ptype
        4,    -- did
        2,
        20,
        200
        );
                 insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20210226_GYHC7RpD.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ223.png',
        NULL,
		'뉴욕 오리진',
        29900,
        22500,
        '#다채로운 토핑의 미국 피자 오리진 스타일',
        NULL,
        '페퍼로니[돼지고기(국내산), 쇠고기(호주산)] / 베이컨칩[베이컨류(돼지고기):외국산, 돼지고기:미국산]/ 불고기(쇠고기) : 미국산, 호주산 섞음 / 포크(돼지고기) : 국내산',
        '토마토 소스, 모차렐라, 체더, 옥수수, 베이컨 칩, 양송이, 양파, 피망, 불고기, 포크, 페퍼로니',
        2, -- category
        20, -- pcode
        400, -- ptype
        4,    -- did
        2,
        20,
        200
        );
                         insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20200508_gH22my39.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ169.png',
        NULL,
		'리얼불고기',
        29900,
        22500,
        '#프리미엄 불고기 토핑이 듬뿍',
        NULL,
        '리얼불고기(쇠고기) : 호주산',
        '리얼불고기(대두,밀,쇠고기,조개류(굴)), 불고기소스(우유,대두,밀,토마토,쇠고기,조개류(굴)), 체더, 모차렐라 치즈(우유)',
        2, -- category
        20, -- pcode
        400, -- ptype
        4,    -- did
        2,
        20,
        200
        );
insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20230619_F33836Pn.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ159.png',
        NULL,
		'우리 고구마',
        30900,
        23500,
        '#고구마 큐브&무스가 듬뿍!',
        NULL,
        '베이컨(돼지고기) : 외국산 / 리얼불고기(쇠고기) : 호주산',
        '모차렐라, 체더, 리코타, 그뤼에르 크림 치즈, 리얼 불고기, 파인애플, 옥수수, 백양파, 양송이, 트러플 크림, 베이컨, 고구마 큐브, 고구마 무스',
        2, -- category
        20, -- pcode
        400, -- ptype
        4,    -- did
        2,
        20,
        200
        );
			insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20200311_5MGKbxlW.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ005.png',
        NULL,
		'슈퍼디럭스',
        28900,
        21500,
        '#누구나 사랑하는 베이직 피자!',
        NULL,
        '포크(돼지고기) : 국내산 / 불고기(쇠고기) : 미국산, 호주산 섞음 / 페퍼로니[돼지고기(국내산), 쇠고기(호주산)] / 햄(돼지고기) : 국내산',
        '모차렐라 치즈, 피망, 양파, 페퍼로니, 햄, 버섯, 불고기, 포크, 올리브, 토마토 소스',
        2, -- category
        20, -- pcode
        400, -- ptype
        4,    -- did
        2,
        20,
        200
        );
 			insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20230619_x2PSzFyC.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ001.png',
        NULL,
		'슈퍼슈프림',
        27900,
        20500,
        '#콘과 파인애플의 달콤한 조화',
        NULL,
        '포크(돼지고기) : 국내산 / 불고기(쇠고기) : 미국산, 호주산 섞음 / 햄(돼지고기) : 국내산',
        '모차렐라 치즈, 피망, 양파, 햄, 버섯, 옥수수, 불고기, 포크, 파인애플, 토마토 소스',
        2, -- category
        20, -- pcode
        400, -- ptype
        4,    -- did
        2,
        20,
        200
        );       
insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20200311_Qtn75KSM.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ003.png',
        NULL,
		'베이컨체더치즈',
        27900,
        20500,
        '#베이컨 매니아들의 원 픽',
        NULL,
        '베이컨(돼지고기) : 외국산 / 불고기(쇠고기) : 미국산, 호주산 섞음',
        '모차렐라 치즈, 체더치즈, 양파, 불고기, 베이컨, 토마토 소스',
        2, -- category
        20, -- pcode
        400, -- ptype
        4,    -- did
        2,
        20,
        200
        );       

insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20200311_x8StB1t3.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ007.png',
        NULL,
		'페퍼로니',
        25900,
        18500,
        '#짭짤한 풍미가 일품',
        NULL,
        '페퍼로니[돼지고기(국내산), 쇠고기(호주산)]',
        '모짜렐라 치즈, 페퍼로니, 토마토 소스',
        2, -- category
        20, -- pcode
        400, -- ptype
        4,    -- did
        2,
        20,
        200
        );     
insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20200311_TI57KvOH.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ010.png',
        NULL,
		'치즈',
        23900,
        16500,
        '#토마토 소스와 풍부한 모차렐라',
        NULL,
        '-',
        '모차렐라 치즈, 토마토 소스',
        2, -- category
        20, -- pcode
        400, -- ptype
        4,    -- did
        2,
        20,
        200
        );     
 insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20240214_33E9Qk13.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ319.png',
        NULL,
		'맥콘 베이컨',
        16900,
        NULL,
        '#맥앤치즈의 고소함과 콘&베이컨의 실패 없는 단짠 조합!',
		'#해피 데일리 피자, 매일 매일 도미노를 끝없이 만나보세요!',
        '베이컨(돼지고기) : 외국산',
        '트러플 크림 소스, 콰트로 치즈 퐁듀, 체더, 모차렐라, 맥앤치즈, 옥수수',
        1, -- category
        50, -- pcode
        500, -- ptype
        1,    -- did
        1,
        40,
        100
        ); 
 insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20240214_AS3t09AV.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ318.png',
        NULL,
		'클래식 리코타',
        16900,
        NULL,
        '#기본기 강한 토마토 소스에 리코타 치즈로 맛을 더 밀도있게!',
		'#해피 데일리 피자, 매일 매일 도미노를 끝없이 만나보세요!',
        '-',
        '토마토 소스, 콰트로 치즈 퐁듀, 체더, 모차렐라, 백양파, 로스트 방울 토마토 다이스, 리코타 치즈',
        1, -- category
        50, -- pcode
        500, -- ptype
        1,    -- did
        1,
        40,
        100
        );            
 insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20240214_Q4M8TZ4u.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ315.png',
        NULL,
		'맵퍼로니',
        17900,
        NULL,
        '#매콤+달콤+짭잘! 할라피뇨와 망고 하바네로 소스, 페퍼로니의 조화!',
		'#해피 데일리 피자, 매일 매일 도미노를 끝없이 만나보세요!',
        '페퍼로니[돼지고기(국내산), 쇠고기(호주산)] / 포크(돼지고기) : 국내산',
        '마리나라 크림 소스, 콰트로 치즈 퐁듀, 체더, 모차렐라, 페퍼로니, 포크, 로스트 방울 토마토 다이스, 할라피뇨, 망고 하바네로 소스',
        1, -- category
        50, -- pcode
        500, -- ptype
        1,    -- did
        1,
        40,
        100
        );
 insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20240214_sLfmidPm.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ316.png',
        NULL,
		'마라 불고기',
        17900,
        NULL,
        '#얼얼한 마라맛을 살린 불고기와 페퍼로니의 만남!',
		'#해피 데일리 피자, 매일 매일 도미노를 끝없이 만나보세요!',
        '페퍼로니[돼지고기(국내산), 쇠고기(호주산)] / 마라 포크 크럼블(돼지고기) : 국내산',
        '토마토 소스, 콰트로 치즈 퐁듀, 체더, 모차렐라, 페퍼로니, 청피망, 마라 포크 크럼블',
        1, -- category
        50, -- pcode
        500, -- ptype
        1,    -- did
        1,
        40,
        100
        );                
 insert into pizza (menuimg, halfimg, lable, pname, lprice, mprice, desc1, desc2, country, topping, category,pcode,ptype, did,ecategory, ecode, etype)
values('https://cdn.dominos.co.kr/admin/upload/goods/20240214_8rBc1T61.jpg',
		'https://cdn.dominos.co.kr/admin/upload/hnh/RPZ317.png',
        NULL,
		'소시지 맥스',
        17900,
        NULL,
        '#이탈리안 페퍼 소시지, 페퍼로니, 포크, 햄, 불고기까지 5가지 미트를 맥스하게!',
		'#해피 데일리 피자, 매일 매일 도미노를 끝없이 만나보세요!',
        '페퍼로니[돼지고기(국내산), 쇠고기(호주산)] / 햄(돼지고기) : 국내산 / 불고기(쇠고기) : 미국산, 호주산 섞음 / 포크(돼지고기) : 국내산 / 이탈리안 페퍼 소시지(돼지고기) : 국내산',
        '마리나라 크림 소스, 콰트로 치즈 퐁듀, 체더, 모차렐라, 양송이, 페퍼로니, 햄, 불고기, 포크, 이탈리안 페퍼 소시지',
        1, -- category
        50, -- pcode
        500, -- ptype
        1,    -- did
        1,
        40,
        100
        );     
        --         
   /*     select * from pizza p, dough_option d
       WHERE p.category = d.category
       AND p.pcode = d.pcode
       AND p.ptype = d.ptype
       AND p.pid = ?
       AND d.dname LIKE ?%; */
       
       
	   select dname,dprice from pizza p, dough_option d
       WHERE p.category = d.category
       AND p.pcode = d.pcode
       AND p.ptype = d.ptype
       AND p.pid = 4;
      
      select DISTINCT eid,ename from pizza p, edge_option e
       WHERe p.etype = e.etype
       AND e.etype >100 
       AND NOT e.etype=100
       order by eid;
           
       select DISTINCT ename from pizza p, edge_option e
       WHERe p.etype = e.etype
       AND e.etype = 100; 
            
           use hrdb2019;
      select DISTINCT eid,ename,eprice from pizza p, edge_option e
        WHERe p.etype = e.etype
        AND e.etype > 100 
        AND NOT e.etype=100
        order by eid;
        

       
       use hrdb2019;
      
       
        select * from pizza;
        
        
   select pid as id, halfimg as img, lable, pname, lprice, mprice, category,pcode ptype, did, ecategory, ecode, etype from pizza
    where pid = 2;

use hrdb2019;
	select pid as id, menuimg, halfimg,lable, pname, lprice, mprice, category, ptype,pcode, did, ecategory, ecode, etype from pizza
    where ptype between 200 AND 400
    AND pcode between 20 AND 40
    AND NOT pname = '치즈 크레이프 샌드' AND NOT pname= '블록버스터4' AND NOT pname= '베스트 콰트로'      
    AND NOT ptype = 300;
  
  
  select * from pizza;
    
    
    
    select DISTINCT eid,ename from pizza p, edge_option e
    WHERe p.etype = e.etype
    AND e.etype >100 
    AND NOT e.etype=100
    order by eid;
    
    select * from pizza;
    
    
    
    select pid as id, halfimg as img, lable, pname, lprice, mprice, category, ptype,pcode, did, ecategory, ecode, etype from pizza
        where category  = 1
        AND NOT pid = 6 AND NOT pname= '블록버스터4' AND NOT pname= '베스트 콰트로'
        AND NOT ptype = 300;
        
        
select * from pizza where did = "3"