import api from './api';

export async function addCart(
  body: {
    order_id: number;
    productId: number;
    quantity: number;
  },
  user_id: number,
) {
  return api('/orderDetail/create', body, {
    method: 'POST',
    headers: {
      'x-client-id': user_id,
    },
  });
}

export async function fetchListCart({
  user_id,
  id,
}: {
  user_id: number;
  id: number;
}) {
  return api('/orderDetail/get-orderDetail-byId', null, {
    method: 'GET',
    params: {user_id, id},
    headers: {
      'x-client-id': user_id,
    },
  });
}

export const listOrderList = async (userId: number) => {
  return api('/order/list', null, {
    method: 'GET',
    params: {
      order_status: 'pending',
      user_id: userId,
      limit: 1,
    },
    headers: {
      'x-client-id': userId,
    },
  });
};

export const orderProduct = async (body: any, userId) => {
  return api('/order/update', body, {
    method: 'PUT',
    headers: {
      'x-client-id': userId,
    },
  });
};

export const createOrder = async (user_id: number) => {
  return api('/order/create-orders', {user_id});
};

export const removeCart = async (id: number, userId: number) => {
  return api(`/orderDetail/delete/${id}`, null, {
    method: 'DELETE',
    headers: {
      'x-client-id': userId,
    },
  });
};
