import ApiClient from './ApiClient';

export const __CreateJobsiteUser = async (data) => {
  try {
    const res = await ApiClient.post('/jobsite_users/', data);
    return res.data;
  } catch (error) {
    throw error;
  }
}

