import httpService from './http.service';

const API_URL = '/api/income/';

const get = () => {
  return httpService.get(API_URL);
};

const incomeService = {
  get
};

export default incomeService;
