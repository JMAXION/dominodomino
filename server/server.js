import express from "express";
import cors from "cors";
import eventRouter from "./router/eventRouter.js";
import menuRouter from "./router/menuRouter.js";
import memberRouter from "./router/memberRouter.js";
const server = express();
const port = 8080;

server.use(express.json());
server.use(express.urlencoded());
server.use(cors({ credentials: true, origin: "http://localhost:3000" }));

server.use("/", eventRouter);
server.use("/event", eventRouter);
server.use("/menu", menuRouter);
server.use("/member", memberRouter);

console.log("서버");
server.listen(port, () => {
  console.log("server start");
});
