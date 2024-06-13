import { db } from "../database/database_mysql80.js";

/*
 * 게시글 작성 */
export const write = async (newsFormData) => {
  let result_rows = 0;

  const sql = `
    insert domino_newsBoard(btitle, bcontent, bhits, bdate)
      values(?, ?, 0, now())
  `;

  try {
    const [result] = await db.execute(sql, [
      newsFormData.btitle,
      newsFormData.bcontent,
    ]);
    result_rows = result.affectedRows;
  } catch (error) {
    console.log(error);
  }

  return { cnt: result_rows };
};

/*
 * 게시글 리스트 가져오기 */
export const getList = async (params) => {
  const sql = `
  select rno, bid, btitle, bcontent, bhits, bdate, total from
    (select row_number() over(order by bdate asc) as rno,
		        bid, 
		        btitle, 
            bcontent,
            bhits, 
            left(bdate, 10) as bdate,
            (select count(*) from domino_newsBoard) total
    from domino_newsBoard) sb1
    where rno between ? and ?
  `;

  if (params.startIndex === undefined || params.endIndex === undefined) {
    throw new Error("startIndex 또는 endIndex가 정의되지 않았습니다.");
  }

  return db
    .execute(sql, [params.startIndex, params.endIndex])
    .then((result) => result[0]);
};

/*
 * 게시글 상세 내용 가져오기 */
export const getDetail = async (bid) => {
  const sql = `
    select bid,
	         btitle,
           bcontent,
           bhits,
           left(bdate,10) as bdate
	    from domino_newsboard
      where bid = ?;
  `;

  return db
    .execute(sql, [bid])
    .then((result) => result[0][0])
    .catch((error) => console.log(error));
};

/*
 * 조회수 업데이트 */
export const updateHits = async (bid) => {
  let result_rows = 0;
  const sql = `
    update domino_newsBoard
      set bhits = bhits + 1
      where bid = ?
  `;
  try {
    const [result] = await db.execute(sql, [bid]);
    result_rows = result.affectedRows;
  } catch (error) {
    console.log(error);
  }

  return { cnt: result_rows };
};

/*
 * 총 게시글 개수 */
export const countNews = () => {
  const sql = `
    select count(*) as count from domino_newsboard;
  `;

  return db.execute(sql).then((result) => result[0][0]);
};
