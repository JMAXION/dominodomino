import express from "express";
import * as controller from "../controller/menuController.js";

const router = express.Router();

router.post("/", controller.getPizza);
router.post("/halfnhalf", controller.getPizza);
router.post("/halfnhalf/pizzaleft", controller.getLeftPizza);
router.post("/halfnhalf/pizzaright", controller.getRightPizza);
router.post("/halfnhalf/dough", controller.getDoughPizza);
router.post("/halfnhalf/edge", controller.getEdgePizza);
router.post("/halfnhalf/topping", controller.getTopping);
router.post("/halfnhalf/secondchoice", controller.getSecondChoice);
router.post("/halfnhalf/side", controller.getSide);
router.post("/halfnhalf/drink", controller.getDrink);
router.post("/halfnhalf/orderinsert", controller.orderInsert);
router.post("/halfnhalf/orderresult", controller.getOrderResult);
export default router;
