import {SignUpParams} from 'models/auth';
import api from './api';

export async function login({
  password,
  email,
}: {
  email: string;
  password: string;
}) {
  return api('/access/login', {password, email});
}

export async function register(body: SignUpParams) {
  return api('/access/signup', body);
}
