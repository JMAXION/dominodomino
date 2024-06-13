import * as repository from "../repository/menuRepository.js";

export const getPizzas = async (req, res) => {
  const event = await repository.getPizzas();

  res.json(event);
  res.end();
};

export const getPizzasDetail = async (req, res) => {
  const { id } = req.params;
  const event = await repository.getPizzasDetail(id);

  res.json(event);
  res.end();
};

export const getPizzasDough = async (req, res) => {
  const id = req.params.id;

  const event = await repository.getPizzasDough(id);
  res.json(event);
  res.end();
};

export const getPizzasEdge = async (req, res) => {
  const id = req.params.id;

  const event = await repository.getPizzasEdge(id);
  res.json(event);
  res.end();
};

export const getPizzasTopping = async (req, res) => {
  const { topping } = req.body;

  const event = await repository.getPizzasTopping(topping);
  console.log(event);
  res.json(event);
  res.end();
};

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
  const { topping } = req.body;

  const event = await repository.getTopping(topping);

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
  //console.log(event);
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
