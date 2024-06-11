use hrdb2019;
select database();

-- 테이블 생성
create table domino_csCenter(
    qid			int				auto_increment primary key,
	cid 		int 			not null,
	type		char(1)			not null,
    rep			int,
    content		varchar(800)	not null
);

select * from domino_csCenter;
drop table domino_csCenter;

delete from domino_csCenter where qid = 19;
select content from domino_csCenter where cid = 1 and type = 'Q';

-- orderList 데이터
insert domino_csCenter(cid, type, rep, content)
	values(1, "Q", null, "Apple Pay 적용가능한 할인이 있나요?");
insert domino_csCenter(cid, type, rep, content)
	values(1, "A", 1, "Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.\n애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.\n카드사 포인트 복합결제는 결제수단을 변경해주세요.");
insert domino_csCenter(cid, type, rep, content)
	values(1, "Q", null, "Apple Pay 지원기기인데 온라인 결제가 안돼요.");
insert domino_csCenter(cid, type, rep, content)
	values(1, "A", 3, "iOS16 이상이라면 Safari, Chrome, NEVER APP에서 주문이 가능합니다.\niOS16 미만 버전이라면, Safari에서만 가능하며, 최신 버전의 OS로 업데이트해 주세요.\n모든 기기는 최신 버전의 OS 사용을 권장합니다.");    
insert domino_csCenter(cid, type, rep, content)
	values(1, "Q", null, "Apple Pay 오프라인 온라인 결제 가능하나요?");
insert domino_csCenter(cid, type, rep, content)
	values(1, "A", 5, "온라인 선결제시 가능 합니다.\n오프라인 매장결제 및 전화결제시 이용이 불가합니다.");
insert domino_csCenter(cid, type, rep, content)
	values(1, "Q", null, "Apple Pay로 할부 결제가 가능한가요?");
insert domino_csCenter(cid, type, rep, content)
	values(1, "A", 7, "Apple Pay는 할부서비스를 지원하지 않습니다.");
insert domino_csCenter(cid, type, rep, content)
	values(1, "Q", null, "결제하기 화면에 Apple Pay 버튼이 보이지 않아, Apple Pay로 결제할 수 없습니다.");
insert domino_csCenter(cid, type, rep, content)
	values(1, "A", 9, "Apple Pay 결제수단 이용 시, 카드사 제휴할인 이용이 불가합니다.\n애플페이의 서비스 정책 상 할부와 카드사 포인트 복합결제는 불가한 것으로 안내드립니다.\n카드사 포인트 복합결제는 결제수단을 변경해주세요.");

-- checkOrderList 데이터
insert domino_csCenter(cid, type, rep, content)
	values(2, "Q", null, "현금영수증 발급은 어떻게 할 수 있나요?");
insert domino_csCenter(cid, type, rep, content)
	values(2, "A", 11, "E쿠폰, 도미노콘, M12 모바일 기프트권을 사용하거나 도미노페이 계좌이체로 결제한 온라인 주문은 현금영수증이 자동 발급됩니다.\n단, 지류상품권 사용 또는 현장현금결제 시에는 결제가 '완료'된 후 매장에서 수동으로 현금영수증 발급 처리해드립니다.");
insert domino_csCenter(cid, type, rep, content)
	values(2, "Q", null, "주문상태는 어떻게 확인할 수 있나요?");
insert domino_csCenter(cid, type, rep, content)
	values(2, "A", 13, "iOS16 이상이라면 Safari, Chrome, NEVER APP에서 주문이 가능합니다.\niOS16 미만 버전이라면, Safari에서만 가능하며, 최신 버전의 OS로 업데이트해 주세요.\n모든 기기는 최신 버전의 OS 사용을 권장합니다.");
insert domino_csCenter(cid, type, rep, content)
	values(2, "Q", null, "결제 승인 및 취소 현황은 어떻게 확인하나요?");
insert domino_csCenter(cid, type, rep, content)
	values(2, "A", 15, "미리결제로 진행하신 주문의 결제 승인 및 취소 현황은 각 카드사 혹은 간편결제 사이트에서 확인 가능합니다.");
insert domino_csCenter(cid, type, rep, content)
	values(2, "Q", null, "결제내역 영수증을 출력하고 싶습니다.");
insert domino_csCenter(cid, type, rep, content)
	values(2, "A", 17, "도미노페이나 신용카드, Apple Pay 결제의 경우는 주문내역에서 영수증 출력이 가능하나,\n다른 결제수단(네이버페이, 카카오페이 등)은 해당 간편결제 사이트/앱에서 확인 가능합니다.");
insert domino_csCenter(cid, type, rep, content)
	values(2, "Q", null, "주문한 내역은 어디에서 확인할 수 있나요?");
