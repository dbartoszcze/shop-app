import axios from 'axios';
import { stringify } from 'qs';

import { apiBaseUrl } from '../constants';

const adminApiClient = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': true,
    'Access-Control-Allow-Headers': true,
  },
  paramsSerializer: params => stringify(params, { arrayFormat: 'repeat' }),
});

export { adminApiClient };