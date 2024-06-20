import axios, {AxiosRequestConfig} from 'axios';
import * as Keychain from 'react-native-keychain';

const apiServerUrl = 'http://192.168.1.10:8080/v1/api';

const getAxiosInstance = async () => {
  const credentials = await Keychain.getInternetCredentials('JWT_KEY');

  if (credentials && credentials.password) {
    axios.defaults.headers.common.Authorization = `Bearer ${credentials.password}`;
  }

  const axiosInstance = axios.create({
    baseURL: apiServerUrl,
    timeout: 15000,
  });

  return axiosInstance;
};

const api = async (
  url: string,
  data?: any,
  options: AxiosRequestConfig = {},
) => {
  try {
    const API = await getAxiosInstance();
    return await API({url, data, method: 'POST', ...options});
  } catch (error: any) {
    // const credentialsRefreshToken = await Keychain.getInternetCredentials(
    //   JWT_REFRESH_KEY,
    // );
    // if (
    //   error?.response?.status === 401 &&
    //   credentialsRefreshToken &&
    //   credentialsRefreshToken.password
    // ) {
    //   try {
    //     const refreshToken = await axios.post(
    //       apiServerUrl + '/api/v2/auth/refresh-token',
    //       {
    //         refreshToken: credentialsRefreshToken.password,
    //       },
    //     );
    //     if (refreshToken?.data?.accessToken) {
    //       await Helper.storeData(JWT_KEY, refreshToken.data.accessToken);
    //       await Helper.storeData(
    //         JWT_KEY_REFRESH,
    //         refreshToken.data?.refreshToken,
    //       );
    //       const API = await getAxiosInstance();
    //       return await API({url, data, method: 'POST', ...options});
    //     }
    //   } catch (errorRefresh) {
    //     await Helper.storeData(JWT_KEY_REFRESH, '');
    //     store.dispatch(actionLogout());
    //     notifyInvalid('Login session expired!', 'bottom');
    //     navigationRef.current?.getCurrentRoute().name !== LOGIN_SCREEN &&
    //       navigationRef.current?.reset({
    //         index: 0,
    //         routes: [{name: LOGIN_SCREEN}],
    //       });
    //   }
    // }
    __DEV__ && console.log(error?.response?.data);
    return Promise.reject(
      (typeof error?.response?.data?.message === 'string'
        ? error?.response?.data?.message
        : error?.response?.data?.message?.[0]) || error,
    );
  }
};

export default api;
