import * as repository from "../repository/memberRepository.js";

export const getIdCheck = async (req, res) => {
  const { userId } = req.body;
  const result = await repository.getIdCheck(userId);
  res.json(result);
  res.end();
};

export const getSignup = async (req, res) => {
  const formData = req.body;
  const result = await repository.getSignup(formData);
  res.json(result);
  res.end();
};

export const getLogin = async (req, res) => {
  const { userId, userPass } = req.body;
  const result = await repository.getLogin(userId, userPass);
  res.json(result);
  res.end();
};

export const getUserInfo = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  const result = await repository.getUserInfo(userId);
  res.json(result);
  res.end();
};
