import ApiClient from './ApiClient';

export const __CreateJobsiteUser = async (data) => {
  console.log('SVC CreateJobsiteUser: ', data)
  try {
    const res = await ApiClient.post('/jobsite_users/', data);
    return res.data;
  } catch (error) {
    throw error;
  }
}