insert domino_csCenter(cid, type, rep, content)
	values(2, "A", 19, "주문한 내역은 나의정보>주문내역에서 확인 가능합니다.\n최근 1년 이내 주문한 내역만 확인 가능합니다.");

-- takeoutList 데이터
insert domino_csCenter(cid, type, rep, content)
	values(3, "Q", null, "주문한 내역을 다시 확인하고 싶은데 어디에서 확인할 수 있나요?");
insert domino_csCenter(cid, type, rep, content)
	values(3, "A", 21, "주문하신 내역은 나의 정보>주문내역에서 확인 가능합니다.");
insert domino_csCenter(cid, type, rep, content)
	values(3, "Q", null, "방문포장 주문 이용 시간은 어떻게 되나요?");
insert domino_csCenter(cid, type, rep, content)
	values(3, "A", 23, "주피자 수령은 매장 영업 시간 내 가능합니다.\n매장이 오픈하기 전에는 예약주문으로 이용 가능하며, 주문시 수령 가능한 시간을 안내 드리고 있습니다.\n매장 마감 후에는 익일 수령 예약이 가능합니다.");
insert domino_csCenter(cid, type, rep, content)
	values(3, "Q", null, "포장주문 이용은 어떻게 하나요?");
insert domino_csCenter(cid, type, rep, content)
	values(3, "A", 25, "① 온라인 주문 시 포장 주문을 선택합니다.\n② 피자를 수령하실 매장을 검색 후 매장을 선택합니다.\n(차량으로 피자를 받기 원하는 경우 드라이빙 픽업 서비스를 이용해 주세요.");
insert domino_csCenter(cid, type, rep, content)
	values(3, "Q", null, "포장주문 이용은 어떻게 하나요?");
insert domino_csCenter(cid, type, rep, content)
	values(3, "A", 27, "① 온라인 주문 시 포장 주문을 선택합니다.\n② 피자를 수령하실 매장을 검색 후 매장을 선택합니다.\n(차량으로 피자를 받기 원하는 경우 드라이빙 픽업 서비스를 이용해 주세요.");
insert domino_csCenter(cid, type, rep, content)
	values(3, "Q", null, "온라인 방문포장 주문을 이용할 때 유의사항은 무엇인가요?");
insert domino_csCenter(cid, type, rep, content)
	values(3, "A", 29, "① 예약하신 시간에 방문 부탁드립니다.\n② 결제 완료 후 메뉴 변경 및 취소는 불가능합니다.\n③ 메뉴 변경 및 주문취소는 주문하신 매장으로 직접 연락 하셔야 합니다.(온라인 취소 불가/메뉴 변경시 미리 결제 하셨다면, 주문 취소 후 매장 방문하시어 재결제 하셔야 합니다.)");
insert domino_csCenter(cid, type, rep, content)
	values(3, "Q", null, "배달주문 / 포장주문의 차이점은 무엇인가요?");
insert domino_csCenter(cid, type, rep, content)
	values(3, "A", 31, "● 배달주문은 집, 회사 등 고객이 선택한 주소로 피자가 배달되는 것이며, 매장은 배달장소에 따라 자동적으로 선택됩니다.\n● 포장주문은 고객이 직접 매장에서 피자를 수령하며, 고객이 매장의 위치를 확인 후 원하는 매장으로 주문이 가능합니다.\n또한, 방문포장 주문을 이용하실 경우, 각 매장 별 방문포장 할인율을 적용 받으실 수 있습니다.(각 매장 별 방문포장 할인률은 다름)");

-- discountList 데이터
insert domino_csCenter(cid, type, rep, content)
	values(4, "Q", null, "SKT 멤버십 할인 이용하려고 하는데 본인확인을 하라고 나와요.");
insert domino_csCenter(cid, type, rep, content)
	values(4, "A", 33, "홈 > 나의 정보 > 정보수정 페이지에서 이름 항목 오른쪽에 있는 휴대전화 인증 버튼을 클릭해 본인인증을 진행해 주시기 바랍니다.\n\n휴대전화 문자인증이 아닌 본인인증을 진행해 주셔야 합니다.");
insert domino_csCenter(cid, type, rep, content)
	values(4, "Q", null, "할인쿠폰은 어떻게 사용하는 건가요?");
insert domino_csCenter(cid, type, rep, content)
	values(4, "A", 35, "도미노피자 온라인 회원(매니아)에게는 신규회원 가입/등급 쿠폰/생일쿠폰 등의 다양한 온라인 할인쿠폰이 제공됩니다.\n쿠폰확인은 나의정보>쿠폰함 에서 확인 가능하며, 주문 진행시 보유하신 쿠폰 중 할인예상 금액이 가장 높은 쿠폰으로 추천 할인이 적용됩니다. 원하실 경우 할인 변경이 가능합니다.\n오프라인에서 발생된 일부 쿠폰의 경우 할인선택 시 해당 쿠폰코드 입력하셔야 이용이 가능합니다.");
    
