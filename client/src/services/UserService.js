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

export const __CreateUser = async (formData) => {
  try {
    const res = await ApiClient.post('/users/', formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __UpdateUser = async (formData) => {
  try {
    const res = await ApiClient.put('/users/', formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __LoginUser = async (userData) => {
  try {
    const res = await ApiClient.post('/users/login', userData);
    console.log('Logged in');
    return res.data;
  } catch (error) {
    throw error;
  }
};


