import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjdlYTc2NmY4Mzk5YjZkNzBmMzkzNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDQzNTcwMywiZXhwIjoxNjgwNjk0OTAzfQ.j3vxnetHjJj_2LYTkdUOHwJ9mWhoReM7U0Nkjg6Mow4";

export const publicReq = axios.create({ baseURL: BASE_URL });

export const userReq = axios.create({
  baseURL: BASE_URL,
  header: { token: TOKEN },
});
