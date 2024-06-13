import { promises as fsPromises } from "fs";

export const getTest = (id) => {
  const path = "data/test.json";
  const test = fsPromises
    .readFile(path, "utf-8")
    .then((data) => {
      return JSON.parse(data);
    })
    .catch((error) => console.log(error));
  return test;
};
