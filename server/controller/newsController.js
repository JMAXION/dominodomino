import * as repository from "../repository/newsRepository.js";

/*
 * 게시글 작성 */
export const write = async (req, res) => {
  const newsFormData = req.body;
  // console.log("newsFormData =>", newsFormData);
  const result = await repository.write(newsFormData);
  res.json(result);
};

/*
 * 게시글 리스트 가져오기 */
export const getList = async (req, res) => {
  const params = req.body;
  // console.log("params =>>", params);
  const result = await repository.getList(params);
  res.json(result);
};

/*
 * 게시글 상세 내용 가져오기 */
export const getDetail = async (req, res) => {
  const { bid } = req.params;
  // console.log("bid->", bid);
  const result = await repository.getDetail(bid);
  res.json(result);
};

/*
 * 조회수 업데이트 */
export const updateHits = async (req, res) => {
  const { bid } = req.body;
  const result = await repository.updateHits(bid);
  res.json(result);
};

/*
 * 총 게시글 개수 */
export const countNews = async (req, res) => {
  const result = await repository.countNews();
  res.json(result);
};

/*
 * 이전prev, 다음next 게시글 가져오기 */
export const getPrevNextNews = async (req, res) => {
  const currentBid = parseInt(req.params.bid);
  const prevBid = await repository.getPrevBid(currentBid);
  const nextBid = await repository.getNextBid(currentBid);
  const prevBtitle = await repository.getPrevBtitle(currentBid);
  const nextBtitle = await repository.getNextBtitle(currentBid);

  res.json({
    prevBid: prevBid,
    nextBid: nextBid,
    prevBtitle: prevBtitle,
    nextBtitle: nextBtitle,
  });
};
