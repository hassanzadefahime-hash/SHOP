const API_URL = "https://marbin-api.onrender.com/";

export const getImageUrl = (image) => {
  if (!image) return "";

  return `${API_URL}images/${image}`;
};

export default API_URL;