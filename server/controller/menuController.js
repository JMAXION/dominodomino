import * as repository from "../repository/menuRepository.js";
export const getPizza = async (req, res) => {
  const halfChoice = req.body;

  const event = await repository.getPizza(halfChoice);

  res.json(event);
  res.end();
};

export const getLeftPizza = async (req, res) => {
  const { id } = req.body;

  const event = await repository.getLeftPizza(id);

  res.json(event);
  res.end();
};

export const getRightPizza = async (req, res) => {
  const { id, type } = req.body;
  console.log(id, type);
  const event = await repository.getLeftPizza(id, type);

  res.json(event);
  res.end();
};

export const getDoughPizza = async (req, res) => {
  const { id } = req.body;

  const event = await repository.getDoughPizza(id);

  res.json(event);
  res.end();
};

export const getEdgePizza = async (req, res) => {
  const { id } = req.body;

  const event = await repository.getEdgePizza(id);

  res.json(event);

  res.end();
};

export const getTopping = async (req, res) => {
  const { topping } = req.body;

  const event = await repository.getTopping(topping);

  res.json(event);
  console.log(event);
  res.end();
};

export const getSecondChoice = async (req, res) => {
  const { id } = req.body;

  const event = await repository.getSecondChoice(id);

  res.json(event);

  res.end();
};

export const getSide = async (req, res) => {
  const side = req.body;

  const event = await repository.getSide(side);
  console.log(event);
  res.json(event);
  res.end();
};
