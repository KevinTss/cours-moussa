import axios from 'axios';

class API {
  baseUrl = '';
  headers = {};

  constructor() {
    this.baseUrl = 'http://ctb2.promaniak.com/api';
  }

  getHeaders() {
    const token = window.localStorage.getItem('token');
    if (token) {
      this.setToken(token);
    }
    return this.headers;
  }

  setToken(token) {
    this.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  get(endpoint) {
    return axios({
      method: 'get',
      url: `${this.baseUrl}/${endpoint}`,
      headers: this.getHeaders(),
    });
  }

  post(endpoint, body) {
    return axios({
      method: 'post',
      url: `${this.baseUrl}/${endpoint}`,
      headers: this.getHeaders(),
      data: body,
    });
  }
}

export default new API();
