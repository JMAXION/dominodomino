import express from "express";
import * as controller from "../controller/memberController.js";

const router = express.Router();

router.post("/idCheck", controller.getIdCheck);
router.post("/signup", controller.getSignup);
router.post("/login", controller.getLogin);
router.get("/info/:userId", controller.getUserInfo);

export default router;
