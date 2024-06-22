import api from './api';

export async function fetchProduct(params: {
  name: string;
  limit: number;
  page: number;
}) {
  return api('/product/list', null, {
    method: 'GET',
    params,
  });
}
