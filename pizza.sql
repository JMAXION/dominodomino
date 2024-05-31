CREATE TABLE pizza ( pid INT AUTO_INCREMENT PRIMARY KEY,
					 img VARCHAR(300),
                     pname VARCHAR(20), -- 피자 이름
                     lprice VARCHAR(8), -- 라지 사이즈 가격
                     mprice VARCHAR(8), -- 미디움 사이즈 가격
                     desc1 VARCHAR(100), -- 설명1 예) #바다와 육지의 대왕이 하나로
                     desc2 VARCHAR(100), -- 설명2
                     country VARCHAR(500), -- 원산지 정보
					 topping VARCHAR(500), -- 토핑정보
                     did INT,              -- 옵션 테이블의 도우 id
                     eid INT			   -- 옵션 테이블의 엣지 id
                     );
                     
CREATE TABLE pizza_option(pid INT,
						  did INT,			 -- 도우id
                          dname VARCHAR(20), -- 도우 이름
                          dprice VARCHAR(8), -- 도우 가격
                          eid INT,           -- 엣지 id
                          ename VARCHAR(20), -- 엣지 이름
                          eprice VARCHAR(8), -- 엣지 가격
                          eimage1 VARCHAR(200), -- 더블 치즈 엣지 선택시 이미지
                          eimage2 VARCHAR(200), -- 트리플 치즈 버스트 엣지 선택시 이미지
                          eimage3 VARCHAR(200), -- 고구마쥬 엣지 선택시 이미지
                          eimage4 VARCHAR(200) -- 프로마쥬 페퍼로니 엣지 일때 이미지
                          );
                          
-- 토핑은 어느 피자를 고르든 다 똑같기 때문에 테이블을 따로 정의 
CREATE TABLE topping ( tid INT AUTO_INCREMENT PRIMARY KEY,
					   tname VARCHAR(50),   -- 토핑 이름
                       timage VARCHAR(200), -- 토핑 이미지
                       tkind VARCHAR(50),   -- 토핑 종류 예) mainTopping, cheeseTopping, 퐁듀토핑
                       tprice VARCHAR(8)   -- 토핑 가격
						);
                        
                        
 -- 사이드는 어느 피자를 고르든 다 똑같기 때문에 테이블을 따로 정의                      
CREATE TABLE side (sid INT AUTO_INCREMENT PRIMARY KEY,
					   sname VARCHAR(50),   -- 사이드 이름
                       simage VARCHAR(200), -- 사이드 이미지
                       skind VARCHAR(50),   -- 사이드 종류 예) 특가, 일반
                       sprice VARCHAR(8)   -- 사이드 가격
						);
                        
 -- 음료,기타는 어느 피자를 고르든 다 똑같기 때문에 테이블을 따로 정의                       
CREATE TABLE drink_beverage( 
					   did INT AUTO_INCREMENT PRIMARY KEY,
					   dname VARCHAR(50),   -- 음료 이름
                       dimage VARCHAR(200), -- 음료 이미지
                       dprice VARCHAR(8)   -- 음료 가격
						);
                                                
