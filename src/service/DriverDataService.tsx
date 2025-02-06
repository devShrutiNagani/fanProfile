import {DRIVER_DATA, DRIVER_DETAILS} from '../constant/Urls';
import {getRequest} from '../helper/AxiosClient';

export const getDriverData = () => {
  return getRequest(DRIVER_DATA, '');
};

export const getDriverDetails = () => {
  return getRequest(DRIVER_DETAILS, '');
};
