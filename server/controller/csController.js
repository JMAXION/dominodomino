import * as repository from "../repository/csRepository.js";

export const getCsList = async (req, res) => {
  const { cid } = req.body;
  console.log("controller cid =>", cid);
  try {
    const result = await repository.getCsList(cid);
    // console.log("getCsList result =>", result);
    res.json(result);
  } catch (error) {
    // console.error("Error in getCsList:", error);
    // res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getSearchList = async (req, res) => {
  const searchInput = req.body.searchInput;
  console.log("searchInput =>", searchInput);
  try {
    const result = await repository.getSearchList(searchInput);
    console.log("getSearchList result =>", result);
    res.json(result);
  } catch (error) {
    console.error("Error in getSearchList:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
