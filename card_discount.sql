create table card_discount(
id INT auto_increment primary key,
img varchar(100),
company varchar(50),
discount1 varchar(50),
discount2 varchar(50),
discount3 varchar(50),
name varchar(30),
percent1 varchar (10),
percent2 varchar (10),
card varchar(6),
discribeTitle varchar(50),
grade1 varchar(30),
grade2 varchar(30),
discribeTitle2 varchar(50),
caution varchar(100),
desc1 varchar(500),
desc2 varchar(500)
);

drop table card_discount;

insert into card_discount(img, company, discount1,discount2,discount3, name, percent1, percent2, card, discribeTitle, grade1, grade2, discribeTitle2, caution, desc1, desc2)
values(
'https://cdn.dominos.co.kr/renewal2018/w/img/img_creditcard01.png',
'KB국민카드 >',
'20% 현장 할인(오프라인))\n',
'25% 세트 할인(온라인)\n',
'20% 세트 할인(오프라인)\n',
'KB국민카드',
'20%',
'25%',
'CARD',
'1. 20% 현장 할인(오프라인 주문만 가능)',
'피자 주문시 전체 금액의 20% 할인',
'피자 주문 시, \n전체 금액의 25% 할인(온라인)',
'\n\n 2. KB국민카드 세트 할인',
'잠실야구장점, 알펜시아점, 대명비발디파크점, 롯데월드점',
'-1일 1회 사용금액 15만원 초과 시 3만원까지 할인 가능 (월 1회 사용 가능)\n -타 쿠폰 및 제휴카드, 프로모션 할인과 중복 적용되지 않음\n-세트메뉴에는 할인 및 적립이 적용되지 않음 \n   (단, 세트 메뉴 외 추가 피자 주문 시 피자 단품에 한해 적용가능) \n-온라인 주문불가\n-KB체크카드, 비씨카드, 법인카드 제외\n-일부 점포 제외(자세한 내용은 페이지 하단 ‘이용불가 매장 안내’ 참조)',
'-ISP 결제 시에만 적용 가능 (KB Pay, 삼성페이 등 이용 시 적용 불가)\n -온라인(PC버전 사이트) 주문시 세트 25% 할인 적용(모바일/앱 불가)\n-오프라인(전화, 방문)주문시 세트 20% 할인 적용 \n   -피자+콜라+사이드디시 조합의 세트메뉴 주문시에만 할인 적용 가능 \n-월 1회만 할인 적용 가능'
);

insert into card_discount(img, company, discount1,discount2,discount3, name, percent1, percent2, card, discribeTitle, grade1, grade2, discribeTitle2, caution, desc1, desc2)
values('https://cdn.dominos.co.kr/renewal2018/w/img/img_creditcard02.png',
'비씨카드 TOP포인트 >',
'선결제 시 결제금액의 100%\n',
'포인트차감 청구 결제\n',
'\n',
'KB국민카드',
'100%',
'100%',
'CARD',
'결제 시 결제 금액의 100%포인트 차감 결제',
'',
'',
'',
'잠실야구장점, 알펜시아점, 대명비발디파크점, 롯데월드점',
'-1일 1회 사용 가능\n -할인 금액만큼 BC TOP 포인트 차감\n-결제금액의 0.6%가 TOP 포인트로 적립 \n-타 쿠폰 및 프로모션 할인과 중복 적용 \n  (단, 타 카드사 제휴와는 중복적용 불가) \n-세트메뉴를 포함한 모든 메뉴에 적용\n-기업법인, 개인법인, 기프트카드를 제외한 BC카드만 가능\n-홈페이지 주문시에만 가능(매장, 전화, 모바일 주문에는 적용 불가)',
''
);

insert into card_discount(img, company, discount1,discount2,discount3, name, percent1, percent2, card, discribeTitle, grade1, grade2, discribeTitle2, caution, desc1, desc2)
values('https://cdn.dominos.co.kr/renewal2018/w/img/img_creditcard03.png',
'현대카드 >',
'온/오프라인 50% 포인트 차감 결제',
'',
'',
'현대카드',
'50%',
'50%',
'CARD',
'피자 오프라인 주문 시 전체 금액의 50% 포인트 차감 결제',
'',
'',
'',
'잠실야구장점, 알펜시아점, 대명비발디파크점, 롯데월드점' ,
'-잔여포인트 부족시, ‘포인트 결제’서비스 이용불가\n -현대카드 S,W로 결제시, 포인트 차감된 결제금액의 1%추가 포인트 적립(M카드 적립제외)\n-타 쿠폰 및 제휴카드, 프로모션 할인과 중복 적용되지 않음 \n-일부 점포 제외(자세한 내용은 페이지 하단 ‘이용불가 매장 안내’ 참조) \n  (현대카드 중 zero(할인형)과 X카드는 이용 불가 ',
''
);


