import fileDownload from "js-file-download";
import http from "./httpService";

const API_END_POINT = "https://handy-back-end.herokuapp.com/api/resize-image";

const getResizedImage = async (userInput) => {
  const data = new FormData();
  for (let key in userInput) data.append(key, userInput[key]);

  const response = await http.post(API_END_POINT, data, {
    responseType: "blob",
  });

  const imageExtension = response.headers["content-type"].split("/").slice(-1);
  const imageName = Date.now();

  fileDownload(response.data, `${imageName}.${imageExtension}`);
};

export { getResizedImage };
