const accessToken = "YOUR_TMDB_ACCESS_TOKEN";

export const BASE_URL = "https://api.themoviedb.org/3";

export const options: RequestInit = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
};
