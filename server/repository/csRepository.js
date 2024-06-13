import { db } from "../database/database_mysql80.js";

export const getCsList = async (cid) => {
  const sql = `
  select type, content from domino_csCenter where cid = ?
  `;

  return db.execute(sql, [cid]).then((result) => result[0]);
};

export const getSearchList = async (searchInput) => {
  const sql = `
    select 
        qid,
        rep,
        type,
        content,
        case when ifnull(rep,0) = 0 then qid else rep end as group_id,
        case when ifnull(rep,0) = 0 then 1 else 2 end as rank_order,
        row_number() over (partition by 
									case when ifnull(rep,0) = 0
										then qid else rep end order by 
                                    case when ifnull(rep,0) = 0 
										then 1 else 2 end, qid) as row_num
    from (select * from domino_csCenter 
			where content like ? 
            union all
            select * from domino_csCenter
            where qid in (select rep from domino_csCenter 
			where content like ?)) t1
  `;
  try {
    const [rows] = await db.execute(sql, [
      `%${searchInput}%`,
      `%${searchInput}%`,
    ]);
    return rows;
  } catch (error) {
    console.error("Error executing SQL query:", error);
    throw error;
  }
};
