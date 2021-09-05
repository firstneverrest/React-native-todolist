import { deleteData } from './storage';

export const logout = () => {
  deleteData('token');
};
