import { db } from "../database/database_mysql80.js";

export const saveMoment = async (momentData) => {
  let result_row = 0;
  let sql = ``;
  // let sql = `insert domino_moment(user_id, momentDesc1, savedMonth1, savedDay1, momentDesc2, savedMonth2, savedDay2, momentDesc3, savedMonth3, savedDay3)
  //       values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

  if (momentData.formNum === "form1") {
    sql = `
     insert domino_moment(user_id, momentDesc1, savedMonth1, savedDay1)
        values(?, ?, ?, ?);
  `;
  } else if (momentData.formNum === "form2") {
    sql = `
     insert domino_moment(user_id, momentDesc2, savedMonth2, savedDay2)
        values(?, ?, ?, ?);
  `;
  } else if (momentData.formNum === "form3") {
    sql = `
     insert domino_moment(user_id, momentDesc3, savedMonth3, savedDay3)
        values(?, ?, ?, ?);
  `;
  }

  try {
    const [result] = await db.execute(sql, [
      momentData.userId,
      momentData.momentDescText,
      momentData.savedMonth,
      momentData.savedDay,
    ]);
    result_row = result.affectedRows;
    console.log("rows =>", result_row);
  } catch (error) {
    console.log(error);
  }

  return { cnt: result_row };
};

/*
 * db 데이터 출력 */
export const getList = async (userId) => {
  const sql = `
    select momentDesc1, savedMonth1, savedDay1, momentDesc2, savedMonth2, savedDay2, momentDesc3, savedMonth3, savedDay3
	    from domino_moment
      where user_id = ?
  `;

  return db.execute(sql, [userId]).then((result) => result[0]);
};
