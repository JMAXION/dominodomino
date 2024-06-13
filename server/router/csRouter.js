import express from "express";
import * as controller from "../controller/csController.js";

const router = express.Router();

router.post("/order", controller.getCsList);
router.post("/search", controller.getSearchList);

export default router;
