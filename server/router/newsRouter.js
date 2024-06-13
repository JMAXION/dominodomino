import express from "express";
import * as controller from "../controller/newsController.js";

const router = express.Router();

router.post("/", controller.getList);
router.get("/:bid", controller.getDetail);
router.post("/write", controller.write);
router.post("/updateHits", controller.updateHits);
router.post("/countNews", controller.countNews);
router.get("/prev-next/:bid", controller.getPrevNextNews);

export default router;
