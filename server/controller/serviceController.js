import * as repository from "../repository/serviceRepository.js";

export const saveMoment = async (req, res) => {
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
