import express from "express";
import * as controller from "../controller/eventController.js";

const router = express.Router();

router.get("/", controller.getEvent);
router.get("/detail/:id", controller.geteventdetail);
router.get("/discount", controller.getMaindiscount);
router.get("/discount/telecom", controller.getTelecomDiscount);
router.get("/discount/card", controller.getCardDiscount);
router.get("/discount/detail/:id", controller.getDiscountDetail);
router.get("/discount/telecom/detail/:id", controller.getTelecomDiscountDetail);
router.get("/discount/card/detail/:id", controller.getCardDiscountDetail);
console.log("라우터111");
export default router;
