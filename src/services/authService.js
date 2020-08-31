import http from "./httpService";
import { apiURL } from "../config.json";

function login(email, password) {
  return http.post(apiURL, { email, password });
}

export default {
  login,
};
