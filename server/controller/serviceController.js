import * as repository from "../repository/serviceRepository.js";

/*
 * 모멘트 데이터 저장 */
export const saveMoment = async (req, res) => {
  const momentData = req.body;
  const result = await repository.saveMoment(momentData);
  res.json(result);
};

/*
 * 모멘트 데이터 수정 */
export const modify = async (req, res) => {
  const momentData = req.body;
  const result = await repository.saveMoment(momentData);
  res.json(result);
};

/*
 * db 데이터 출력 */
export const getList = async (req, res) => {
  const { userId } = req.body;
  const result = await repository.getList(userId);
  res.json(result);
};
