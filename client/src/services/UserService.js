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

export const __GetProfile = async (account_id) => {
  try {
    console.log('SVC: __GetProfile: account_id: ', account_id);
    const res = await ApiClient.get(`/accounts/${account_id}`);
    console.log('SVC: _GetProfile: acct data: ', res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __RegisterUser = async (formData) => {
  try {
    const res = await ApiClient.post('/accounts/', formData);
    setLocalAccountId(res.data.id);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __LoginUser = async (userData) => {
  try {
    const res = await ApiClient.post('/accounts/login', userData);
    setLocalAccountId(res.data.id);
    console.log('Logged in');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const _SignOutUser = () => {
  localStorage.clear('account_id');
};

const setLocalAccountId = (account_id) => {
  localStorage.setItem('account_id', account_id);
};

export const __UpdateFocus = async (userData) => {
  const accountId = localStorage.getItem('account_id')
  console.log("__UpdateFocus HIT, accountId:", accountId, `userData:`, userData);
  try {
    const updatedFocus = await ApiClient.put(`/accounts/${accountId}`, userData)
    console.log(`updatedFocus variable:`, updatedFocus)
    return updatedFocus
  } catch(error) {
    throw error
  }
};

