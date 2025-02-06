import axios, {AxiosError} from 'axios';
import {Alert} from 'react-native';
const commonErrorHandler = (error: AxiosError) => {
  if (error?.response?.status === 401) {
    Alert.alert('Unauthorized');
  } else if (error?.response?.status === 500) {
    Alert.alert('Something went wrong.');
  }
};

export const getRequest = async (
  url: string,
  headersParams: Record<string, string> | '',
) => {
  headersParams = headersParams ? headersParams : {'Cache-Control': 'no-cache'};
  let response = await axios
    .get(url, {
      headers: {...headersParams},
    })
    .then(res => {
      return res;
    })
    .catch(async error => {
      commonErrorHandler(error);
      return error as AxiosError;
    });
  return response;
};
