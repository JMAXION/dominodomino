<<<<<<< HEAD
import express from "express";
import cors from "cors";
import eventRouter from "./router/eventRouter.js";
import menuRouter from "./router/menuRouter.js";
import memberRouter from "./router/memberRouter.js";
import newsRouter from "./router/newsRouter.js";
const server = express();
const port = 8080;

server.use(express.json());
server.use(express.urlencoded());
server.use(cors({ credentials: true, origin: "http://localhost:3000" }));

server.use("/", eventRouter);
server.use("/event", eventRouter);
server.use("/menu", menuRouter);
server.use("/member", memberRouter);
server.use("/news", newsRouter);

console.log("서버");
server.listen(port, () => {
  console.log("server start");
});
=======
import express from "express";
import cors from "cors";
import eventRouter from "./router/eventRouter.js";
import menuRouter from "./router/menuRouter.js";
import memberRouter from "./router/memberRouter.js";
import newsRouter from "./router/newsRouter.js";
import csRouter from "./router/csRouter.js";
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
server.get("/news/prev-next/:bid", async (req, res) => {
  const currentBid = parseInt(req.params.bid);
  try {
    //이전 게시물 bid 가져오기
    const [prevBid] = await db.query(
      "SELECT bid FROM domino_newsBoard WHERE bid < ? ORDER BY bid DESC LIMIT 1",
      [currentBid]
    );
    //다음 게시물 bid 가져오기
    const [nextBid] = await db.query(
      "SELECT bid FROM domino_newsBoard WHERE bid > ? ORDER BY bid ASC LIMIT 1",
      [currentBid]
    );
    //이전 게시물 btitle 가져오기
    const [prevBtitle] = await db.query(
      "select btitle from domino_newsBoard where bid < ? order by bid desc limit 1;",
      [currentBid]
    );
    //다음 게시물 btitle 가져오기
    const [nextBtitle] = await db.query(
      "SELECT btitle FROM domino_newsBoard WHERE bid > ? ORDER BY bid ASC LIMIT 1",
      [currentBid]
    );

    res.json({
      prevBid: prevBid.length > 0 ? prevBid[0].bid : null,
      nextBid: nextBid.length > 0 ? nextBid[0].bid : null,
      prevBtitle: prevBtitle.length > 0 ? prevBtitle[0].btitle : "",
      nextBtitle: nextBtitle.length > 0 ? nextBtitle[0].btitle : "",
    });
  } catch (error) {
    console.log(error);
  }
});
server.use("/cs", csRouter);

// server.get("/cs/search", (req, res) => {
//   const searchInput = req.searchInput.q;
//   const sqlQuery = `select * from domino_csCenter where content like ?`;
//   db.all(sqlQuery, [`%${searchInput}%`], (err, rows) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.json(rows);
//     }
//   });
// });

console.log("서버");
server.listen(port, () => {
  console.log("server start");
});
>>>>>>> origin/ryu
