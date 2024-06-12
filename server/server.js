import express from "express";
import cors from "cors";
import eventRouter from "./router/eventRouter.js";
import menuRouter from "./router/menuRouter.js";
import memberRouter from "./router/memberRouter.js";
import newsRouter from "./router/newsRouter.js";
import csRouter from "./router/csRouter.js";
import serviceRouter from "./router/serviceRouter.js";
import { db } from "./database/database_mysql80.js";
const server = express();
const port = 8080;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors({ credentials: true, origin: "http://localhost:3000" }));

server.use("/", eventRouter);
server.use("/event", eventRouter);
server.use("/menu", menuRouter);
server.use("/member", memberRouter);
server.use("/news", newsRouter);
server.use("/cs", csRouter);
server.use("/service", serviceRouter);

console.log("서버");
server.listen(port, () => {
  console.log("server start");
});
