drop table telecom_discount;
create table telecom_discount(
id INT auto_increment primary key,
img varchar(100),
company varchar(50),
discount varchar(50),
name varchar(30),
percent1 varchar (10),
percent2 varchar (10),
card varchar(6),
discribeTitle varchar(30),
grade1 varchar(20),
grade2 varchar(20),
discribeTitle2 varchar(30),
caution varchar(100),
desc1 varchar(500)
);


insert into telecom_discount (img, company, discount, name, percent1, percent2, card, discribeTitle, grade1, grade2, discribeTitle2, caution, desc1)
values ('https://cdn.dominos.co.kr/renewal2018/w/img/img_membership01.png',
		'SK Telecom >',
        'Silver/Gold 20% · VIP 30%',
        'SK Telecom T멤버십 카드',
        '20%',
        '30%',
        'CARD',
        'SK Telecom T멤버십 카드',
        'Silver/Gold',
        'VIP',
        '할인/적립 및 포인트 사용',
        '잠실야구장점, 알펜시아점, 대명비발디파크점, 롯데월드점',
        '-SKT T멤버십 카드 소지자 제품 주문 시 할인/적립 혜택 이용 가능\n  (단 특가제품의 경우 할인/적립 혜택 및 포인트 사용 예외)\n-보유중인 T플러스 포인트는 10p 단위로 포인트 사용\n-T멤버십 ‘적립’형 고객은 온라인 주문 시 포인트 적립이 가능합니다.\n-총 상품 금액이 20만원 초과 시 T멤버십 할인/적립 혜택 적용 불가\n-최대 할인 가능: 일 최대 VIP 60,000원, Gold/Silver 40,000원 할인\n-최대 적립 가능: 일 최대 VIP 60,000P, Gold/Silver 40,000P 적립\n-타 쿠폰, 제휴카드, 세트메뉴, 프로모션 등 여타 할인과 중복적용 불가\n-다른 명의자의 멤버십카드는 이용할 수 없습니다.\n-SKT 고객센터 문의 : 114'
        );
        
        insert into telecom_discount (img, company, discount, name, percent1, percent2, card, discribeTitle, grade1, grade2, discribeTitle2, caution, desc1)
        values('https://cdn.dominos.co.kr/renewal2018/w/img/img_membership02_2.png',
        'KT 멤버십 카드 >',
        'Silver/Gold 20% · VIP 30%',
        'KT 멤버십 카드',
		'15%',
        '20%',
        'CARD',
        'KT 통신사 제휴 서비스',
        '일반',
        'VIP',
        '포인트 차감',
        '잠실야구장점, 알펜시아점, 대명비발디파크점, 롯데월드점 \n: 모든 제휴 이용불가(기프트카드 포함)',
        '-전체구매 금액의 포인트 차감(일반 15%, VIP 20%)\n-세트메뉴 및 여타할인과 중복적용 불가\n-포인트 부족 시 멤버십 포인트차감 불가일부 점포 제외 \n    자세한 내용은 페이지 하단 ‘이용불가 매장 안내’ 참조)\n-타 제휴카드, 쿠폰, 세트메뉴, 할인 프로모션 제품과 중복적용 불가\n-결제금액 기준 20만원 한도 포인트 차감 할인\n-1일 1회 사용 가능');
        
        insert into telecom_discount (img, company, discount, name, percent1, percent2, card, discribeTitle, grade1, grade2, discribeTitle2, caution, desc1)
        values('https://cdn.dominos.co.kr/renewal2018/w/img/img_membership03.png',
        'LG >',
        'Silver/Gold 20% · VIP 30%',
        'LG U+ 멤버십 카드',
        '15%',
		'20%',
        'CARD',
        " ",
        "포인트 적립",
        '일반',
        'VIP',
        '잠실야구장점, 알펜시아점, 대명비발디파크점, 롯데월드점',
        '-타 쿠폰 및 제휴카드, 프로모션 할인과 중복 적용되지 않음\n-세트메뉴에는 유플러스 멤버십 할인이 적용되지 않음\n-할인 전 총 주문 금액 기준 20만원 한도 할인\n   (*일반 최대 3만원, VIP 최대 4만원까지 할인)\n-1일 1회 사용 가능');
        
        
        select * from telecom_discount;
        
        select id, img, company, discount, name, percent1, percent2, card, discribeTitle, grade1, grade2, discribeTitle2, caution, desc1  from telecom_discount
        where id = 1;