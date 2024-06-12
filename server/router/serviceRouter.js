import express from "express";
import * as controller from "../controller/serviceController.js";

const router = express.Router();

router.post("/moment/dbData", controller.getList);
router.post("/moment/save", controller.saveMoment);

export default router;
