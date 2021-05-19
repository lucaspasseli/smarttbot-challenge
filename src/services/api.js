import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-front-test.k8s.smarttbot.com/api/v1/",
});
