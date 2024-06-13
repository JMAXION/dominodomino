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

  res.json(event);
  res.end();
};

export const getSides = async (req, res) => {
  const event = await repository.getSides();

  res.json(event);
  res.end();
};

export const getSidesDetail = async (req, res) => {
  const { id } = req.params;
  const event = await repository.getSidesDetail(id);

  res.json(event);
  res.end();
};

export const getPopular = async (req, res) => {
  const event = await repository.getPopular();

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

export const getDrink = async (req, res) => {
  const drink = req.body;

  const event = await repository.getDrink(drink);
  console.log(event);
  res.json(event);
  res.end();
};

export const orderInsert = async (req, res) => {
  const order = req.body;
  const event = await repository.orderInsert(order);
  res.json(event);
  res.end();
};

export const getOrderResult = async (req, res) => {
  const { orderNumber } = req.body;
  console.log("orderNumber==>", orderNumber);
  const event = await repository.getOrderResult(orderNumber);
  res.json(event);
  res.end();
};