insert into card_discount(img, company, discount1,discount2,discount3, name, percent1, percent2, card, discribeTitle, grade1, grade2, discribeTitle2, caution, desc1, desc2)
value('https://cdn.dominos.co.kr/renewal2018/w/img/img_creditcard04.png',
'삼성카드 포인트 사용 서비스 >',
'온/오프라인 100% 포인트 차감 결제',
'',
'',
'삼성카드 포인트사용서비스',
'100%',
'100%',
'CARD',
'피자 오프라인 주문 시 전체 금액의 100%포인트 차감 결제',
'',
'',
'피자 온라인 주문 시 전체 금액의 100%포인트 차감 결제',
'잠실야구장점, 알펜시아점, 대명비발디파크점, 롯데월드점',
'-잔여포인트 부족시, ‘포인트 결제’서비스 이용불가\n -타 쿠폰 및 제휴카드, 프로모션 할인과 중복 적용되지 않음\n-일부 점포 제외(자세한 내용은 페이지 하단 [ 이용불가 매장 안내 ] 참조) ',
''
);

insert into card_discount(img, company, discount1,discount2,discount3, name, percent1, percent2, card, discribeTitle, grade1, grade2, discribeTitle2, caution, desc1, desc2)
values('https://cdn.dominos.co.kr/renewal2018/w/img/img_creditcard05.png',
'하나카드 Touch1/하나 sk패밀리카드 >',
'T멤버십 할인 +\n',
'Touch1/하나SK패밀리카드 할인\n',
'(최대 50%까지 할인)\n',
'하나 SK패밀리카드',
'35%',
'50%',
'CARD',
'T멤버십 할인에 Touch 1/하나 SK패밀리카드 할인까지!',
'',
'',
'도미노피자를 최대 50%까지 할인 받는 놀라운 혜택!',
'잠실야구장점, 알펜시아점, 대명비발디파크점, 롯데월드점',
'-T멤버십 할인 + Touch1(하나 SK패밀리카드)\n 추가 혜택 시 실버/골드 35%, VIP 최대 50% 할인\n -Touch1 제휴는 전 월 신판 20만원(주유/마트/학원 매출 제외) 실적 있을 시 가능\n-하나SK패밀리카드 제휴는 전월 신판20만원(주유/마트 매출 등 제외) 실적 있을 시 가능\n-※ 자세한 내용은 SK패밀리카드 \n    홈페이지 또는 하나카드 고객센터(1800-1111)로 문의 바랍니다.',
''
);

insert into card_discount(img, company, discount1,discount2,discount3, name, percent1, percent2, card, discribeTitle, grade1, grade2, discribeTitle2, caution, desc1, desc2)
values('https://cdn.dominos.co.kr/renewal2018/w/img/img_creditcard12.png',
'NH농협카드 > ',
'피자 주문 시 일반 등급 30%\n',
'플러스 등급 40% 할인',
'\n',
'NH농협카드',
'30%',
'40%',
'CARD',
'피자 주문 시 일반 등급 30% 할인, 플러스 등급 40% 할인!',
'',
'',
'',
'잠실야구장점, 알펜시아점, 대명비발디파크점, 롯데월드점',
'-전월실적 30만원 이상 사용가능\n-도미노피자 회원만 제휴할인 이용 가능(비회원 주문 불가)\n -도미노피자 PC 홈페이지 / APP 주문 및 결제 시(매장방문, 전화주문 주문 제외)\n-NH농협 BC, 체크, 기프트, 법인카드, 후불 하이패스 카드 제외\n타 쿠폰 및 제휴카드, 프로모션 할인과 중복 적용되지 않음\n-카드사 제휴 할인과 금액상품권 중복 적용 불가',
''
);

