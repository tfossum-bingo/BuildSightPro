import ApiClient from './ApiClient';

export const __GetProfiles = async () => {
  try {
    console.log('##HIT: SVC: __GetProfiles');
    const res = await ApiClient.get(`/users`);
    console.log('SVC: _GetProfiles: acct data: ', res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetUser = async (user_id) => {
  try {
    console.log('SVC: __GetUser: user_id: ', user_id);
    const res = await ApiClient.get(`/users/${user_id}`);
    console.log('SVC: _GetUser: user data: ', res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __RegisterUser = async (formData) => {
  try {
    const res = await ApiClient.post('/users/', formData);
    setLocalUserId(res.data.id);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __LoginUser = async (userData) => {
  try {
    const res = await ApiClient.post('/users/login', userData);
    setLocalUserId(res.data.id);
    console.log('Logged in');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const _SignOutUser = () => {
  localStorage.clear('user_id');
};

const setLocalUserId = (user_id) => {
  localStorage.setItem('user_id', user_id);
};

