import axios from "axios";

class API {
  baseUrl = "";

  constructor() {
    this.baseUrl = "http://ctb2.promaniak.com/api";
    //this.baseUrl = "http://ctb_backend1.test/api";
  }

  getHeaders() {
    const token = window.localStorage.getItem("token");
    if (token) {
      return {
        Authorization: `Bearer ${token}`,
      };
    }
    return {};
  }

  get(endpoint) {
    return axios({
      method: "get",
      url: `${this.baseUrl}/${endpoint}`,
      headers: this.getHeaders(),
    });
  }

  post(endpoint, body) {
    return axios({
      method: "post",
      url: `${this.baseUrl}/${endpoint}`,
      headers: this.getHeaders(),
      data: body,
    });
  }
}

export default new API();