insert into card_discount(img, company, discount1,discount2,discount3, name, percent1, percent2, card, discribeTitle, grade1, grade2, discribeTitle2, caution, desc1, desc2)
values('https://cdn.dominos.co.kr/renewal2018/w/img/img_creditcard08.png',
'신한카드 >',
'하이포인트 계열카드 소지 시\n',
'30% 포인트 차감 적용\n',
'(온라인 선결제 불가)\n',
'신한카드',
'30%',
'30%',
'CARD',
'피자 주문 시 전체 금액의 30% 포인트 차감 결제',
'',
'',
'',
'잠실야구장점, 알펜시아점, 대명비발디파크점, 롯데월드점',
'-전화, 매장방문, 신용카드 후 결제 주문 시 가능(온라인 선결제 불가)\n-결제금액 30% 포인트 차감결제(포인트 부족 시 적용 불가)\n-포인트 부족 시 차감 미적용 금액으로 결제되니 주문 전 잔여포인트 확인 필수\n타 쿠폰 및 제휴카드, 프로모션 할인과 중복 적용되지 않음\n타 쿠폰 및 제휴카드, 프로모션 할인과 중복 적용되지 않음\n일부 점포 제외 (자세한 내용은 페이지 하단 ‘이용불가 매장 안내’ 참조)',
''
);


insert into card_discount(img, company, discount1,discount2,discount3, name, percent1, percent2, card, discribeTitle, grade1, grade2, discribeTitle2, caution, desc1, desc2)
values('https://cdn.dominos.co.kr/renewal2018/w/img/img_membership04.png',
'OK Cashbag >',
'OK 캐쉬백 40% 할인\n',
'(25% OK캐쉬백 포인트 차감)\n',
'\n',
'OK Cashbag',
'40%',
'40%',
'CARD',
'',
'',
'',
'',
'잠실야구장점, 알펜시아점, 대명비발디파크점, 롯데월드점',
'OK캐쉬백’ 로고가 부착된 카드는 사용 가능\n-1일 1회 사용 가능\n-오프라인 매장 40% 할인 시 OK캐쉬백 포인트 25% 차감\n(*온라인 주문 시 이벤트에 따라 상이하므로 OK캐쉬백 이벤트페이지 참고)\nOK캐쉬백 가용포인트 부족시, 포인트 차감을 받을 수 없음\n타 쿠폰 및 제휴카드, 세트메뉴, 프로모션 할인과 중복 적용되지 않음 \n-일부매장(리조트 및 휴게소매장) 이용불가\n-OK 캐쉬백 관련 문의 : 고객센터 1599-0512',
''
);

insert into card_discount(img, company, discount1,discount2,discount3, name, percent1, percent2, card, discribeTitle, grade1, grade2, discribeTitle2, caution, desc1, desc2)
values('https://cdn.dominos.co.kr/renewal2018/w/img/img_membership06.png',
'기아멤버스>',
'15% 적립 / 20% 할인 (10%포인트 차감)\n',
'\n',
'\n',
'기아멤버스카드',
'15%',
'20%',
'CARD',
'기아멤버스로 포인트 차감+할인!',
'',
'',
'기아멤버스로 적립!',
'잠실야구장점, 알펜시아점, 대명비발디파크점, 롯데월드점',
'-전화 및 온라인(홈페이지,모바일 웹,앱) 주문 모두 적용 가능\n-전체 구매 금액의 20%할인 \n  (10%포인트차감+10%할인) 또는 15% 기아멤버스 포인트 적립\n-포인트 부족시 멤버십 포인트 차감/적립 불가\n-1일 1회 사용 가능\n-타 쿠폰, 제휴카드, 세트메뉴, 프로모션 중복적용 불가\n-일부 점포 제외(자세한 내용은 페이지 하단 ‘이용불가 매장 안내’ 참조)',
'구매금액의 15% 적립'
);

insert into card_discount(img, company, discount1,discount2,discount3, name, percent1, percent2, card, discribeTitle, grade1, grade2, discribeTitle2, caution, desc1, desc2)
values('https://cdn.dominos.co.kr/renewal2018/w/img/img_membership07.png',
'오포인트>',
'30% 포인트 차감 / +1% 결제금액\n',
'적립 / 1% 결제금액 적립\n',
'\n',
'오포인트',
'30% + 1%',
'1%',
'CARD',
'오포인트 카드로 포인트 차감+자동적립!',
'',
'',
'오포인트 카드로 포인트 적립!',
'잠실야구장점, 알펜시아점, 대명비발디파크점, 롯데월드점',
'-인터넷 주문 시에만 포인트 차감/적립 적용\n-전체 구매 금액의 20%할인 \n-전체 구매금액의 30% 포인트 차감 + 결제금액의 1% 적립\n또는 전체 구매금액의 1% 적립\n-1일 1회 사용 가능\n-타 쿠폰, 제휴카드, 세트메뉴, 프로모션 중복적용 불가\n-일부 점포 제외(자세한 내용은 페이지 하단 ‘이용불가 매장 안내’ 참조)',
'결제금액의 1% 적립'
);


select * from card_discount;

select * from card_discount
where id =5;