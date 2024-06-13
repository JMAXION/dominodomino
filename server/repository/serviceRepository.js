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
    console.log("insert rows =>", result_row);
  } catch (error) {
    console.log(error);
  }

  return { cnt: result_row };
};

/*
 * 모멘트 데이터 수정 */
export const modify = async (momentData) => {
  let result_row = 0;
  const sql = ``;

  if (momentData.formNum === "form1") {
    sql = `
     update domino_moment
        set momentDesc1 = ?, savedMonth1 = ?, savedDay1 = ?
        where user_id = ?

  `;
  } else if (momentData.formNum === "form2") {
    sql = `
      update domino_moment
        set momentDesc2 = ?, savedMonth2 = ?, savedDay2 = ?
        where user_id = ?
  `;
  } else if (momentData.formNum === "form3") {
    sql = `
      update domino_moment
        set momentDesc3 = ?, savedMonth3 = ?, savedDay3 = ?
        where user_id = ?
  `;
  }

  try {
    const [result] = await db.execute(sql, [
      momentData.momentDescText,
      momentData.savedMonth,
      momentData.savedDay,
      momentData.userId,
    ]);
    result_row = result.affectedRows;
    console.log("modify rows =>", result_row);
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
