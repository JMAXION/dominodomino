import express from "express";
import * as controller from "../controller/menuController.js";

const router = express.Router();

router.post("/", controller.getPizza);
router.get("/pizzas", controller.getPizzas);
router.get("/pizzas/:id", controller.getPizzasDetail);
router.get("/pizzas/:id/dough", controller.getPizzasDough);
router.get("/pizzas/:id/edge", controller.getPizzasEdge);
router.post("/pizzas/topping", controller.getPizzasTopping);
router.get("/sides", controller.getSides);
router.get("/sides/:id", controller.getSidesDetail);
router.get("/popular", controller.getPopular);
router.post("/halfnhalf", controller.getPizza);
router.post("/halfnhalf/pizzaleft", controller.getLeftPizza);
router.post("/halfnhalf/pizzaright", controller.getRightPizza);
router.post("/halfnhalf/dough", controller.getDoughPizza);
router.post("/halfnhalf/edge", controller.getEdgePizza);
router.post("/halfnhalf/topping", controller.getTopping);
router.post("/halfnhalf/secondchoice", controller.getSecondChoice);
router.post("/halfnhalf/side", controller.getSide);
export default router;