-- presentList 데이터
insert domino_csCenter(cid, type, rep, content)
	values(5, "Q", null, "금액상품권 잔액 확인이 가능한가요?");
insert domino_csCenter(cid, type, rep, content)
	values(5, "A", 37, "나의정보 > 금액상품권 메뉴에서 등록한 상품권 하단의 잔액조회 버튼을 통해 상품권 잔액을 확인할 수 있습니다.");
insert domino_csCenter(cid, type, rep, content)
	values(5, "Q", null, "도미노콘을 선물 받았는데 어떻게 이용 하나요?");
insert domino_csCenter(cid, type, rep, content)
	values(5, "A", 39, "온라인 주문 시 이용 가능합니다.(전화주문 불가)\n원하시는 메뉴를 담고 결제하기 화면에서 할인적용>상품권 및 쿠폰번호 입력>도미노콘(모바일상품권)을 선택하여 쿠폰번호를 입력하시면 할인이 적용됩니다.\n1) 단품 도미노콘의 경우 명시된 피자 또는 동일 가격 피자 1판에 대해서 주문할 수 있습니다. 피자 외 다른 제품은 할인 되지 않습니다.");
insert domino_csCenter(cid, type, rep, content)
	values(5, "Q", null, "도미노콘을 삭제했는데 문자 재발송이 가능한가요?");
insert domino_csCenter(cid, type, rep, content)
	values(5, "A", 41, "나의정보 > 상품권 주문 내역에서 최대 3회까지 재발송 가능합니다.\n이후 재발송을 원하실 경우, 080-860-3082 로 연락주시면 확인 후 문자 재발송을 도와 드립니다.");

-- payList 데이터
insert domino_csCenter(cid, type, rep, content)
	values(6, "Q", null, "도미노페이 카드는 어떻게 등록하나요?");
insert domino_csCenter(cid, type, rep, content)
	values(6, "A", 43, "1) 나의정보 > 정보수정 > 도미노페이 관리 > 결제수단 등록하기\n2) 주문서 > 결제수단 등록하기\n\n도미노페이에 가입된 명의와 일치하는 신용/체크카드만 등록 가능하며 일부 증권사 발급 카드는 등록이 불가능합니다.");
insert domino_csCenter(cid, type, rep, content)
	values(6, "Q", null, "도미노페이 서비스를 해지하고 싶어요");
insert domino_csCenter(cid, type, rep, content)
	values(6, "A", 45, "1) 나의정보 > 정보수정 > 도미노페이 관리 > 서비스 해지\n2) 주문서 > 도미노페이 관리 > 서비스 해지\n\n서비스 해지 시 결제비밀번호 입력이 필요하며, 결제 비밀번호 입력 시 즉시 해지처리가 완료되고 등록된 정보는 삭제됩니다.");
insert domino_csCenter(cid, type, rep, content)
	values(6, "Q", null, "도미노페이 결제 비밀번호를 바꾸고 싶어요");
insert domino_csCenter(cid, type, rep, content)
	values(6, "A", 47, "기존 결제 비밀번호를 알고 계시다면 결제 비밀번호 재설정, 결제 비밀번호를 분실하셨다면 본인인증을 통한 결제 비밀번호 초기화 후 재설정하여 이용 가능합니다.\n\n1) 나의정보 > 정보수정 > 도미노페이 관리 > 결제비밀번호 재설정 > 결제 비밀번호를 잊으셨나요?\n2) 주문서 > 도미노페이 관리 > 결제비밀번호 재설정 > 결제 비밀번호를 잊으셨나요?");
insert domino_csCenter(cid, type, rep, content)
	values(6, "Q", null, "도미노페이 가입은 어떻게 하나요?");
insert domino_csCenter(cid, type, rep, content)
	values(6, "A", 49, "홈페이지 로그인 후 나의정보 > 정보수정 > 도미노페이 관리 또는 결제하기 페이지에서 도미노페이 등록이나 설정 버튼을 통해 가입이 가능합니다.\n도미노페이는 만 19세 이상 회원 정보로만 가입 가능합니다.");

-- memberList 데이터
insert domino_csCenter(cid, type, rep, content)
	values(7, "Q", null, "인증메일이 오지 않아 인증을 할 수 없어요.");
insert domino_csCenter(cid, type, rep, content)
	values(7, "A", 51, "인증코드가 포함된 이메일은 스팸메일함으로 이동됐을 가능성이 크므로 스팸메일함도 확인해 주세요.\n\n또한 특정 도메인은 도미노에서 발송한 메일 수신이 원활하지 않을 수 있으므로 동일한 도메인이 계속 수신되지 않을 경우 다른 도메인으로 인증 요청을 해주시기 바랍니다.");
