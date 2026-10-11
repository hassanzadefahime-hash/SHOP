const API_URL = import.meta.env.VITE_API_URL;

export const getImageUrl = (image) => {
  if (!image) return "";

  return `${API_URL}images/${image}`;
};

export default API_URL;