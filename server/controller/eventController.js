import * as repository from "../repository/eventRepository.js";

export const getEvent = async (req, res) => {
  const event = await repository.getEvent();

  res.json(event);
  res.end();
};

export const geteventdetail = async (req, res) => {
  const event = await repository.geteventdetail(req.params.id);

  res.json(event);
  res.end();
};

export const getDiscountDetail = async (req, res) => {
  const id = req.params.id;
  console.log("id:", id);
  const event = await repository.getDiscountDetail(id);

  res.json(event);
  res.end();
};

export const getMaindiscount = async (req, res) => {
  const discount = await repository.getMaindiscount();

  res.json(discount);

  res.end();
};

export const getTelecomDiscount = async (req, res) => {
  const discount = await repository.getTelecomDiscount();

  res.json(discount);

  res.end();
};

export const getCardDiscount = async (req, res) => {
  const discount = await repository.getCardDiscount();

  res.json(discount);

  res.end();
};

export const getTelecomDiscountDetail = async (req, res) => {
  const id = req.params.id;

  const discount = await repository.getTelecomDiscountDetail(id);

  res.json(discount);

  res.end();
};

export const getCardDiscountDetail = async (req, res) => {
  const id = req.params.id;

  const discount = await repository.getCardDiscountDetail(id);

  res.json(discount);

  res.end();
};
