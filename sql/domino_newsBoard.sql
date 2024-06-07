use hrdb2019;
select database();

-- 테이블 생성
create table domino_newsBoard(
	bid			int			auto_increment primary key,
	btitle		varchar(50)	not null,
    bcontent	varchar(1000),
    bhits 		int,
    bdate		datetime
);

select * from domino_newsBoard;
select row_number() over(order by bdate desc) as rno,
	   bid, 
	   btitle, 
       bcontent, 
       bhits, 
       left(bdate, 10) as bdate
 from domino_newsboard;

-- (2) 게시글 등록
INSERT INTO domino_newsboard (btitle, bcontent, bhits, bdate)
VALUES ('23년 9월 29일 추석 영업매장 안내', '안녕하세요, 도미노피자입니다.\n
민족 최대의 명절, 추석의 달이 밝았습니다.\n
밝은 보름달처럼 가족들, 지인들과 함께 행복한 추석 보내시길 바랍니다.\n\n
추석 연휴 기간 도미노피자 각 매장 별 운영 및 주문시간에 차이가 있사오니,\n
아래 리스트를 확인하시어 이용에 불편함이 없으시길 바랍니다.\n\n
1. 추석 연휴기간 중 9월 29일(금) 하루 휴무이며, 그 외의 요일들은 정상영업 합니다.\n
2. 일부 매장은 추석 당일인 9월 29일(금) 에도 영업을 실시합니다.\n', 0, NOW());
INSERT INTO domino_newsboard (btitle, bcontent, bhits, bdate)
VALUES ('23년 9월 29일 추석 영업매장 안내', '안녕하세요, 도미노피자입니다.\n
민족 최대의 명절, 추석의 달이 밝았습니다.\n
밝은 보름달처럼 가족들, 지인들과 함께 행복한 추석 보내시길 바랍니다.\n\n
추석 연휴 기간 도미노피자 각 매장 별 운영 및 주문시간에 차이가 있사오니,\n
아래 리스트를 확인하시어 이용에 불편함이 없으시길 바랍니다.\n\n
1. 추석 연휴기간 중 9월 29일(금) 하루 휴무이며, 그 외의 요일들은 정상영업 합니다.\n
2. 일부 매장은 추석 당일인 9월 29일(금) 에도 영업을 실시합니다.\n', 0, NOW());
INSERT INTO domino_newsboard (btitle, bcontent, bhits, bdate)
VALUES ('개인정보처리방침 개정 안내 (2023년 11월 8일 적용)', '개인정보 처리방침 개정 안내 \n\n
<변경목적>\n
베네피아 복지몰 연동에 따른 제3자로부터 제공받는 개인정보의 항목 추가\n\n
<변경내용>\n
제1조 (개인정보 수집항목, 이용목적 및 보유기간)\n
-제공하는 업체: SK앰앤서비스㈜\n
-제공받는 목적: 제휴할인 결제 시 베네피아 포인트 사용\n
-제공받는 개인정보: 베네피아 아이디, 사번, 성명\n
-보유 및 이용기간: 사번 및 성명 (처리즉시 파기),\n
 베네피아 아이디 (이용목적 달성 후 지체없이 파기. 단, 관련 법령에 의해 유지정보는 해당 기간보유)', 0, NOW());
INSERT INTO domino_newsboard (btitle, bcontent, bhits, bdate)
VALUES ('9/25 무드서울 포토월 인증 이벤트 당첨자 공지', '도미노피자 고객님들 안녕하세요. \n
9/25 무드서울 행사에서 도미노 포토월 인증 이벤트에 참여해주셔서 진심으로 감사드립니다.\n\n
경품은 도미노피자 지류상품권 포테이토피자 1매이며,\n
하기 당첨자 리스트에서 이벤트 게시글 작성하신 SNS ID 확인 부탁드립니다.\n\n
당첨자 ID :\n
eu***holic \n s***uv2 \n rnjs***wlekd \n hari***quaxifrog \n my***uu', 0, NOW());
INSERT INTO domino_newsboard (btitle, bcontent, bhits, bdate)
VALUES ('11/3~13 한국시리즈 우승팀 맞추기 이벤트 당첨자 안내', '도미노피자를 사랑해주시는 고객님 안녕하세요. \n
한국시리즈 우승팀 맞추기에 응모해주신 여러분께 감사드립니다. 당첨자 공지드리겠습니다.   \n
감사합니다.', 0, NOW());
INSERT INTO domino_newsboard (btitle, bcontent, bhits, bdate)
VALUES ('23년 11월 가을 스탬프 챌린지 이벤트 당첨자 안내', '언제나 저희 도미노피자를 사랑해주시는 고객님 안녕하세요. \n\n
11월 진행한 가을 스탬프 챌린지 이벤트 : 도미노콘 당첨자 공지드립니다.  \n
감사합니다.', 0, NOW());
INSERT INTO domino_newsboard (btitle, bcontent, bhits, bdate)
VALUES ('2024년 IU 캘린더 이벤트 당첨자 안내 (2)', '고객 ID / 핸드폰\n\n
jm******* / 010-****-0841\n
jm******* / 010-****-2280\n
jm******* / 010-****-4949\n
jm******* / 010-****-7329\n
jm******* / 010-****-1546\n
jn******* / 010-****-0665\n
jo******* / 010-****-8287\n', 0, NOW());
INSERT INTO domino_newsboard (btitle, bcontent, bhits, bdate)
VALUES ('2024년 IU 캘린더 이벤트 당첨자 안내 (1)', '도미노피자를 사랑해주시는 고객님 안녕하세요.\n\n
2024년 IU 캘린더 이벤트에 참여해주신 여러분들께 진심으로 감사의 말씀을 전합니다. \n
당첨자 리스트는 하기와 같으며, 당첨자 분들께는 12/21 (목) 알림톡 혹은 문자로 수령방법, 기간 등을 안내드릴 예정입니다. \n\n
당첨자 분들 모두 축하드립니다. 앞으로도 당사에 많은 관심과 사랑 부탁드리겠습니다.\n
감사합니다.', 0, NOW());
INSERT INTO domino_newsboard (btitle, bcontent, bhits, bdate)
VALUES ('더현대 서울 H빌리지 입장권 응모 이벤트 당첨자 안내', '도미노피자를 사랑해주시는 고객님 안녕하세요.\n\n
WINTER SNOW EDITION with Boutique d Harry 이벤트에 참여해주신 여러분들께 진심으로 감사의 말씀을 전합니다.\n
기 공지 드린 바와 같이 12/15(금) ~ 12/21(목) 기간 응모하신 고객분들 대상 1등 더현대 서울 La Boutique d Harry 입장권 당첨자 안내드립니다.\n\n
당첨자 리스트는 하기와 같으며, 당첨자 분들께는 12/22 (금) LMS 문자로 수령방법, 기간 등 안내해드리도록 하겠습니다.', 0, NOW());
INSERT INTO domino_newsboard (btitle, bcontent, bhits, bdate)
VALUES ('더현대 서울 응모 이벤트 2~4등 당첨자 안내', '도미노피자를 사랑해주시는 고객님 안녕하세요.\n\n
WINTER SNOW EDITION with Boutique d Harry 이벤트에 참여해주신 여러분들께 진심으로 감사의 말씀을 전합니다.\n
기 공지 드린 바와 같이 12/15(금) ~ 12/31(일) 기간 응모하신 고객분들 대상 2~4등 더현대 서울 굿즈 당첨자 안내드립니다.\n\n
당첨자 리스트는 하기와 같으며, 당첨자 분들께는 1/2(화) 카카오 알림톡으로 수령방법, 기간 등 안내드리도록 하겠습니다.', 0, NOW());
INSERT INTO domino_newsboard (btitle, bcontent, bhits, bdate)
VALUES ('23년 12월 스탬프 챌린지 이벤트 당첨자 안내', '언제나 저희 도미노피자를 사랑해주시는 고객님 안녕하세요.\n\n
12월 스탬프 챌린지 이벤트 도미노콘 당첨자 공지드립니다.', 0, NOW());
INSERT INTO domino_newsboard (btitle, bcontent, bhits, bdate)
VALUES ('24년 1월 행운뽑기 이벤트 1등 당첨자 안내', '언제나 저희 도미노피자를 사랑해주시는 고객님 안녕하세요.\n\n
1월 행운뽑기 이벤트 도미노콘 당첨자 공지드립니다.', 0, NOW());
INSERT INTO domino_newsboard (btitle, bcontent, bhits, bdate)
VALUES ('24년 2월 10일 설날 영업매장 안내', '안녕하세요. 도미노피자입니다.\n\n
2024년 갑진년 새해가 밝았습니다.\n
올 한해도 건강하고 건승하시기를 바라겠습니다.\n\n
설날 당일 (2/10, 토요일) 은 대부분의 매장이 미운영하며, 영업 매장은 아래 리스트를 참고해주시기 바랍니다.
', 0, NOW());
INSERT INTO domino_newsboard (btitle, bcontent, bhits, bdate)
VALUES ('배달비 변경 안내', '한국 도미노피자를 사랑해주시는 고객님들께 진심으로 감사드립니다. \n\n
최고 품질의 피자를 최상의 서비스로 제공하기 위해 \n항상 최선을 다해온 한국 도미노피자는 \n물가 및 인건비 상승으로 인하여 2024년 3월 1일자로\n배달비를 인상하게 되었습니다. \n', 0, NOW());
INSERT INTO domino_newsboard (btitle, bcontent, bhits, bdate)
VALUES ('배달비 무료쿠폰 깜짝 이벤트 안내', '안녕하세요. \n\n
저희 도미노피자에 대한 고객님들의 관심과 사랑에 대해 항상 감사드립니다. \n\n 
금일, 금주 금요일, 차주 월요일 3일간 깜짝 배달 이벤트를 준비했습니다. \n', 0, NOW());
INSERT INTO domino_newsboard (btitle, bcontent, bhits, bdate)
VALUES ('개인정보처리방침 개정 안내 (2024년 6월 5일 적용)', '개인정보 처리방침 개정 안내 \n\n
<변경내용> \n
1. 개인정보 수집항목 이용목적 및 보유기간\n
이용목적에 고객맞춤형 혜택(마케팅 정보) 제공을 위한 활용(관련 항목 동의 시) 사항 추가', 0, NOW());



delete from domino_newsboard where bid = 1;
drop table domino_newsboard;

select count(*) from domino_newsboard;

  select rno, bid, btitle, bhits, bdate, total from
    (select row_number() over(order by bdate desc) as rno,
		        bid, 
		        btitle, 
            bhits, 
            left(bdate, 10) as bdate,
            (select count(*) from domino_newsBoard) total
    from domino_newsBoard) sb1
    where rno between 1 and 10;