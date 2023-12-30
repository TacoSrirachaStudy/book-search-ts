import axios from 'axios';

export const fetcher = async (url: string) => {
  const response = await axios.get(url, {
    headers: {
      Authorization: `${import.meta.env.VITE_REST_API_KEY}`,
    },
  });
  return response.data.documents;
};
