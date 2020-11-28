import http from "./httpService";

const API_END_POINT = "http://localhost:3000/api/resizeImage";

const getResizedImage = async (userInput) => {
  const data = new FormData();
  for (let key in userInput) data.append(key, userInput[key]);
  const { result } = await http.post(API_END_POINT, data);
  return result;
};

export { getResizedImage };
