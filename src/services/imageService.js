import http from "./httpService";

const API_END_POINT = "http://localhost:3000/api/resizeImage";

const getResizedImage = async (userInput) => {
  const data = new FormData();
  for (let key in userInput) data.append(key, userInput[key]);
  const { data: result } = await http.post(API_END_POINT, data);
  console.log(result);
  return result;
};

export { getResizedImage };
