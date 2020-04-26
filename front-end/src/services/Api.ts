import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge',
});

export default Api;