insert domino_csCenter(cid, type, rep, content)
	values(7, "Q", null, "소셜 계정을 탈퇴하면 도미노피자도 탈퇴가 되나요?");
insert domino_csCenter(cid, type, rep, content)
	values(7, "A", 53, "소셜 계정(네이버, 카카오, T 로그인, 애플 계정 등)으로 연동 가입하신 경우,\n도미노피자 회원 가입이 되었고, 소셜계정으로 간편하게 로그인 할 수 있도록 연동 되어 있습니다.\n\n실제 소셜 계정을 탈퇴하는 경우 더 이상 그 소셜계정으로 도미노피자 로그인은 불가하지만, 도미노피자 회원에서 탈퇴가 되는 것은 아닙니다.\n\n도미노피자 탈퇴를 원하실 경우, 가입 시 생성한 ID/PW를 통해 로그인하시어 탈퇴를 하실 수 있습니다.");
insert domino_csCenter(cid, type, rep, content)
	values(7, "Q", null, "회원 가입 후 개명을 했는데 어떻게 하나요");
insert domino_csCenter(cid, type, rep, content)
	values(7, "A", 55, "아이디나 비밀번호를 분실 하신 경우는 개명된 정보로 찾기가 불가능 하기 때문에 고객만족팀(080-860-3082)으로 연락 부탁드립니다. 개명 전 정보 확인 후 로그인이 가능하도록 도와드립니다.\n로그인 후 나의정보>정보변경 페이지에서 본인인증을 다시 하면 개명된 정보를 업데이트 할 수 있습니다.");

-- etcList
insert domino_csCenter(cid, type, rep, content)
	values(8, "Q", null, "온라인 서베이 참여 쿠폰은 어떻게 사용하나요?");
insert domino_csCenter(cid, type, rep, content)
	values(8, "A", 57, "온라인 서베이 참여 후 제공되는 피자 20% 할인쿠폰은 인터넷 주문 시 이용 가능합니다.\n\n나의 정보 > 쿠폰함 메뉴에서 확인해 주세요.");
insert domino_csCenter(cid, type, rep, content)
	values(8, "Q", null, "도미노 피자의 단체주문은 어떨 때 이용할 수 있나요?");
insert domino_csCenter(cid, type, rep, content)
	values(8, "A", 59, "한 번에 여러 곳으로 배송하며 한 번에 결제를 원하실 때 이용하실 수 있습니다.");
insert domino_csCenter(cid, type, rep, content)
	values(8, "Q", null, "단체주문은 쿠폰과 함께 사용할 수 있나요?");
insert domino_csCenter(cid, type, rep, content)
	values(8, "A", 61, "다량주문은 할인이 되기 때문에 쿠폰 중복 사용은 불가합니다.");
insert domino_csCenter(cid, type, rep, content)
	values(8, "Q", null, "단체주문 결제는 어떻게 해야 되나요?");
insert domino_csCenter(cid, type, rep, content)
	values(8, "A", 63, "카드 및 현금 결제 모두 가능합니다.");
insert domino_csCenter(cid, type, rep, content)
	values(8, "Q", null, "단체주문 진행 시 세금계산서를 받을 수 있나요?");
insert domino_csCenter(cid, type, rep, content)
	values(8, "A", 65, "현금으로 결제하실 경우 세금계산서 발행이 가능합니다.\n(세법에 의거 2011.1.1부로 전자세금계산서 의무발행)");


select * from domino_csCenter;

select count(*) from domino_csCenter where content like '%온라인%';
select * from domino_csCenter 
	where content like '%영수증%';

select * 
	from
    domino_csCenter t2,
    (select * from domino_csCenter 
			where content like '%주문서%') t1 
	where t1.rep = t2.qid;

SELECT 
        qid,
        cid,
		type,
        rep,
        content,
        CASE WHEN ifnull(rep,0) = 0 THEN qid ELSE rep END AS group_id,
        CASE WHEN ifnull(rep,0) = 0 THEN 1 ELSE 2 END AS rank_order,
        ROW_NUMBER() OVER (PARTITION BY 
									CASE WHEN ifnull(rep,0) = 0
										THEN qid ELSE rep END ORDER BY 
                                    CASE WHEN ifnull(rep,0) = 0 
										THEN 1 ELSE 2 END, qid) AS row_num
    FROM (select * from domino_csCenter 
			where content like '%주문서%' 
            union all
            select * from domino_csCenter
            where qid in (select rep from domino_csCenter 
			where content like '%주문서%')) t1;
            
	select * from domino_csCenter where qid between 43 and 48;
	select * from domino_csCenter 
			where content like '%주문서%' 
            union all
            select * from domino_csCenter
            where qid in (select rep from domino_csCenter 
			where content like '%주문서%');

